import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { routing, appRoutingProviders}  from './app.routing';
import { HttpClientModule } from '@angular/common/http'; //modulo para hacer peticiones http

// Importar los componentes
import { AppComponent } from './app.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component';
// import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import { CalculadoraPipe} from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

// Decorador que permite configurar el modulo
@NgModule({
  // Cargar los componentes
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatosComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    //cargar los pipes personalizados
    CalculadoraPipe,
    ContactoComponent
  ],
  // Cargar modulos de angular o externos o creador por el programador
  imports: [
    BrowserModule,
    FormsModule,
    routing, // se importa las rutas
    HttpClientModule
  ],
  // Permite cargar servicios
  providers: [
    appRoutingProviders
  ],
  // Modulo principal que se va a cargar, que inicia toda la app
  bootstrap: [AppComponent]
})
export class AppModule { }
