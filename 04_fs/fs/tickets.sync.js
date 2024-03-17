//se crea el modulo FileSistem
const fs = require("fs");
//ruta donde se guarda el archivo
const path = "./04_fs/tickets.json";

//se crea metodo para checkar que exista la ruta
if (!fs.existsSync(path)) {
  const array = JSON.stringify([]);
  fs.writeFileSync(path, array);
}

//antes de sobreescribir el archivo debo leerlo con el siguiente metodo
const movies = JSON.parse(fs.readFileSync(path, "utf-8"))

//definimos dato a guardar
const movie1 = { title: "hp1", place: "hoyts" };
movies.push(movie1)
const moviesString = JSON.stringify(movies, null, 2);


//writeFileSync sobre escribe el archivo
//se le pasa la ruta y lo que tiene que mostrar
fs.writeFileSync(path, moviesString);

fs.unlinkSync(path) //metodo para eliminar todo el archivo
