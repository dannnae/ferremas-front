import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent {
  carrito: any;
  subtotal: number = 0;
  total: number = 0;

  constructor(private router: Router, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe(
      (response) => {
        this.carrito = response;
        this.calcularTotales();
      }
    );
  }

  editarCantidad(pedido: any, cantidad: number) {
    const nuevaCantidad = pedido.cantidad + cantidad;

    if (nuevaCantidad === 0) {
      this.carritoService.eliminarPedido({ pedido_id: pedido.id }).subscribe(
        (response) => {
          this.carrito.pedidos = this.carrito.pedidos.filter((p: any) => p.id !== pedido.id);
          this.calcularTotales();
        }
      );
    } else {
      this.carritoService.editarPedido({ producto_id: pedido.producto, cantidad: nuevaCantidad }, this.carrito.id).subscribe(
        (response) => {
          this.carrito = response;
          this.calcularTotales();
        }
      );
    }
  }

  // calcularEnvio() {
  //   const costoEnvio = 5000; 
  //   this.total = this.subtotal + costoEnvio;
  // }

  calcularTotales() {
    this.subtotal = this.carrito.pedidos.reduce((sum: number, pedido: any) => sum + (pedido.valor_unitario * pedido.cantidad), 0);
    this.total = this.subtotal;
  }
}
