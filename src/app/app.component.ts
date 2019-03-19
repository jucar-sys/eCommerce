import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCommerce';
  carritoCompras = [];
  catalogoProd = [];
  carritoItems = [];

  constructor() {
    localStorage.setItem('carrito', JSON.stringify(this.carritoCompras));
    localStorage.setItem('catalogo', JSON.stringify(this.catalogoProd));
    localStorage.setItem('carritoItems', JSON.stringify(this.carritoItems));
   }
}
