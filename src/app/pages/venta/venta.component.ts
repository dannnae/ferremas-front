import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  carrito: any = { items: [] }; 
  selectedOption: string = 'Debito o credito';
  totalPedido: number = 0;

  constructor(
    private djangoservice: DjangoService, 
    private router: Router, 
    private carritoService: CarritoService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe(
      (response) => {
        console.log('Carrito Response:', response);
        this.carrito = response;
        this.calcularTotalPedido();
        this.cdr.detectChanges(); 
      },
      (error) => {
        console.error('Error fetching carrito:', error);
      }
    );
  }

  onRadioChange(value: string) {
    this.selectedOption = value;
  }

  crearBoleta() {
    if (this.selectedOption === 'Debito o credito') {
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
          console.log(error);
        }
      );
    } else {
      console.log('Pago por transferencia seleccionado');
    }
  }
  calcularTotalPedido() {
    this.totalPedido = 0;
    for (let item of this.carrito.pedidos) {
      this.totalPedido += item.valor_total;
    }
  }
}

