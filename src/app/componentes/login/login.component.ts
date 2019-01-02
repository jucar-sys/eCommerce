import { Component, OnInit } from '@angular/core';
// PARA EL USO DE FORMULARIOS
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup; // Variable objeto para el uso de formulario
  user: any; // Variable objeto para guardar los datos del usuario

  constructor() {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.user = this.form;
      console.log(this.user.value.email);
      console.log(this.user.value.password);
    }
  }

}
