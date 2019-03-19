import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../servicios/global.service';
import { HttpService } from 'src/app/servicios/http.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private globalService: GlobalService, public authFire: HttpService) { }

  carrito;

  ngOnInit() {
    this.authFire.getCarrito().subscribe(carrito => {
      this.carrito = carrito[0].num_prods;
    });
  }

  irCarrito() {
    window.location.replace('./carrito');
  }

  onUpdate() {
    this.authFire.getCarrito().subscribe(carrito => {
      this.carrito = carrito[0].num_prods;
    });
  }

  logoutAuth() {
    this.authFire.addItemCar(0, 'logout', '', '', '', '', '');
    this.authFire.logout();
  }

}
