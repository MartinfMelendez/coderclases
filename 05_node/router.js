//Es una funcion para verificar las rutas del server
//funciona del requerimiento y la repuesta que tiene que devolverle al cliente

//requerimos la clasee NoteManager
const NotesManagers = require("./data/fs/NotesManager.js")
//instanciamos la clase para utilizarla
const notes = new NotesManagers()
const UsersManagers = require("./data/fs/UsersManagers.js")
const users = new UsersManagers()


//la funcion tiene que ser async
async function router(req, res) {
  const url = req.url;
  console.log(url);
  //se guarda un objeto para que el tipo de respuestas es de texto plano
  const options = { "Content-Type": "text/plain" };
  //Evaluamos la url con un switch
  switch (url) {
    case "/":
      res.writeHead(200, options).end("API CONECTADA");
      break;
      case "/api/notes":
        //como es metodo async se debe agregar la palabra await
        const all = await notes.read()
        res.writeHead(200,options).end(JSON.stringify(all))
        break;
        case "/users":
          const user = await users.read()
            res.writeHead(200,options).end(JSON.stringify(user))
            break;
    default: //Se envia una respuesta cuando la pagina no existe
        res.writeHead(404, options).end("Ruta no encontrada")
      break;
  }
}
//se exporta la funcion al servidor
module.exports = router;