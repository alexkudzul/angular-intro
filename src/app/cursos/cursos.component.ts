import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // Recoger los parametros de la URL con el metodo subscribe
    // params objeto de tipo Params
    this._route.params.subscribe((params : Params ) => {
      //Guardar nombre y followers
      this.nombre = params.nombre;
      this.followers = +params.followers;

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home'])
      }
      console.log(this.nombre);
      // console.log(params);
    });
  }

  redirigir(){
    this._router.navigate(['/zapatos'])
  }

}
