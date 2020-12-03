// Estructura de un services

// Injectable
import {Injectable} from '@angular/core'; // permite injectar el servicio en otras clases
import { Zapato } from '../models/zapato';

// Decorador
@Injectable()
export class ZapatoService{
  public zapatos: Array<Zapato>;
  constructor(){
    this.zapatos = [
      // Crear los objetos zapatos con sus atributos de la clase Zapato
      new Zapato('Reebook classic', 'Reebook', 'blanco', 180, true),
      new Zapato('Nike classic', 'Nike', 'blanco', 80, true),
      new Zapato('Adidas classic', 'Adidas', 'blanco', 50, true),
      new Zapato('Adidas classic', 'Reebook1', 'blanco', 80, true),
      new Zapato('Adidas classic', 'Reebook2', 'blanco', 20, true),
      new Zapato('Adidas classic', 'Reebook3', 'blanco', 60, false)
    ];
  }

  getTexto(){
    return "Hola desde un servicio";
  }

  getZapatos(): Array<Zapato>{
    return this.zapatos;
  }
}
