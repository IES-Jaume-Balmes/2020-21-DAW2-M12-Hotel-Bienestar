import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams,useHistory } from 'react-router';
import foto from '../img/habitacion1.jpg';


function MiReserva() {
    let {id} = useParams();
    let {ReservaId} = useParams();
    const [clienteObject, setClienteObject] = useState({});
    const [reservaObject, setReservaObject] = useState({});
    const [habitacionObject, setHabitacionObject] = useState({});
    let history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:3001/clientes/byId/${id}`).then((response)=>{
            console.log(response);
            setReservaObject(response.data);
        });
        axios.get(`http://localhost:3001/clientes/byId2/${id}`).then((response)=>{
            console.log(response);
            setClienteObject(response.data);

        });
        axios.get(`http://localhost:3001/clientes/byId3/${id}`).then((response)=>{
            console.log(response);
            setHabitacionObject(response.data);
            console.log(habitacionObject.Imagen)

        });
    }, []);
    
    const onSubmit = () =>{
        history.push("/");
    };

    
    return (
        <div  className="postContainer">
            <div>
                <div className="card" style={{ backgroundImage:`url(../img/${habitacionObject.Imagen})`, backgroundSize: "100% 100%" }} > </div>
            </div>
            <div style={{border:'1px solid black', margin: '10px', padding:'10px'}}>
                <div><label>ID: {clienteObject.id}</label></div>
                <div><label>Nombre: {clienteObject.name}</label></div>
                <div><label>Apellido: {clienteObject.apellidos}</label></div>
                <div><label>Correo: {clienteObject.email}</label></div>
                <div><label>Telefono: {clienteObject.phone}</label></div>
                <div><label>Pais: {clienteObject.pais}</label></div>
                <div><label>Dni: {clienteObject.dniCliente}</label></div>



            </div>

            <div style={{border:'1px solid black', margin: '10px', padding:'10px'}}>
                
                <div><label>CheckIn: {reservaObject.checkIn}</label></div>
                <div><label>CheckOut: {reservaObject.checkOut}</label></div>
                <div><label>Children: {reservaObject.children}</label></div>
                <div><label>Adults: {reservaObject.adults}</label></div>

            </div>

            <div style={{border:'1px solid black', margin: '10px', padding:'10px'}}>
                
                <div><label>CheckIn: {habitacionObject.nombre}</label></div>
               

            </div>
            
            <div style={{border:'1px solid black', margin: '10px', padding:'10px'}}>          
                
                <button onClick={onSubmit}>Reserva</button>
            </div>
        </div>
    );
};

export default MiReserva;
