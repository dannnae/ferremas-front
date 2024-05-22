import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categories = [
    { name: 'HERRAMIENTAS MANUALES', image: 'assets/images/categorias-img/HerramientasManuales.jpg' },
    { name: 'MATERIALES BÁSICOS', image: 'assets/images/categorias-img/MaterialesBasicos.jpg' },
    { name: 'EQUIPOS DE SEGURIDAD', image: 'assets/images/categorias-img/EquiposSeguridad.png' },
    { name: 'TORNILLOS Y ANCLAJES', image: 'assets/images/categorias-img/Tornillos.jpg' },
    { name: 'FIJACIONES Y ADHESIVOS', image: 'assets/images/categorias-img/Fijaciones.jpg' },
    { name: 'EQUIPOS DE MEDICIÓN', image: 'assets/images/categorias-img/Medicion.png' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToCategory(categoryName: string): void {
    const formattedName = categoryName.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/productos', formattedName]);
  }
}
