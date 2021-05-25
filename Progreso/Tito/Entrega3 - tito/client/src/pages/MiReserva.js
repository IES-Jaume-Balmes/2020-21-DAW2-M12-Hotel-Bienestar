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
    let history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:3001/clientes/byId/${id}`).then((response)=>{
            console.log("Hola "+response.data);
            setClienteObject(response.data);
        });
        axios.get(`http://localhost:3001/clientes/byId/${id}`).then((response)=>{
            console.log("Caca"+response.data);
            setReservaObject(response.data);
            
        });
    }, []);
    
    const onSubmit = () =>{
        history.push("/");
    };

    
    return (
        <div  className="postContainer">
            <div>
                <img src={foto} style={{width:'500px'}}/>
            </div>
            <div style={{border:'1px solid black', margin: '10px', padding:'10px'}}>
                <div><label>ID: {clienteObject.id}</label></div>
                <div><label>Nombre: {clienteObject.name}</label></div>
                <div><label>Apellido: {clienteObject.apellidos}</label></div>
                <div><label>Correo: {clienteObject.email}</label></div>
                <div><label>Telefono: {clienteObject.phone}</label></div>
                <div><label>Pais: {clienteObject.pais}</label></div>
                <div><label>Dni: {clienteObject.dniCliente}</label></div>
                <div><label>Id: {clienteObject.id}</label></div>
                <div><label>ReservaId: {clienteObject.ReservaId}</label></div>

            </div>

            <div style={{border:'1px solid black', margin: '10px', padding:'10px'}}>
                
                <div><label>CheckIn: {reservaObject.checkIn}</label></div>
                <div><label>CheckOut: {reservaObject.checkOut}</label></div>
                <div><label>Children: {reservaObject.children}</label></div>
                <div><label>Adults: {reservaObject.adults}</label></div>
                <div><label>ReservaId: {reservaObject.ReservaId}</label></div>
            </div>
   
            <div style={{border:'1px solid black', margin: '10px', padding:'10px'}}>          
                
                <button onClick={onSubmit}>Reserva</button>
            </div>
        </div>
    );
};

export default MiReserva;
