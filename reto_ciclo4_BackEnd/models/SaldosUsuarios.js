const mongoose = require('../db/Basedatos')

const Schema = mongoose.Schema

const SaldosUsuariosSchema = new Schema({    
    idUsuario: String,  
    recarga: String
})

const SaldosUsuarios = mongoose.model('saldosUsuarios', SaldosUsuariosSchema)

module.exports = SaldosUsuarios