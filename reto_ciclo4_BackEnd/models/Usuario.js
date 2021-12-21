const mongoose = require('../db/Basedatos')

const Schema = mongoose.Schema

const usuarioSchema = new Schema({    
    correo: String,    
    rol: String,
    password: String
})

const Usuario = mongoose.model('usuarios', usuarioSchema)

module.exports = Usuario