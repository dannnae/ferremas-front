import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {
  factura: any;
  facturaId: number | undefined;

  constructor(private djangoservice: DjangoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.facturaId = +params.get('id')!;
      this.djangoservice.detailFacturas(this.facturaId).subscribe(data => {
        this.factura = data;
      });
    });
  }
}


