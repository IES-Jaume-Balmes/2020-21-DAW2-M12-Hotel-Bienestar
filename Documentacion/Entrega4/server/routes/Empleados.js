const express = require("express");
const router = express.Router();
const { Empleados } = require("../models");
const bcrypt = require("bcrypt");
const {validateToken} = require('../middlewares/AuthMiddleware');
const {sign} = require('jsonwebtoken');

router.post("/", async (req, res) => {
  const { nombre, contrasenya } = req.body;
  bcrypt.hash(contrasenya, 10).then((hash) => {
    Empleados.create({
      nombre: nombre,
      contrasenya: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { nombre, contrasenya } = req.body;
  const empleados = await Empleados.findOne({ where: { nombre: nombre } });
  if (!empleados) res.json({ error: "User Doesn't Exist" });
  bcrypt.compare(contrasenya, empleados.contrasenya).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });
    const accessToken = sign({nombre: empleados.nombre, id: empleados.id}, 
      "importantsecret"
    );
    res.json({token: accessToken, nombre:nombre, id:empleados.id});
  });
});

router.get('/auth', validateToken,(req, res)=>{
  console.log('success');
  res.json(req.empleados)
});


module.exports = router;