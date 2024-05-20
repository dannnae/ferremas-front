import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit{
  tokenPago: string | undefined; 
  carrito: any;
  constructor(private djangoservice: DjangoService, private router: Router, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe(
      (response) => {
        this.carrito = response
        console.log(this.carrito)
      }
    )
  }

  crearBoleta() {
    this.djangoservice.crearBoleta(this.carrito.id).subscribe(
      (response) => {
        console.log('respuesta de creación de boleta:', response);
        const navigationExtras: NavigationExtras = {
          state: {
            htmlContent: response
          }
        };
        this.router.navigate(['/webpay'], navigationExtras);
      },
      (error) => {
        console.log(error)
      }
    )
  }
      
}

