import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router';

function MiReserva() {
    const [listOfReservas, setListOfReservas] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:3001/reserva").then((response)=>{
            setListOfReservas(response.data);
        });
    }, []);

    
    return (
        <div className="postContainer">
            {listOfReservas.map((value)=>{
                return (
                    <div className="post" onClick={()=>{
                        history.push(`/habitaciones/${value.id}`)
                    }}>
                        <div className="title">{value.nombre}</div>
                        <div className="body">
                            <label>Num Habitacion: {value.numHabitacion} </label>
                        </div>
                        <div className="body">
                            <label>Num de Camas: {value.numCamas}</label></div>
                        <div className="body">
                            <label>Num de Baños: {value.Baño} </label>
                        </div>
                        <div className="body"> <label>Precio: {value.PrecioBase}€ </label>
                        </div>
                        <div className="footer">
                            <label>Estado: </label>
                            {value.Estado}
                        </div>
                    </div>
                    
                );
            })}
            
        </div>
    )
}

export default MiReserva;
