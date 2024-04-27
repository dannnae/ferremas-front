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

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiURL}/login/`, { email, password })
      .pipe(retry(3));
  }

  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/usuario/`, datosUsuario)
  }
}

