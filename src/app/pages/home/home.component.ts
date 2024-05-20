import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private carritoService: CarritoService) {}
  ngOnInit(): void {
      this.carritoService.getCarrito().subscribe(
        (response) => {
          console.log(response)
        }
      )
  }
}
