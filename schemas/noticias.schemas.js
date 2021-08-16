const { Schema, model, Mongoose } = require(`mongoose`);

const noticiasSchema = new Schema({
    titulo: {
        type: String,
        require: true,
    },
    subtitulo: {
        type: String,
        require: true,
    },
    cuerpo: {
        type: String,
        require: true,
    },
    fecha: {
        type: String,
        require: true,
    },
    imagenes: {
        type: [String],
        require: true,
    },
    epigrafes: {
        type: [String],
        require: true,
    },
    autores: {
        type: [String],
        require: true,
    },
    categorias: {
        type: [String],
        require: true,
    }

});

const Noticias = new model('noticias', noticiasSchema);

module.exports = { Noticias };