const mongoose = require('../db/Basedatos')

const Schema = mongoose.Schema

const frutaSchema = new Schema({
    nombre: String,
    precio: Number
})

const Frutas = mongoose.model('frutas', frutaSchema)

module.exports = Frutas