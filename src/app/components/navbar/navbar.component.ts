import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;

  constructor(private router: Router, private authservice: AuthService ) { }

  ngOnInit(): void {
    this.checkAuthentication();
    this.addMenuToggleListener();
  }

  checkAuthentication(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      const decodedAccessToken = JSON.parse(jsonPayload);
      this.authservice.getTipoUsuario(decodedAccessToken.user_id).subscribe(
        (response) => {
          this.isAdmin = response.type === "ADMIN" ? true : false;
        }
      )
    }
    this.isAuthenticated = !!token;
  }

  redirectToInicio() {
    this.router.navigate(['/inicio']);
  }

  redirectToCategorias() {
    this.router.navigate(['/categorias']);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  redirectToCarro() {
    this.router.navigate(['/carro']);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  addMenuToggleListener(): void {
    const toggleButton = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');

    if (toggleButton && menu) {
      toggleButton.addEventListener('click', () => {
        menu.classList.toggle('navbar__menu--open');
      });
    }
  }
}
