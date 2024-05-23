import { Component, OnInit} from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-herramientas-manuales',
  templateUrl: './herramientas-manuales.component.html',
  styleUrls: ['./herramientas-manuales.component.css']
})
export class HerramientasManualesComponent implements OnInit{
  productos: any[] = [];
  categoriaId: number = 1;
  carrito: any;
  productoAgregado: boolean = false;
  modalElement = document.getElementById('exampleModal') as HTMLElement;
  selectedCurrency: string = '1';

  constructor(private djangoservice: DjangoService, private router: Router, private carritoService: CarritoService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe(
      (response) => {
        this.carrito = response;
      }
    )
    this.djangoservice.mostrarProductos(this.categoriaId).subscribe(data => {
      this.productos = data;
    });
  }
  
  agregarProducto(productoId: number){
    let cantidad = 1;
    const pedido = this.carrito.pedidos.find((obj: any) => obj.producto === productoId);
    if (pedido) {
      cantidad = pedido.cantidad + 1;
    }
    this.carritoService.editarPedido({ producto_id: productoId, cantidad: cantidad }, this.carrito.id).subscribe(
      (response) => {
        this.carrito = response;
        const modal = new (window as any).bootstrap.Modal(this.modalElement);
        modal.show();
        setTimeout(() => {
          const modal = new (window as any).bootstrap.Modal(this.modalElement);
          modal.hide();
        }, 3000);
      }  
    )
  }
  cerrarModal() {
    const modal = new (window as any).bootstrap.Modal(this.modalElement);
    modal.hide();
  }
} 
