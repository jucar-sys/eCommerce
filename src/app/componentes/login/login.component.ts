import { Component, OnInit } from '@angular/core';
// PARA EL USO DE FORMULARIOS
import { FormGroup, FormControl, Validators } from '@angular/forms';
// PAARA UTILIZAR LOS SERVICIOS GLOBALES
import { GlobalService } from '../../servicios/global.service';
// CLASES OBJETO
import { Users } from 'src/app/Users';
// PARA UTILIZAR EL ENRUTAMIENTO
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup; // Variable objeto para el uso de formulario
  userForm: any; // Variable objeto para guardar los datos ingresados del usuario
  userApi: Users[]; // VAriable objeto para almacenar los usuarios obtenidos del API

  constructor(private globalService: GlobalService, private router: Router) {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.globalService.initData(); // Se llama a initData desde el servicio para obtener datos de la base de datos
  }

  onSubmit() {
    this.userApi = this.globalService.usersApi; // Se inicializa el objeto con lo que se obtuvo de la base de datos

    if (this.form.valid) {
      this.userForm = this.form;
      // tslint:disable-next-line:forin
      for (const i in this.userApi) {
        if (this.userApi[i].email === this.userForm.value.email) {
          if (this.userApi[i].password === this.userForm.value.password) {
            this.router.navigate(['inicio']);
          } else {
            alert('Contraseña incorrecta');
          }
        }
      }
    }
  }

}
