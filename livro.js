const db = require("./db.js")

const Schema = db.Schema;

const livroSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "Informe o título"]
    },
    paginas: {
        type: Number
    }
})

const Livro = db.model("Livro", livroSchema)

Livro.create({
    nome: "A Torre Negra",
    paginas: 700
})