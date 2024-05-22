import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.addMenuToggleListener();
  }

  redirectToInicio() {
    this.router.navigate(['/inicio']);
  }

  redirectToCategorias() {
    this.router.navigate(['/categorias']);
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

