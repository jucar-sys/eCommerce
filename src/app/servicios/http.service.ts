import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public authFire: AngularFireAuth) { }

  /////////////////////////// FIREBASE AUTH ///////////////////////////

  // Registrar usuario
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authFire.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject (err));
    });
  }

  // Loguear usuario
  loginUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authFire.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject (err));
    });
  }

  // Obtener datos de usuario logueado
  getAuth() {
    return this.authFire.authState.subscribe( auth => auth);
  }

  // Desautenticar usuario
  logout() {
    return this.authFire.auth.signOut();
  }

  ////////////////////////////////////////////////////////////////////
}
