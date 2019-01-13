import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// IMPORTS DE COMPONENTES ENRUTADOS
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'carrito', component: CarritoComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
