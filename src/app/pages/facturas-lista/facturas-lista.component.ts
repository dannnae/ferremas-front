import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-facturas-lista',
  templateUrl: './facturas-lista.component.html',
  styleUrls: ['./facturas-lista.component.css']
})

export class FacturasListaComponent implements OnInit {
  facturas: any[] = [];

  constructor(private djangoService: DjangoService) { }

  ngOnInit(): void {
    this.getFacturas();
  }

  getFacturas(): void {
    this.djangoService.listarTodasFacturas().subscribe((data: any[]) => {
      this.facturas = data;
    });
  }
}