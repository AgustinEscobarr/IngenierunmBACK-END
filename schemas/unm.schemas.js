const { Schema, model, Mongoose } = require(`mongoose`);

const unmSchema = new Schema({
    titulo: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: true,
    },
    imagen: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    }
});

const UNM = new model('UNM', unmSchema);

module.exports = { UNM };