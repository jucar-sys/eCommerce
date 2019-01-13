import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../servicios/global.service';
import { Productos } from 'src/app/Productos';
// Para el uso de Firestore de Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  products: Observable<any[]>; // Objeto que almacenará lo que contiene Firetore;
  carrito;

  constructor(private globalService: GlobalService, public db: AngularFirestore) {
    this.products = db.collection('products').valueChanges();
  }

  ngOnInit() {
  }

  buscador(buscarTemp) {
    console.log(buscarTemp);
  }

  agregarProducto() {
    this.carrito = this.carrito.toString();
    this.globalService.grabarLocalStorage(this.carrito, 'suma');
  }

}
