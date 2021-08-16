const { Schema, model, Mongoose } = require(`mongoose`);

const contactosSchema = new Schema({
    titulo: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    numero: {
        type: Number,
        require: false,
    },
    imagen: {
        type: String,
        require: true,
    }

});

const Contactos = new model('contactos', contactosSchema);

module.exports = { Contactos };