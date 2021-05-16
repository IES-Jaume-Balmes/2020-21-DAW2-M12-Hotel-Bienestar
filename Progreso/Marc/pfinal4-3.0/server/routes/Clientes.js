const express = require('express');
const router = express.Router();
const {Clientes} = require('../models')

router.get("/", async (req, res)=>{
    const listOfClientes = await Clientes.findAll();
    res.json(listOfClientes);
});

router.get('/byId/:id', async (req, res)=>{
    const id = req.params.id
    const clientes = await Clientes.findByPk(id);
    res.json(clientes);
});

router.post("/", async (req,res)=>{
    const clientes = req.body;
    await Clientes.create(clientes);
    res.json(clientes);
});

module.exports = router;