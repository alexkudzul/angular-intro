import { Component, OnInit } from '@angular/core';
// Importar la clase Zapatos que se encuentra en models
import { Zapato } from '../models/zapato';
import { ZapatoService } from '../services/zapatos.service';

@Component({
  selector: 'zapatos',
  templateUrl: './zapatos.component.html',
  // Cargar servicios
  providers: [
    ZapatoService
  ]
})
// Permite utilizar la clase en otro archivos
export class ZapatosComponent implements OnInit{
  public titulo: string = "Componente de zapatos";
  public zapatos: Array<Zapato>;
  public marcas: String[];
  public color: string;
  public mi_marca:string;

  constructor(
    // Cargar el objeto del servicio
    // Injectarlo como dependencia de una propiedad el objeto, siempre se inicia con un guion bajo para inidicar que es un servicio
    private _zapatoService: ZapatoService
  ){
    this.mi_marca = '';
    this.color = 'yellow';
    this.marcas = new Array();

  }

  ngOnInit(){
    // Usar los servicios
    // Obtener los datos del servicio y guardarlo en el array de zapatos
    this.zapatos = this._zapatoService.getZapatos();
    // alert(this._zapatoService.getTexto());
    console.log(this.zapatos);
    this.getMarcas();
  }

  getMarcas(){
    this.zapatos.forEach((zapato, index)=>{
      // Si la busqueda en el array sea menor a 0 o que no tenga ningun valor o no existe el elemento, hacemos el push
      if(this.marcas.indexOf(zapato.marca) < 0){
        this.marcas.push(zapato.marca);
      }

    });
    console.log(this.marcas);
  }
  getMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(indice){
    // delete this.marcas[indice];
    this.marcas.splice(indice,1); // Eliminar un solo indice
  }

  onBlur(){
    console.log("Has salido del input");
  }

  // keyup, evento cuando se levanta una tecla, en este caso el enter
  keyupEnter(){
    alert(this.mi_marca);
  }
}
