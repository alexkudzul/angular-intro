import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service'; // importar el servicio

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[ //cargar el servicio en el array de providers
    PeticionesService
  ]
})
export class ExternoComponent implements OnInit {
  // Propiedades
  public user: any; // de ningun tipo
  public userId: any;
  public fecha: any;

  // ajax post
  public new_user: any;
  public usuario_guardado: any;

  constructor(
    // propiedad _peticionesServices de tipo PeticionesService(objeto)
    private _peticionesServices: PeticionesService
  ) {
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    }
  }

  ngOnInit() {
    this.fecha = new Date();
    this.cargaUsuario();
  }

  // GET
  cargaUsuario(){
    this.user = false;
    // getUser devuelve un observable, lo cual contiene un metodo subscribe( recoge los valores por ajax), tiene dos callbacks result y error
    this._peticionesServices.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;//en data esta el objeto
        console.log(result);
      },
      error => {
        console.log(<any> error);
      }
    );
  }
  // POST
  onSubmit(form){ // se pasa el form como parametro

    // addUser metodo se encuentra peticiones.service.ts
    // Agrega un usuario que se esta almacenando en new_user
    this._peticionesServices.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
        console.log(response);

        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
