// src/app/productos-categoria/productos-categoria.component.ts
import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.component.html',
  styleUrls: ['./productos-categoria.component.css']
})
export class ProductosCategoriaComponent implements OnInit {
  productos: any[] = [];
  categoriaId: number = 0;
  categoriaNombre: string | undefined;
  carrito: any;
  productoAgregado: boolean = false;
  modalElement: HTMLElement | undefined;
  selectedCurrency: string = '1';

  constructor(
    private djangoservice: DjangoService,
    private router: Router,
    private carritoService: CarritoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.modalElement = document.getElementById('exampleModal') as HTMLElement;
    this.route.params.subscribe(params => {
      this.categoriaId = +params['categoriaId'];
      this.cargarProductos();
    });
    this.carritoService.getCarrito().subscribe(response => {
      this.carrito = response;
    });
  }

  cargarProductos(): void {
    this.djangoservice.mostrarProductos(this.categoriaId).subscribe(data => {
      this.productos = data;
    });
  }

  agregarProducto(productoId: number): void {
    let cantidad = 1;
    const pedido = this.carrito.pedidos.find((obj: any) => obj.producto === productoId);
    if (pedido) {
      cantidad = pedido.cantidad + 1;
    }
    this.carritoService.editarPedido({ producto_id: productoId, cantidad: cantidad }, this.carrito.id).subscribe(
      response => {
        this.carrito = response;
        const modal = new (window as any).bootstrap.Modal(this.modalElement);
        modal.show();
        setTimeout(() => {
          modal.hide();
        }, 3000);
      }
    );
  }

  cerrarModal(): void {
    const modal = new (window as any).bootstrap.Modal(this.modalElement);
    modal.hide();
  }
}
