import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosCarrito: any;
  totalPagar: any;

  constructor(private _httpService: HttpService) {

    // Tomar los productos de la BD que se agregaron al carrito de compras
    this._httpService.listaCarrito.subscribe( data => {
      this.productosCarrito = data;
    });

    // Tomar la suma de los precios de la BD
    this._httpService.sumaPreciosCarritoGet.subscribe( data => {
      this.totalPagar = data[0].total;
    });
   }

  ngOnInit() {
  }

  pagar() {
    this._httpService.vaciarCarrito();
    this.productosCarrito = [];
    this.totalPagar = [];
  }

}
