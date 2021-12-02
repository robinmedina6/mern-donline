const { Schema, model } = require('mongoose');

const desayunoSchema = new Schema(
    {
        direccion: String,
        ingredientes: { type: String, required: true},
        cliente: { type: String },
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('Desayuno', desayunoSchema);