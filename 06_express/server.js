import express, { response } from "express";
//import nombreModulo from "nombreModulo"
import notesManager from "./data/fs/NotesManager.js";

//definimos un servidor para craerlo
const server = express();

//definimos el puerto a utilizar
const port = 8080;

//definimos la callback Ready para indicar que el servidor esta funcionando
const ready = () => console.log("Server ready on port " + port);

//levantamos el servir utilizando lisent
server.listen(port, ready);

//middlewares

//obligo a mi servidor a usar la funcion encargada de leer parametros/consultas
//permite leer req.params y query
server.use(express.urlencoded({ extends: true }));

//Configuramos el router

server.get("/", async (requerimientos, respuestas) => {
  try {
    return respuestas.status(200).json({
      response: "Corder API",
      succes: true,
    });
  } catch (error) {
    console.log(error);
    return respuestas.status(500).json({
      response: "Corder API Error",
      succes: false,
    });
  }
});

//peticion con parametro

//get para craecion
server.get("/api/notes/:text/:category", async (req, res) => {
  try {
    const { text, category } = req.params;
    const data = { text, category };
    const one = await notesManager.create(data);
    return res.status(201).json({
      response: one,
      succes: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      response: "ERROR",
      succes: false,
    });
  }
});

//get para lectura

server.get("/api/notes", async (req, res) => {
  try {
    const all = await notesManager.read();
    return res.status(200).json({ response: all, succes: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      response: "ERROR",
      success: false,
    });
  }
});

//buscar una nota con query

server.get("/api/notes/category", async (req, res) => {
  try {
    const { category } = req.query;
    const all = await notesManager.readOne(category);
    if (all > 0) {
      return res.status(200).json({ response: all, category, succes: true });
    } else {
      const error = new Error("NOT FOUND");
      error.status = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({
      response: error.message,
      succes: false,
    });
  }
});

//leer una nota
server.get("/api/notes/:nid", async (req, res) => {
  try {
    const { nid } = req.params;
    const one = await notesManager.readOne(nid);
    if (one) {
      return res.status(200).json({
        response: one,
        succes: true,
      });
    } else {
      const error = new Error("NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      response: error.message,
      succes: false,
    });
  }
});
