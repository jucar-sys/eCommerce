import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseURL = 'https://ecommercenu.firebaseio.com/';

  // Obtener datos de Firebase
  getDatos(base) {
    return this.http.get(`${this.baseURL}${base}.json`);
  }

  // Enviar datos a Firebase
  sendDatos(datos: any, base) {
    const data = JSON.stringify(datos);
    console.log(data);
    return this.http.put(`${this.baseURL}${base}.json`, data);
  }
}
