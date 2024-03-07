//Se crea 5 superheroes
const super1 = { nombre: "Batman" };
const super2 = { nombre: "Mujer Maravilla" };
const super3 = { nombre: "Iron Man" };
let super4 = { nombre: "Hulk" };
const super5 = { nombre: "Loki" };

//se crea una funcion print
function printName(obj) {
  return `el nombre del superheroe es ${obj.nombre}`;
}

//se ejecuta la funcion printName
console.log(printName(super1));
console.log(printName(super2));
//Se imprime la propiedad nombre del superheroe 5
console.log(printName(super5.nombre));

//Se le agrega 2 propiedades al super5
super5.edad = 33;
super5.ciudad = "Asgard";
//se imprimer el super5 con todas sus propiedades
console.log(super5);

//Se cambiar el nombre al super4 con lo cual debemos cambiar el const del super4 por el let (linea 5)
super4 = { nombre: "SheHulk" };
//Mostramos el super4
console.log(super4);

//Definimos la funcion printAll() para que reciba un array e imprima cada elemento
function printAll(array) {
  for (let each of array) {
    //each es cada objero del array superheroes
    /*const template = printName(each)
        console.log(template);*/
    //forma mas optima de mostrar
    console.log(printName(each));
  }
}

//Se crea un array para mostrar super 1 y super 2 en la funcion printAll
const array1 = [super1, super2];
printAll(array1);
//Otra forma de imprimir los superheroes
printAll([super3, super4, super5]);
//se llama a la funcion sin parametros, con lo cual no imprime nada 
printAll([]);
