import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  tokenPago: string | undefined; 

  constructor(private djangoservice: DjangoService, private router: Router) { }

  crearBoleta() {
    const boletaData = {
      direccion_entrega: 'asd', 
      tienda_entrega: '1', 
      usuario: '1', 
      valor_total: 111
    };

    this.djangoservice.crearBoleta(boletaData).subscribe(
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

