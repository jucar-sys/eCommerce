import { Injectable } from '@angular/core';
// SERVICIOS
import { HttpService } from './http.service';
// CLASES OBJETO
import { Users } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  ///////////////////// VARIABLES /////////////////////

  usersApi: Users[]; // VAriable para guardar los datos obtenidos del Back-end

  /****************************************************/

  ///////////////////// CONSTUCTOR /////////////////////

  constructor(private httpService: HttpService) {
   }

   /****************************************************/

   ///////////////////// FUNCIONES /////////////////////

   initData() {
    // Obtener usuarios desde API
    this.httpService.getDatos('users')
    .subscribe(
      (data: any) => {
        this.usersApi = data;
      },
      (err) => console.log('Error: ', err)
    );
   }
   /*
   // Función para obtener usuarios desde API
   getUsersApi() {
     this.httpService.getDatos('users')
      .subscribe(
        (data: any) => {
          this.usersApi = data;
        },
        (err) => console.log('Error: ', err)
      );

      return this.usersApi;
   }*/

   /****************************************************/
}
