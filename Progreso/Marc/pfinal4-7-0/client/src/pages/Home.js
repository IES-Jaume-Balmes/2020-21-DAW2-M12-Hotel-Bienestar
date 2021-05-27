import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core';

function Home() {
    let id = useParams();
    
    const [listOfHabitacion, setListOfHabitacion] = useState([]);
    const [showReservaId, setShowReservaId] = useState({});
    let history = useHistory();

    useEffect(()=>{
        
        axios.get("http://localhost:3001/habitaciones").then((response)=>{
            setListOfHabitacion(response.data);
        });
        
    }, []);
    return (
        <div className="postContainerHabitaciones row">
            {listOfHabitacion.map((value)=>{
                return (
                    <div className="card" style={{ backgroundImage:`url(../img/${value.Imagen})`, backgroundSize: "100% 100%" }}
                    onClick={()=>{
                        if(value.Estado == "Disponible"){
                            history.push(`/habitaciones/${value.id}`)
                        }else{
                            alert("No disponible, amigo")
                        }
                    }}>
                        <div className="card-header h-15  bg-dark text-white"><h5>{value.nombre}</h5></div>
                        <div className="card-body">
                            <p className="price bg-success rounded">Precio: {value.PrecioBase}€</p><br/>
                            <p className="state bg-warning rounded">Estado: {value.Estado}</p>
                        </div>
                    </div>

                );
            })}            
            <div>{showReservaId.id}</div>
        </div>
    )
}

export default Home;
