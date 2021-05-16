import React,{useEffect, useState, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import foto from "../img/MainArticle.jpg";

function Habitaciones() {
    let {id} = useParams();
    const [habitObject, setHabitObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/habitaciones/byId/${id}`).then((response)=>{
            setHabitObject(response.data);
        });  
    },[]);


    return (
        <div className="postPage">
            <div className="leftSide">
                <div clasName="post" id="individual">
                    <div className="title"><label>Nombre:{habitObject.nombre} </label></div>
                    <div className="title"><label>Num.Habitacion:{habitObject.numHabitacion} </label></div>
                    <div className="title"><label>Num.Camas:{habitObject.numCamas} </label></div>
                    <div className="title"><label>Num.Baño:{habitObject.Baño} </label></div>
                    <div className="title"><label>Precio:{habitObject.PrecioBase} </label></div>
                    <div className="title"><label>Estado:{habitObject.Estado} </label></div>
                </div>
                <div>
                    <div> <img src={foto} ></img> </div>
                </div>
            </div>
        </div>
    );
};

export default Habitaciones;