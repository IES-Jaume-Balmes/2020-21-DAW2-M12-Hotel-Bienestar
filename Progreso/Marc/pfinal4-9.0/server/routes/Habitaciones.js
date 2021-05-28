const express = require('express');
const router = express.Router();
const {Habitaciones} = require('../models')

router.get("/", async (req, res)=>{
    const listOfHabitaciones = await Habitaciones.findAll();
    res.json(listOfHabitaciones);
});

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

router.post("/:id", async (req,res)=>{
    const habitacionId = req.params.id;
    const Habitacion = await Habitaciones.findByPk(habitacionId);
    if(Habitacion.Estado == "Disponible"){
        Habitaciones.update({Estado:"No Disponible"},{
            where:{Estado:"Disponible", Id:habitacionId}
        });
    }else{
        await Habitaciones.update(
            {Estado:"Disponible"},{
            where:{Estado:"No Disponible", Id:habitacionId}
        });
    }
    res.json(Habitacion);
});
module.exports = router;