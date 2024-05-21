import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-herramientas-manuales',
  templateUrl: './herramientas-manuales.component.html',
  styleUrls: ['./herramientas-manuales.component.css']
})
export class HerramientasManualesComponent implements OnInit{
  productos: any[] = [];
  categoriaId: number = 1;
  carrito: any;

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
    this.carritoService.editarPedido({ producto_id: productoId, cantidad: 1 }, this.carrito.id).subscribe(
      (response) => {
        this.carrito = response;
      }
    )
  }

  
}



