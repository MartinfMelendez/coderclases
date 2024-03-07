console.log("Hola mundo");
console.log("esta es la clase del curso de programacion con backend");
console.info("informacion");
console.warn("Advertencia");
console.error("Error");

//Tipos de Variables

/* String */
const cadenaDeTexto = "con camelCase, no con Pascalcase";
console.log(cadenaDeTexto);
/* number */
let numero = 1234.1234;
console.log(numero);
/*booleano*/
const verdadero = true // false
console.log(verdadero)
//se crea un objeto 
const dato = {cadenaDeTexto: cadenaDeTexto, numero: numero, verdadero:verdadero}
console.log(dato);

//creacion de un array
const arreglo = [1,"uno",dato, verdadero]
console.log(arreglo)

//se cambia el valor de la variable numero, pero primero se cambia el const por el let
numero = 321;
console.log(numero);

//Se agrega un elemnto al array. Se utiliza 2 formas 
dato.fechaDeNacimiento = "09/07/1990";
dato["fecha"] = 1990
console.log(dato)





 