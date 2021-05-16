const express = require('express');
const router = express.Router();
const {Habitaciones} = require('../models')

//Muestra los datos de las habitaciones.
router.get("/", async (req, res)=>{
    const listOfHabitaciones = await Habitaciones.findAll();
    res.json(listOfHabitaciones);
});

//Muestra los datos de la habitacion con el mismo id.
router.get('/byId/:id', async (req, res)=>{
    const id = req.params.id
    const habitaciones = await Habitaciones.findByPk(id);
    res.json(habitaciones);
});


router.post("/", async (req,res)=>{
    const habitaciones = req.body;
    await Habitaciones.create(habitaciones);
    res.json(habitaciones);
});

module.exports = router;