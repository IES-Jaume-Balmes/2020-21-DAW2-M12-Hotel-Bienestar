import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core';



function Home() {

    const [listOfHabitacion, setListOfHabitacion] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:3001/habitaciones").then((response)=>{
            setListOfHabitacion(response.data);
        });
    }, []);



    return (
        <div className="postContainer">

            {listOfHabitacion.map((value)=>{
                return (
                    <div className="post" style={{ backgroundImage:`url(../img/${value.Imagen})` }}onClick={()=>{
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
                        <div className="body"><label>Estado: {value.Estado}</label> 
                        </div>
                        
                    </div>
                    
                );
            })}
            
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    
}))

export default Home;
