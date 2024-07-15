import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categories: any[] = [];

  images: any = {
    'Herramientas Manuales': 'assets/images/categorias-img/HerramientasManuales.jpg',
    'Materiales Basicos': 'assets/images/categorias-img/MaterialesBasicos.jpg',
    'Equipos de Seguridad': 'assets/images/categorias-img/EquiposSeguridad.png',
    'Tornillos y Anclajes': 'assets/images/categorias-img/Tornillos.jpg',
    'Fijaciones y Adhesivos': 'assets/images/categorias-img/Fijaciones.jpg',
    'Equipos de Medición': 'assets/images/categorias-img/Medicion.png'
  }

  constructor(private router: Router, private djangoservice: DjangoService) { }

  ngOnInit(): void {
    this.djangoservice.getCategorias().subscribe(response => {
      this.categories = response;
      this.categories = this.categories.map(category => ({ ...category, image: this.images[category.nombre] }))
    })
  }

  navigateToCategory(categoriaId: number): void {
    this.router.navigate(['/categoria', categoriaId]);
  }
}
