import fs from "fs";
import crypto from "crypto";

class NotesManagers {
  constructor() {
    this.path = "./data/fs/files/notes.json"; //ruta donde se crea el archivo
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("Archivo creada");
    } else {
      console.log("archivo ya existe");
    }
  }
  async create(data) {
    try {
      if (!data.text) {
        const error = new Error("ingrese un texto");
        throw error;
      } else {
        const note = {
          id: crypto.randomBytes(12).toString("hex"),
          text: data.text,
          category: data.category || "to do",
          date: data.date || new Date(),
        };
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        all.push(note);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        console.log("Nota creada");
        return note;
      }
    } catch (error) {
      throw error;
    }
  }
  async read() {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      //all = all.filter(each => each.category===cat) cat = "done"
      if (all.length === 0) {
        //throw new Error("NO HAY NOTAS")
        return null
      } else{
        console.log(all);
        return all;
      }
      
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let one = all.find((each) => each.id === id);
      
      if (!one) {
        throw new Error("No encontrado");
      } else {
        console.log(one);
        return one;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async destroy(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let one = all.find((each) => each.id === id);
      if (!one) {
        throw new Error("No EXISTE");
      } else {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
        console.log("Nota eliminada");
        console.log(one);
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
}
/*
async function test() {
  try {
    const notes = new NotesManagers();
    //notes.create({ text: "Mi primera nota" });
    //notes.read();
    //notes.readOne("538c09aa432b1aac00d77d2c");
    //notes.readOne("2983152a85");
    notes.destroy("c37cf5eeae3014303c465544");
  } catch (error) {
    console.log(error);
  }
}
*/
const notesManager = new NotesManagers();
export default notesManager;
