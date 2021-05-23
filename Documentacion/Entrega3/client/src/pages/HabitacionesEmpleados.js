import React,{useEffect, useState, useContext} from 'react';
import {useParams,useHistory} from "react-router-dom";
import axios from "axios";

function Habitaciones() {
    let {id} = useParams();
    let history = useHistory();
    const [habitObject, setHabitObject] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:3001/habitaciones`).then((response)=>{
            setHabitObject(response.data);
        }); 
    },[]);

    const onSubmit = ()=>{
        axios.get(`http://localhost:3001/habitaciones/byId/${id}`).then((response2)=>{
            console.log(response2.data.id);
            history.push(`/createusuari/${habitObject.id}`);
        })
    };
    const back = ()=>{
        history.push("/HomeEmpleados");
    }
    return (
        <div className="postPage">
            {habitObject.map((value)=>{
                return(
                    <div >
                        <div className="title">{value.nombre}</div>
                        <div className="body"><label>NumHabitacion: {value.numHabitacion}</label></div>
                        <div className="body"><label>NumCamas: {value.numCamas} </label></div>
                        <div className="body"> <label>Baño: {value.Baño} </label></div>
                        <div className="body"><label>Estado: {value.Estado}</label>
                        <div><button>Cambiar Estado</button></div>
                        </div>
                    </div>
                );
            })}
            <div><button onClick={back}>Fuck Go Back</button></div>
        </div>
    );
};

export default Habitaciones;