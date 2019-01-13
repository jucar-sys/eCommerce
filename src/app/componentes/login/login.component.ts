import { Component, OnInit } from '@angular/core';
// PARA EL USO DE FORMULARIOS
import { FormGroup, FormControl, Validators } from '@angular/forms';
// PAARA UTILIZAR LOS SERVICIOS GLOBALES
import { GlobalService } from '../../servicios/global.service';
// CLASES OBJETO
import { Users } from 'src/app/Users';
// PARA UTILIZAR EL ENRUTAMIENTO
import { Router } from '@angular/router';
// SERVICIOS
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup; // Variable objeto para el uso de formulario

  constructor(
    private router: Router,
    public authApi: HttpService) {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() { }

  onSubmit() {

    if (this.form.valid) {

      //////////////////////// AUTENTICACIÓN CON FIREBASE ///////////////////////////////
      this.authApi.loginUser(this.form.value.email, this.form.value.password)
      .then( (res) => {
        console.log(res);
        console.log('BIEN');
        this.router.navigate(['inicio']);
      }).catch( (err) => {

        if (err.code === 'auth/user-not-found') {
          alert('El usuario no existe');
        } else if (err.code === 'auth/wrong-password') {
          alert('Contraseña incorrecta');
        } else {
          alert(err.message);
        }

        console.log(err.code + ' -> ' + err.message);
      });
      /////////////////////////////////////////////////////////////////////////////////////
    }
  }

}
