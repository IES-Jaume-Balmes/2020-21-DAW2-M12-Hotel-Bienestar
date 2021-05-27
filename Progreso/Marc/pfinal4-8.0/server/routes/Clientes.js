const express = require('express');
const router = express.Router();
const {Clientes} = require('../models')
const {Reserva} = require('../models')
const {Habitaciones} = require('../models')

router.get("/", async (req, res)=>{
    const ListOfClientes = await Clientes.findAll();
    res.json(ListOfClientes);
});

router.get('/byId/:id', async (req, res)=>{
    const id = req.params.id
    const clientes = await Clientes.findByPk(id);
    res.json(clientes);
});

router.get('/byId2/:id', async(req,  res)=>{
    const id = req.params.id
    const clientes = await Clientes.findByPk(id);
    const reservag = await Reserva.findByPk(clientes.ReservaId);
    res.json(reservag);
})
router.get('/byId3/:id', async (req, res)=>{
    const id = req.params.id
    const clientes = await Clientes.findByPk(id);
    const reservag = await Reserva.findByPk(clientes.ReservaId);
    const habitacion = await Habitaciones.findByPk(reservag.HabitacioneId);
    res.json(habitacion);
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

router.delete("/:id", async (req, res)=>{
    const clienteId = req.params.id;
    await Clientes.destroy({where:{
        id:clienteId,
    },});
    res.json("Cliente Destruido");
})

module.exports = router;