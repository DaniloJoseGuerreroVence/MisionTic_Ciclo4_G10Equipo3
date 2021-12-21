const express = require("express");
const bcrypt = require("bcrypt");
const rutas = express.Router();

const Frutas = require("../models/Fruta");
const Usuario = require("../models/Usuario");
const SaldosUsuarios = require("../models/SaldosUsuarios");
const Notificacion = require('../models/Notificacion')

const obtener_frutas = async () => {
  const datos = await Frutas.find();
  return datos;
};

rutas.get("/get_frutas", async (req, res) => {
  res.json(await obtener_frutas());
});

rutas.get("/get_frutas/:id", async (req, res) => {
  let fruta_id = req.params.id;
  let fruta = await Frutas.findById(fruta_id);

  res.json(fruta);
});



rutas.get("/obtener_saldo/:id", async (req, res) => {
  let usuario_id = req.params.id;
  let saldo = await SaldosUsuarios.findOne({idUsuario:usuario_id});
  // let saldo = await SaldosUsuarios.aggregate([{$sum: {$recarga}}]);




  res.json(saldo);
});




rutas.post("/crear_fruta", async (req, res) => {
  let body = req.body;
  let fruta = new Frutas(body);

  await fruta.save();

  res.json(fruta);
});

rutas.post("/crear_saldo", async (req, res) => {
  let body = req.body;
  let saldoUsuario = new SaldosUsuarios(body);

  // console.log(body);
  // console.log(saldoUsuario);

  await saldoUsuario.save();

  res.json(saldoUsuario);
});

rutas.delete("/eliminar_fruta/:id_fruta", async (req, res) => {
  const id_fruta = req.params.id_fruta;

  const fruta = Frutas.findById(id_fruta);
  await fruta.deleteOne();

  res.json({
    mensaje: "fruta eliminada correctamente",
  });
});

rutas.put("/actualizar_usuario/:id_usuario", async (req, res) => {
  const id_usuario = req.params.id_usuario;

  const usuario = await Usuario.findById(id_usuario);
  usuario.nombre = req.body.nombre
  usuario.correo = req.body.correo
  usuario.celular = req.body.celular
  usuario.rol = req.body.rol

  await usuario.save()

  res.json({
    mensaje: "usuario actualizado correctamente",
  });
});

rutas.get("/get_usuarios", async (req, res) => {
  const usuarios = await Usuario.find();

  res.json(usuarios);
});

rutas.get("/get_usuario/:id_usuario", async (req, res) => {
  const id_usuario = req.params.id_usuario;

  const usuarios = await Usuario.findById(id_usuario);

  res.json(usuarios);
});



rutas.get('/get_notificacion/:id_usuario', async (req, res) => {

  const id_usuario = req.params.id_usuario

  const notificaciones = await Notificacion.find({id_usuario: id_usuario})

  res.json(notificaciones)

})

rutas.post('/crear_notificacion', async (req, res) => {

  const notificacion = new Notificacion(req.body)

  await notificacion.save()

  res.json({
    mensaje: 'notificacion creada correctamente'
  })

})


module.exports = rutas;
