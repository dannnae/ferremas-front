import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categoria: string = ''; // Asegúrate de inicializar la propiedad
  productos: any[] = []; // Aquí puedes agregar los productos según la categoría

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('nombre') || ''; // Asigna un valor por defecto si es null
      this.loadProductos(this.categoria);
    });
  }

  loadProductos(categoria: string): void {
    // Aquí deberías cargar los productos de la categoría. Esto es un ejemplo.
    const todosLosProductos: { [key: string]: any[] } = {
      'HERRAMIENTAS MANUALES': [
        { nombre: 'Martillo', descripcion: 'Un martillo muy útil.', imagen: 'assets/images/martillo.jpg', precio: 10000 },
        { nombre: 'Destornillador', descripcion: 'Destornillador de precisión.', imagen: 'assets/images/destornillador.jpg', precio: 5000 }
      ],
      'MATERIALES BÁSICOS': [
        { nombre: 'Cemento', descripcion: 'Cemento de alta calidad.', imagen: 'assets/images/cemento.jpg', precio: 15000 },
        { nombre: 'Arena', descripcion: 'Arena fina para construcción.', imagen: 'assets/images/arena.jpg', precio: 8000 }
      ],
      'EQUIPOS DE SEGURIDAD': [
        { nombre: 'Casco', descripcion: 'Casco de seguridad resistente.', imagen: 'assets/images/casco.jpg', precio: 12000 },
        { nombre: 'Guantes', descripcion: 'Guantes protectores.', imagen: 'assets/images/guantes.jpg', precio: 7000 }
      ],
      'TORNILLOS Y ANCLAJES': [
        { nombre: 'Tornillo', descripcion: 'Tornillo de acero.', imagen: 'assets/images/tornillo.jpg', precio: 1000 },
        { nombre: 'Anclaje', descripcion: 'Anclaje para concreto.', imagen: 'assets/images/anclaje.jpg', precio: 2000 }
      ],
      'FIJACIONES Y ADHESIVOS': [
        { nombre: 'Pegamento', descripcion: 'Pegamento fuerte.', imagen: 'assets/images/pegamento.jpg', precio: 3000 },
        { nombre: 'Cinta adhesiva', descripcion: 'Cinta adhesiva multiuso.', imagen: 'assets/images/cinta.jpg', precio: 1500 }
      ],
      'EQUIPOS DE MEDICIÓN': [
        { nombre: 'Cinta métrica', descripcion: 'Cinta métrica de 5 metros.', imagen: 'assets/images/cinta_metrica.jpg', precio: 5000 },
        { nombre: 'Nivel', descripcion: 'Nivel de burbuja.', imagen: 'assets/images/nivel.jpg', precio: 4000 }
      ]
    };

    this.productos = todosLosProductos[categoria] || [];
  }
}
