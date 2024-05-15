import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  }

