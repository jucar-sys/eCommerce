import { Injectable } from '@angular/core';
// SERVICIOS
import { HttpService } from './http.service';
import { Detalle } from '../interfaces/detalle.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  ///////////////////// VARIABLES /////////////////////
  verDetalle: Detalle[] = [];

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
     // Se toma el valor actual del local storage
    const valorActualStorage = parseInt(this.obtenerLocalStorage(), 10);

    // si no tenia nada el local storage se guarda el valor
    // en caso contrario se suma o se resta según sea el caso
    if ( isNaN(valorActualStorage)) {
      num = num.toString();
      localStorage.setItem('carritoItems', num);
    } else {
      if (tipo === 'suma') {
        num = parseInt(this.obtenerLocalStorage(), 10) + num;
      } else {
        num = parseInt(this.obtenerLocalStorage(), 10) - num;
      }
      num = num.toString();
      localStorage.setItem('carritoItems', num);
    }
   }

   // Obtiene los datos del local storage
   obtenerLocalStorage() {
     return localStorage.getItem('carritoItems');
   }

   /****************************************************/
}
