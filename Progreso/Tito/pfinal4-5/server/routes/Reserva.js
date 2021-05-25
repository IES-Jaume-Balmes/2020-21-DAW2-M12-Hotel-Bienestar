const express = require('express');
const router = express.Router();
const {Reserva} = require('../models')

router.get("/", async (req, res)=>{
    const listOfReserva = await Reserva.findAll();
    res.json(listOfReserva);
});

router.get('/byId/:id', async (req, res)=>{
    const id = req.params.id
    const reserva = await Reserva.findByPk(id);
    res.json(reserva);
});

router.post("/", async (req,res)=>{
    const reserva = req.body;
    await Reserva.create(reserva);
    res.json(reserva);
})


module.exports = router;