import { Component } from '@angular/core';
// importar la clase Configuracion que se encuentra en models
import { Configuracion } from './models/configuracion';

// decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular'; // por defecto

  public descripcion:string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    // Asignar valores a las variables
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }
  ocultarVideoJuegos(value){
    this.mostrar_videojuegos = value;
  }
}
