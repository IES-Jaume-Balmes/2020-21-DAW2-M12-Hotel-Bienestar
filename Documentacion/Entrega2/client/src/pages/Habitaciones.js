import React,{useEffect, useState, useContext} from 'react';
import {useParams,useHistory} from "react-router-dom";
import axios from "axios";

function Habitaciones() {
    let {id} = useParams();
    let history = useHistory();
    const [habitObject, setHabitObject] = useState({});
    const [listOfHabitaciones, setListOfHabitaciones] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3001/habitaciones/byId/${id}`).then((response)=>{
            setHabitObject(response.data);
        }); 
    },[]);

    const onSubmit = ()=>{
        axios.get(`http://localhost:3001/habitaciones/byId/${id}`).then((response)=>{
            setHabitObject(response.data);
            console.log("hoal "+response.data);
            history.push(`/createpost/${habitObject.id}`);
        });
    };
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
                    <div className="title"><label>Imatge:{habitObject.Imagen} </label></div>
                    <div className="addCommentContainer">
                        <button onClick={onSubmit }>Reserva</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Habitaciones;