import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
