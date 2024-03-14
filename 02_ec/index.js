const n1 = 10
const n2 = 5
const n3 = -50

const c1 = "   Hola  "
const c2 = "Chau   "
const c3= "     Holaaaa"

const obj = {
    nombre:"MM",
    edad: 33,
    ciudad: "Cordoba",
    color: "Azul",
    mascota: "perro"
}

const exponencial = n1 ** n2;
console.log(exponencial)

const arrayOfCadenas = ["Hola", "Chau","Holaaa"]
console.log(arrayOfCadenas.includes(c3))
console.log(arrayOfCadenas.includes(c2));
const arrayDeCadenas2 = [c1.trim(),c2.trim(),c3.trim()];
console.log(arrayDeCadenas2.includes("Hola"));
console.log(arrayDeCadenas2.includes("Chau"));

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const {nombre, edad, ...rest} = obj
console.log(nombre);
console.log(edad);
console.log(rest);

const cadenaYNumeros = { c1,c2, n1,n2,n3}
console.log(Object.values(cadenaYNumeros))

const arrayDeArrays = Object.entries(obj);
console.log(arrayDeArrays.flat());