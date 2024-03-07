class Personas {
  //
  static cantidadDePersonas = 0;
  //se crea el constructor
  constructor(nombre, edad, ciudad, vida) {
    (this.nombre = nombre),
      (this.edad = edad),
      (this.ciudad = ciudad),
      (this.vida = vida || 100); //si no se pasa este parametro por defecto se carga en 100
    //Se invoca la propiedad de la clase y se le incrementa 1
    Personas.cantidadDePersonas++;
  }
  //se crea un metodo para aumentar la vida
  comer(cantidad) {
    //this.vida = this.vida + cantidad;
    //this.vida > 150 && console.log("No podes comer mas")
    (this.vida < 150) ? (this.vida = this.vida + cantidad) : (console.log("No podes comer mas")) //se utiliza un ternario
  }
  //se cra un metodo para restar la vida
  gym(cantidad) {
    //this.vida = this.vida - cantidad;
    //(this.vida > 50) ? this.vida = this.vida - cantidad : console.log("no podes entrenar mas")

    //Funcion if
    if(this.vida > 50 && cantidad < this.vida){
        this.vida = this.vida - cantidad
    }
  }
  mudarse(ciudad) {
    this.ciudad = ciudad;
    this.vida = this.vida - 20;
    
  }
}

//definimos la persona1 con el constructor new
const persona1 = new Personas("Martin", 33, "Cordoba", 150);
console.log(persona1);
//se ejecuta el metodo comer para aumentar la vida
persona1.comer(60);
persona1.comer(20);
console.log(persona1)
//se crea una persona sin la propiedad vida
const persona2 = new Personas("Irina", 25, "Catamarca");
console.log(persona2);
//se ejecuta el metodo gym para restar la vida
persona2.gym(60);
persona2.gym(40);
console.log(persona2);
const persona3 = new Personas("Rodrigo", 33, "Catamarca", 175);
console.log(persona3);
//se ejecuta el metodo mudarse para cambiar la ciudad
persona3.mudarse("Cordoba");
const persona4 = new Personas("Carol", 49, "Cordoba", 85);

console.log(persona3);
console.log(persona4);
//se muestra la cantidad de personas
console.log(Personas.cantidadDePersonas);
