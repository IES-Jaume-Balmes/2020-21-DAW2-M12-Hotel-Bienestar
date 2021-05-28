import React,{useEffect, useState, useContext} from 'react';
import {useParams,useHistory} from "react-router-dom";
import axios from "axios";

function Habitaciones() {
    let {id} = useParams();
    let history = useHistory();
    const [habitObject, setHabitObject] = useState([]);
    const [newEstado, setNewEstado] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:3001/habitaciones`).then((response)=>{
            setHabitObject(response.data);
        }); 
    },[]);

    const back = ()=>{
        history.push("/HomeEmpleados");
    }
    const cambiarEstado = (id) =>{
        axios.post(`http://localhost:3001/habitaciones/${id}`).then(()=>{

            window.location.reload();
        });
    };
    const nuevaHabi = ()=>{
        history.push("/CreateHabitacion");
    };

    return (
        <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>NumHabitacion</th>
                    <th>NumCamas</th>
                    <th>Baño</th>
                    <th>Estado</th>
                </tr>
            </thead>
            {habitObject.map((value)=>{
                return(
                    <tbody>
                    <tr>
                        <td>{value.nombre}</td>
                        <td>{value.numHabitacion}</td>
                        <td>{value.numCamas}</td>
                        <td>{value.Baño}</td>
                        <td>{value.Estado} <button onClick={()=>{cambiarEstado(value.id)}}>Cambiar Estado</button></td>
                    </tr>
                </tbody>
                );
            })}
            <div><button onClick={back}>Fuck Go Back</button></div>
            <div><button onClick={nuevaHabi}>Nueva Habitacion</button></div>
        </table>
        </div>
    );
};

export default Habitaciones;