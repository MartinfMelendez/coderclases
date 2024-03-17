const fs = require("fs");
const path = "./04_fs/tickets.json";
//se crea la variable contenido y se le agrega 2 peliculas
const contenido = JSON.stringify([{ title: "hp1" }, { title: "hp2" }], null, 2);

fs.promises
  .writeFile(path, contenido)
  .then((resultado) => console.log(resultado)) //promesa en caso de exito
  .catch((error) => console.log(error)); //promesa en caso de error

fs.promises
  .readFile(path, "utf-8")
  .then((respuesta) => console.log(respuesta)) //para utilizar los datos siempre se debe parsear JSON.parse(respuesta)
  .catch((error) =>console.log(error));

fs.promises
  .unlink(path)
  .then(() => console.log("se ha eliminado"))
  .catch((error) => console.log(error));
