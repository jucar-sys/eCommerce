import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../servicios/global.service';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  carrito;

  ngOnInit() {
    this.carrito = this.globalService.obtenerLocalStorage();
  }

  onUpdate() {
    this.carrito = this.globalService.obtenerLocalStorage();
    console.log(this.carrito);
  }

}
