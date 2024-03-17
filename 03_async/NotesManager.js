class NotesManager {
  static #notes = [];
  create(data) {
    try {
      //Creo una constante como constructor
      const note = {
        id:
          NotesManager.#notes.length === 0
            ? 1
            : NotesManager.#notes[NotesManager.#notes.length - 1].id + 1,
        type: data.type || "to do",
        text: data.text,
        date: data.date || new Date(),
      };
      //Condicional para verificar que se ingrese alguna nota
      if (!data.text) {
        throw new Error("Ingrese alguna nota");
      } else {
        NotesManager.#notes.push(note);
        console.log("Nota creada");
      }
    } catch (error) {
      console.log(error);
    }
  }
  read() {
    try {
      if (NotesManager.#notes.length === 0) {
        throw new Error("No hay notas");
      } else {
        return NotesManager.#notes;
      }
    } catch (error) {
      console.log(error);
    }
  }
  readOne(id) {
    try {
      const one = NotesManager.#notes.find((each) => each.id === id);
      if (!one) {
        throw new Error("No existe la nota");
      } else {
        return one;
      }
    } catch (error) {
      console.log(error);
    }
  }
  destroid(id) {
    try{
        this.readOne(id);
        const within = NotesManager.#notes.filter(each => each.id !==id);
        NotesManager.#notes = within;
        console.log("nota eliminada")
    }
    catch(error){
        console.log(error)
    }
  }
}

//Se crea una constante para crear notas
const note = new NotesManager();
console.log(note.read());
//Se llama al metodo create y se le pasa una nota vacia para probar el error
//para pasarle parametros se debe escribir la propiedad ej: type:, text:
note.create({ text: "Mi primera nota" });
note.create({ text: "Mi segunda nota" });
note.create({ text: "Mi tercer nota" });
note.create({ text: "Mi cuerta nota" });
note.create({ text: "Mi quinta nota" });
console.log(note.readOne(2));
console.log(note.readOne(10));
note.destroid(3);
note.destroid(7)