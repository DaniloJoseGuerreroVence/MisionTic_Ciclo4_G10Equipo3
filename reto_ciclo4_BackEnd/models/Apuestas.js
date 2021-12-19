const mongoose = require('../db/Basedatos')

const Schema = mongoose.Schema

const ApuestasSchema = new Schema({
    id_usuario: String,
    valorApuesta: String,
    fechaApuesta: String,
    fechaMaxCancelaccion:String,    
    resultadoApuesta: String 
})

const Apuestas = mongoose.model('apuestas', ApuestasSchema)

module.exports = Apuestas