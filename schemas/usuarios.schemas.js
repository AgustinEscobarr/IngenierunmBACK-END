const { Schema, model, Mongoose } = require(`mongoose`);

const usuariosSchema = new Schema({
    nombre: {
        type: String,
        require: true,
    },
    apellido: {
        type: String,
        require: true,
    },
    dni: {
        type: Number,
        require: true,
    },
    mail: {
        type: String,
        require: true,
    },
    materias: {
        type: [String],
        require: true,
    }

});

const Usuarios = new model('usuarios', usuariosSchema);

module.exports = { Usuarios };