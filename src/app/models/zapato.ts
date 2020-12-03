export class Zapato{

 /*
  // Propiedades
  public nombre: string;
  public marca: string;
  public color: string;
  public precio: number;
  public stock: string;

  // Constructor
  constructor(nombre, marca, color, precio, stock){
    this.nombre = nombre;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
  }
*/

// En vez de utilizar el codigo anterior se utiliza esto
  // Los atributos se declaran como parametros y se utiliza la coma "," al final se abre llaves
  constructor(
    public nombre: string,
    public marca: string,
    public color: string,
    public precio: number,
    public stock: boolean
  ){}
}
