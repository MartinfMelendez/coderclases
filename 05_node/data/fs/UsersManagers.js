const fs = require("fs");
const crypto = require("crypto");
const { PassThrough } = require("stream");

//exportamos la clase al enrutador
module.exports = class UsersManagers {
  constructor() {
    this.path = "./data/fs/files/users.json"; //ruta donde se crea el archivo
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
          email: data.email,
          photo: data.photo || "./default.jpg"
        };
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        all.push(note);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        console.log("Usuario creada");
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
      return all;
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
        throw new Error("Usuario no encontrado");
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
        throw new Error("El usuario no existe");
      } else {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
        console.log("Usuario eliminada");
        console.log(one)
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
  const users = new UsersManagers()
  await users.create({ text: "Mi primera nota" }, {email: "hola@hola.com"},{photo: "photo.jpg"},);
   await users.read()
    //notes.readOne("538c09aa432b1aac00d77d2c");
    //notes.destroy("c37cf5eeae3014303c465544");
  } catch (error) {
    console.log(error);
  }
}

test();
*/