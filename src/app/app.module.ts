import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULOS AGREGADOS MANUALMENTE PARA ÉSTE PROYECTO
import { HttpClientModule } from '@angular/common/http';

// SERVICIOS
import { HttpService } from './http.service';

// COMPONENTES
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // COMPONENTES
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MODULOS AGREGADOS MANUALMENTE PARA ÉSTE PROYECTO
    HttpClientModule
  ],
  providers: [
    // SERVICIOS GLOBALES
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
