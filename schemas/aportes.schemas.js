const { Schema, model, Mongoose } = require(`mongoose`);

const aportesSchema = new Schema({
    nombre: {
        type: String,
        require: true,
    },
    aporteMateria: {
        type: String,
        require: true,
    },
    fuente: {
        type: String,
        require: true,
    },
    fechaAporte: {
        type: String,
        require: true,
    },
    imagenAporte: {
        type: [String],
        require: true,
    }

});

const Aportes = new model('aportes', aportesSchema);

module.exports = { Aportes };