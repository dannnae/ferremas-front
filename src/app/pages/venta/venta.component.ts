import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { regiones } from 'src/comunas-regiones';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  carrito: any = { items: [] }; 
  selectedOption: string = 'Debito o credito';
  selected: string = 'Domicilio';
  totalPedido: number = 0;
  regiones = regiones;
  comunas: string[] = [];

  datos = {
    boleta: null,
    nombre: '',
    apellidos: '',
    email: '',
    rut: '',
    telefono: '',
    region: '',
    comuna: '',
    direccion: '',
    direccion2: '',
    envio: 0,
  }

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
        this.datos.boleta = response.id;
        this.calcularTotalPedido();
        this.cdr.detectChanges(); 
      },
      (error) => {
        console.error('Error fetching carrito:', error);
      }
    );
  }

  onRegionChange() {
    const selectedRegionObj = this.regiones.find(r => r.region === this.datos.region);
    this.comunas = selectedRegionObj ? selectedRegionObj.comunas : [];
  }

  onRadioChange(value: string) {
    this.selectedOption = value;
  }

  onEnvioChange(value: string) {
    this.selected = value;
    this.calcularTotalPedido(); 
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

  guardarDatosFactura() {
    this.datos.envio = this.selected === 'Domicilio' ? 5000 : 0;
    this.djangoservice.datosFactura(this.datos).subscribe(
      (response) => {
        console.log('datos guardados', response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  guardarYCrearBoleta() {
    this.guardarDatosFactura();
    this.crearBoleta();
  }

  calcularTotalPedido() {
    this.totalPedido = 0;
    this.datos.envio = this.selected === 'Domicilio' ? 5000 : 0;

    for (let item of this.carrito.pedidos) {
      this.totalPedido += item.valor_total;
    }

    this.totalPedido += this.datos.envio; 
  }
}
