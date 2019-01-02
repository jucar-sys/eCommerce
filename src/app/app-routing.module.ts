import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// IMPORTS DE COMPONENTES ENRUTADOS
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
