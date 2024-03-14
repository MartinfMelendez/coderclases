let booleano = false;

booleano = booleano ?? "reasigne valor por esta cadena de texto";
console.log(booleano);

let cero = 0;

cero = cero || "reasigno es null o undefined"
console.log(cero);

let nula = null
nula = nula ?? "Esta cadena de texto"
console.log(nula);

const datos = {
    nombre: "TiTa"
}

datos.apellido = datos.apellido ?? "Melendez"
console.log(datos)