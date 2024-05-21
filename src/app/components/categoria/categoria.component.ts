import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categories = [
    { name: 'HERRAMIENTAS MANUALES', image: 'assets/images/categorias-img/HerramientasManuales.jpg', route: '/herramientas-manuales' },
    { name: 'MATERIALES BÁSICOS', image: 'assets/images/categorias-img/MaterialesBasicos.jpg', route: '/materiales-basicos' },
    { name: 'EQUIPOS DE SEGURIDAD', image: 'assets/images/categorias-img/EquiposSeguridad.png', route: '/equipos-seguridad' },
    { name: 'TORNILLOS Y ANCLAJES', image: 'assets/images/categorias-img/Tornillos.jpg', route: '/tornillos' },
    { name: 'FIJACIONES Y ADHESIVOS', image: 'assets/images/categorias-img/Fijaciones.jpg', route: '/fijaciones' },
    { name: 'EQUIPOS DE MEDICIÓN', image: 'assets/images/categorias-img/Medicion.png', route: '/medicion' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCategory(route: string): void {
    this.router.navigate([route]);
  }
}
