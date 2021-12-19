const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const rutas_publica = express.Router();

const Usuario = require("../models/Usuario");
const Apuestas = require("../models/Apuestas");

rutas_publica.get("/apuestas", async (req, res) => {

  let data = await Apuestas.find();
  console.log(data);

  res.json({
    data
  });

});

rutas_publica.post("/login", async (req, res) => {
  let correo = req.body.correo;

  let usuario = await Usuario.findOne({ correo: correo });

  // if (!usuario) {
  //   return res.json({
  //     mensaje: "el usuario no existe",
  //   });
  // } else {
  //   let password = req.body.password;

  //   let validar_password = await bcrypt.compare(password, usuario.password);

  //   if (!validar_password) {
  //     return res.json({
  //       mensaje: "clave equivocada",
  //     });
  //   }
  // }

  // token_jwt = jwt.sign(
  //   {
  //     id: usuario._id,
  //     nombre: usuario.nombre,
  //   },
  //   process.env.SECRETO_JWT
  // );

  res.json({
    mensaje: `Bienvenido ${usuario.nombre}`,
    token: token_jwt,
    id_usuario: usuario._id
  });
});

module.exports = rutas_publica;
