const express = require('express');
const router = express.Router();
const {Clientes} = require('../models')

router.get("/", async (req, res)=>{
    const ListOfClientes = await Clientes.findAll();
    res.json(ListOfClientes);
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

router.post("/mireserva", async(req, res)=>{
    const{name, email, phone} = req.body;
    const cliente = await Clientes.findOne({where: {name:name, email:email, phone:phone}});
    if (!cliente) res.json({ error: "User Doesn't Exist" });
    res.json(cliente );
});


module.exports = router;