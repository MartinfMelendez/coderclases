//traer el modulo FileSistem
const fs = require("fs");
const { parentPort } = require("worker_threads");
//creo la ruta donde esta el archivo
const path = "./04_fs/tickets.json";
//contenido inicial del archivo
const contenido = JSON.stringify([], null, 2);

fs.writeFile(path, contenido, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Creado");
  }
});
//Se lee el archivo, se le pasa la ruta, el utf,  la callback comuesta por error y exito
fs.readFile(path, "utf-8", (error, exito) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Se han leido peliculas");
    console.log(exito);
  }
});

//se elimina el archivo y se le pasa el error del callback
fs.unlink(path, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Eliminado");
  }
});
