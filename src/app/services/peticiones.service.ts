import { Injectable } from '@angular/core'; // permite injectar este servicio a otras clases
import { HttpClient, HttpHeaders } from '@angular/common/http'; // permite hacer peticiones ajax y modificar las cabeceras
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs'; // permite recoger los datos de la API Rest

// decorador injectable sobre la class
@Injectable()
export class PeticionesService{
  public url: string;

  constructor(
    // Injectar el servicio http
    public _http: HttpClient // Ya se puede usar el servicio para hacer ajax
  ){
    this.url = "https://reqres.in/";
  }

  // Ajax GET
  getUser(userId): Observable<any>{
    return this._http.get(this.url + 'api/users/' + userId);
  }

  // Ajax POST
  addUser(user): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'api/users', params, {headers: headers});
  }


}
