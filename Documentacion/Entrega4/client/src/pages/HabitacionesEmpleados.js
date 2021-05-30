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
    const borrar = (id)=>{
        axios.delete(`http://localhost:3001/habitaciones/${id}`).then(()=>{
            setHabitObject(habitObject.filter((val)=>{
                return val.id != id;
            }));
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
                    <th></th>
                    <th></th>

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
                            <td>{value.Estado}</td>
                            <td>
                                <button className="btn bg-dark text-white" onClick={()=>{cambiarEstado(value.id)}}>Cambiar Estado</button>
                            </td>
                            <td>
                                <button className="btn btn-secondary " onClick={()=>{borrar(value.id)}}>Borrar Habitacion</button>
                            </td>
                        </tr>
                    </tbody>
                );
            })}
            
        </table>
        <div style={{width:"90%"}}>
                <button type="button" class="btn bg-dark btn-lg text-white" onClick={back}>Atras</button>
                <button type="button" class="btn btn-secondary btn-lg float-sm-right mr-10" onClick={nuevaHabi}>Nueva Habitacion</button>   
            </div>
        </div>
    );
};

export default Habitaciones;