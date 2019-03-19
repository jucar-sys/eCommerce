import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../servicios/global.service';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  catProd: any;
  catProd2: any;
  buscar;
  carrito;

  constructor(private globalService: GlobalService, public restApi: HttpService) {
    // Subscribe para obtener la data mediante el objeto del servicio http
    this.restApi.catalogo.subscribe(data => {
      this.catProd = data;
      this.catProd2 = data;
    });
  }

  ngOnInit() {
  }

  // buscadro de productos
  buscador(buscarTemp: string) {

    this.catProd = [];
    for (const prod of this.catProd2) {

      if (prod.nombre.toLowerCase().includes(buscarTemp.toLowerCase())) {
        this.catProd.push(prod);
      }
    }
  }


  // Agregar producto al carrito de compras
  agregarProducto(img, nomb, pre, disp, id) {

    if (this.carrito <= disp) {
      this.restApi.addItemCar(this.carrito, 'agregar', img, nomb, pre, disp, id);
    } else {
      alert('Inventario insuficiente');
    }
  }

  // Ver detalle de producto al hacer click
  verDetalle(img, nomb, pre, disp) {
    this.globalService.verDetalle = [img, nomb, pre, disp];
    console.log(this.globalService.verDetalle);
  }

}
