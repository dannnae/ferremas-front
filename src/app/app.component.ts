import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { DjangoService } from './services/django.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ferremas-front';
  cartProducts: any[] = [];
  subTotal: number = 0;
  constructor(private DjangoService : DjangoService, private router: Router) {
    
  }

  redirectToVenta() {
    this.router.navigateByUrl("/venta");
  }
}

