import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULOS AGREGADOS MANUALMENTE PARA ÉSTE PROYECTO
import { HttpClientModule } from '@angular/common/http'; // Para la conexion con la API
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para el uso de formularios
import { AngularFireModule } from '@angular/fire'; // Firebase
import { environment } from '../environments/environment'; // Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore'; // Firebase
import { AngularFireStorageModule } from '@angular/fire/storage'; // Firebase
import { AngularFireAuthModule } from '@angular/fire/auth'; // Firebase
import { AngularFireDatabaseModule } from '@angular/fire/database'; // Firebase
import {MatProgressBarModule} from '@angular/material/progress-bar';

// SERVICIOS
import { HttpService } from './servicios/http.service';
import { GlobalService } from './servicios/global.service';

// COMPONENTES
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    // COMPONENTES
    LoginComponent,
    InicioComponent,
    BarraSuperiorComponent,
    CarritoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MODULOS AGREGADOS MANUALMENTE PARA ÉSTE PROYECTO
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Firebase
    AngularFirestoreModule, // Firebase Firestore Database
    AngularFireAuthModule, // Firebase Auth
    AngularFireStorageModule, // Firebase FireStorage
    AngularFireDatabaseModule, // Firebase Realtime Database
    MatProgressBarModule
  ],
  providers: [
    // SERVICIOS GLOBALES
    HttpService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
