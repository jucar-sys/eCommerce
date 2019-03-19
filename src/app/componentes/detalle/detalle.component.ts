import { Component, OnInit } from '@angular/core';
import { Detalle } from '../../interfaces/detalle.interface';
import { GlobalService } from 'src/app/servicios/global.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detProd: Detalle[] = [];

  constructor(private globaService: GlobalService) {
    this.detProd = this.globaService.verDetalle;
  }

  ngOnInit() {
  }

}
