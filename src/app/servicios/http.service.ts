import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// Para el uso de Firestore de Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  catalogo: Observable<any[]>;
  cantProds: Observable<any[]>;
  listaCarrito: Observable<any[]>;
  sumaPreciosCarritoGet: Observable<any[]>;
  agregarCarrito: AngularFirestoreCollection;
  agregarListaCarrito: AngularFirestoreCollection;
  sumaPreciosCarrito: AngularFirestoreCollection;
  catalogoUpdate: AngularFirestoreCollection;
  sumaCarrito;
  sumaPrecios;


  constructor(public authFire: AngularFireAuth, db: AngularFirestore, private _router: Router) {
    // llenar la variable catalogo con informacion de la base de datos
    this.catalogo = db.collection('productos').valueChanges();

    // Llenar la variable cantProds con información de la base de datos
    this.cantProds = db.collection('carrito').valueChanges();

    // Llenar la variable cantProds con información de la base de datos
    this.listaCarrito = db.collection('listaCarrito').valueChanges();

    // Llenar la variable sumaPrec.... con información de la base de datos
    this.sumaPreciosCarritoGet = db.collection('sumaCarrito').valueChanges();

    // Tomar la data de sumaPrec.. y almacenar los resultados en una variable
    this.sumaPreciosCarritoGet.subscribe( data => {
      this.sumaPrecios = data[0].total;
    });

    // Tomar la data de cantProds y almacenar los resultados en una variable
    this.cantProds.subscribe( data => {
      this.sumaCarrito = data[0].num_prods;
    });

    // Variable para conectar y hacer push en la bd
    this.agregarCarrito = db.collection('carrito');

    // Variable para conectar y hacer push en la bd
    this.agregarListaCarrito = db.collection('listaCarrito');

    // Variable para conectar y hacer push en la bd
    this.sumaPreciosCarrito = db.collection('sumaCarrito');

    // Variable para conectar y hacer push en la bd
    this.catalogoUpdate = db.collection('productos');

  }

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

  getCarrito() {
    return this.cantProds;
  }

  // Agregar productos al carrito de compras
  addItemCar(num: number, tipo: string, img, nomb, pre, disp, id) {

    // Condición para sumar o inicializar la suma de productos del carrito según se a el caso
    if (tipo === 'agregar') {
        this.sumaCarrito = this.sumaCarrito + num;
    } else if (tipo === 'logout') {
      this.sumaCarrito = 0;
    }

    // multiplicar y sumar productos para sacra total a pagar
    const precioProd = parseFloat(pre);
    console.log('Precio: ' + precioProd);

    console.log('Suma ahorita: ' + this.sumaPrecios);
    this.sumaPrecios = this.sumaPrecios + (precioProd * num);
    console.log('suma con nuevo producto: ' + this.sumaPrecios);

    // Agregar cantidad de productos a la suma del carrito
    this.agregarCarrito.doc('smbY0AVmvI4jIYqE2fV4').set({
      num_prods: this.sumaCarrito
    }).then(function() {
    }).catch(function(error) {
      console.log(error);
    });

    // Agregar producto a la lista de la bd
    this.agregarListaCarrito.add({
      ID: id,
      disp: disp,
      img: img,
      nomb: nomb,
      num: num,
      pre: pre
    }).then(function() {
    }).catch(function(error) {
      console.log(error);
    });

    // Agregar a la BD la suma de los recios para sacar el total a pagar
    this.sumaPreciosCarrito.doc('k9rhyh6AJKefVqiFn6Wg').set({
      total: this.sumaPrecios
    }).then(function() {
    }).catch(function(error) {
      console.log(error);
    });

  }

  eliminarLista(doc) {
    this.agregarListaCarrito.doc(doc).delete();
}

irInicio() {
  this._router.navigateByUrl('');
}

  vaciarCarrito() {

    // Inicializar lista de productos en carrito
    this.agregarListaCarrito.snapshotChanges().subscribe((listaSnapshot) => {
      listaSnapshot.forEach((listaData: any) => {
        console.log(listaData.payload.doc._key.path.segments[6]);
        this.eliminarLista(listaData.payload.doc._key.path.segments[6]);
      });
    });

    // Inicializar cantidad de productos en carrito
    this.agregarCarrito.doc('smbY0AVmvI4jIYqE2fV4').set({
      num_prods: 0
    }).then(function() {
    }).catch(function(error) {
      console.log(error);
    });

    // Inicializar suma de precios
    this.sumaPreciosCarrito.doc('k9rhyh6AJKefVqiFn6Wg').set({
      total: 0
    }).then(function() {
    }).catch(function(error) {
      console.log(error);
    });

      this.irInicio();

  }

}
