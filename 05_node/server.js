//se requiere el modulo http para crear un servidor
const http = require("http");
//solicitamos la funcion router que se creo en el archivo router.js
const router = require("./router.js");

//del modulo HTTP usamos el metodo createServer()
const server = http.createServer(router); //se le pasa un router
////se configura el puerto donde va a funcionar el servidor, por estandar usamos el 8080
const port = 8080;
//definimos una callback para avisar el servidor este listo
const ready = () => console.log("server ready on port" + port);

//Levantamos el servidor con el metodo listen
server.listen(port, ready);


//por defecto el servidor no se reinicia de forma automatico
//para reinicar el server con cada cambio necesitamos instalar nodemon