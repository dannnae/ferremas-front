import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkAuthentication();
    this.addMenuToggleListener();
  }

  checkAuthentication(): void {
    const token = localStorage.getItem('access_token');
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
