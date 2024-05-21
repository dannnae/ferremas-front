import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getCarrito(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/boleta/get_carrito/`);
  }

  editarPedido(body: any, pedidoId: number): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/boleta/${pedidoId}/agregar_editar_producto/`, body)
  }

  eliminarPedido(body: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/boleta/eliminar_pedido/`, body)
  }
}

