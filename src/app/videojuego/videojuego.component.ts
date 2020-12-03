import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

// Decorador de un componente
@Component({
  selector: 'videojuego',
  // template: `
  //     poner codigo html
  // `
  templateUrl: './videojuego.component.html'
})

// Crear la clase del componente
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{
  public titulo: string;
  public listado:string;

  constructor(){
    // Asignar los valores a los atributos
    this.titulo = "Componente de video juegos";
    this.listado = "Listado de los juegos más populares";
    // console.log("Se ha cargado el compomente videojuego.component.ts");
  }

  // Hooks, eventos ciclo de vida de un compomente, son eventos que se van a lanzar dependiendo del estado en que este el componente

  // Es primero en ejecutarse al cargar el componente
  ngOnInit(){
    // console.log("OnInit ejecutado");
  }

  // Se ejecutada cada vez que alla un cambio en un component o en la aplicacion angular
  ngDoCheck(){
    // console.log("DoCheck ejecutado");
  }

  // se ejecuta algo antes de eliminar la instancia de un componente, ejemplo que haga una peticion ajax antes de eliminar
  ngOnDestroy(){
    // console.log("OnDestroy ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Nuevo titulo del componente";
  }

}
