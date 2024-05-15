import { Component } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  tokenPago: string | undefined; 

  constructor(private djangoservice: DjangoService) { }

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
        this.djangoservice.confirmarPago(response.url, { 'token_ws': response.token }).subscribe(
          (response) => {
            console.log(response)
          },
          (error) => {
            console.log(error)
          }
        )
      },
      (error) => {
        console.error('Error al crear la boleta:', error);
      }
    );
  }
      
}

