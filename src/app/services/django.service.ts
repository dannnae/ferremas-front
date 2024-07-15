import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjangoService {
  private apiURL = 'http://127.0.0.1:8000/api';
  private apiKey = '';

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/login/`, data);
  }  

  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/usuario/`, datosUsuario);
  }

  mostrarProductos(categoriaId: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/producto?categoria=${categoriaId}`);
  }

  getCategorias(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/categoria/`)
  }

  crearBoleta(boletaId: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/boleta/${boletaId}/pagar/`);
  }

  confirmarPago(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data);
  }

  datosFactura(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/factura/`, datos)
  }

  detailFacturas(facturaId: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/factura/${facturaId}/`);
  }
  listarTodasFacturas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/factura/`);
  }
}