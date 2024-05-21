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
  constructor(private router: Router, private carritoService: CarritoService) {}
  
  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe(
      (response) => {
        this.carrito = response;
      }
    )
  }
  editarCantidad(pedido: any, cantidad: number) {
    const nuevaCantidad = pedido.cantidad + cantidad;

    if (nuevaCantidad === 0){
      this.carritoService.eliminarPedido({ pedido_id: pedido.id }).subscribe(
        (response) => {
          this.carrito.pedidos = this.carrito.pedidos.filter((p: any) => p.id !== pedido.id)
        }
      )
    } else {
      this.carritoService.editarPedido({ producto_id: pedido.producto, cantidad: nuevaCantidad }, this.carrito.id).subscribe(
        (response) => {
          this.carrito = response;
        }
      )
    }
  }
}
