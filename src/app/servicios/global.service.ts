import { Injectable } from '@angular/core';
// SERVICIOS
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  ///////////////////// VARIABLES /////////////////////

  /****************************************************/

  ///////////////////// CONSTUCTOR /////////////////////

  constructor(private httpService: HttpService) {
   }

   /****************************************************/

   ///////////////////// FUNCIONES /////////////////////


   /****************************************************/

   // Local storage para crear persistencia de datos
   // Se utilizarán para el globo de notificación del carrito

   // Grabar los datos en el local storage
   grabarLocalStorage(num, tipo) {
    num = parseInt(num, 10);
    if (tipo === 'suma') {
      num = parseInt(this.obtenerLocalStorage(), 10) + num;
    } else {
      num = parseInt(this.obtenerLocalStorage(), 10) - num;
    }
    num = num.toString();
     localStorage.setItem('carritoItems', num);
   }

   // Obtiene los datos del local storage
   obtenerLocalStorage() {
     return localStorage.getItem('carritoItems');
   }

   /****************************************************/
}
