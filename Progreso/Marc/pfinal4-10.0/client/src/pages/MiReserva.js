import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams,useHistory } from 'react-router';


function MiReserva() {
    let {id} = useParams();
    const [clienteObject, setClienteObject] = useState({});
    const [reservaObject, setReservaObject] = useState({});
    const [habitacionObject, setHabitacionObject] = useState({});
    let history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:3001/clientes/byId/${id}`).then((response)=>{
            console.log(response);
            setClienteObject(response.data);
        });
        axios.get(`http://localhost:3001/clientes/byId2/${id}`).then((response)=>{
            console.log(response);
            setReservaObject(response.data);
        });

        axios.get(`http://localhost:3001/clientes/byId3/${id}`).then((response)=>{
            console.log(response);
            console.log(response.data.Imagen);
            setHabitacionObject(response.data);
        });
    }, []);

    
    return (
        <div>
            <div>
                <div>
                    <label>Num. Habitacion: {habitacionObject.numHabitacion}</label>
                </div>
                <div className="card h-20" style={{ backgroundImage:`url(../img/${habitacionObject.Imagen})`, backgroundSize: "100% 100%" }} />           
            </div>
            <div>
                <h2>Reserva a nombre de {clienteObject.name} {clienteObject.apellidos} </h2>
                <div><label>Correo: {clienteObject.email}</label></div>
                <div><label>Telefono: {clienteObject.phone}</label></div>
                <div><label>Pais: {clienteObject.pais}</label></div>
                <div><label>Dni: {clienteObject.dniCliente}</label></div>
            </div>
            <div>
                
                <div><label>Su reserva es del dia: {reservaObject.checkIn}</label></div>
                <div><label>al dia: {reservaObject.checkOut}</label></div>
                <div><label>Vendran {reservaObject.adults} adultos y {reservaObject.children} niños</label></div>
            </div>
            <div>
                <div><label>Nombre: {habitacionObject.nombre}</label></div>               
                <div><label>Numero de Camas: {habitacionObject.numCamas}</label></div>
                <div><label>Precio: {habitacionObject.PrecioBase}€</label></div>
                <div><label>Descripcion: {habitacionObject.Descripcion}</label></div>
            </div>
        </div>
    );
};

export default MiReserva;