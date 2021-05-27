import React,{useEffect, useState, useContext} from 'react';
import {useParams,useHistory} from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';

function Habitaciones() {
    const cookies = new Cookies();
    let {id} = useParams();
    let history = useHistory();
    const [habitObject, setHabitObject] = useState({});
    const variable1= cookies.get('checkIn');
    const variable2 = cookies.get('checkOut');
    const variable3 = cookies.get('adults');
    const variable4 = cookies.get('children');
    const variable5 = cookies.get('Piscina');
    const variable6 = cookies.get('Padel');
    const variable7 = cookies.get('Almuerzo');
    const variable8 = cookies.get('Mascota');
    const variable9 = cookies.get('Traslado');
    var adicional = [variable5, variable6, variable7, variable8, variable9];

    var sumaTotal = 0;
    for(var i =0; i<adicional.length; i++){
        if (!isNaN(parseInt(adicional[i]))) sumaTotal = sumaTotal + parseInt(adicional[i]);

    }
    var finalprice = habitObject.PrecioBase + sumaTotal;
    
    const variable = { checkIn:variable1, checkOut:variable2, adults:variable3, children:variable4, HabitacioneId:habitObject.id, precioReserva:finalprice};
    useEffect(() => {
        axios.get(`http://localhost:3001/habitaciones/byId/${id}`).then((response)=>{
            setHabitObject(response.data);
        }); 
    },[]);

    const onSubmit = ()=>{
        cookies.set('IdHabitacion',habitObject.id,{path:'/'});
        axios.post(`http://localhost:3001/reserva`, variable).then((response)=>{
            cookies.set('IdReserva',response.data.id,{path:'/'});
            history.push(`/createusuari/${habitObject.id}`);
        });
        axios.post(`http://localhost:3001/habitaciones/${id}`);

    };
    return (
        <div className="postPage">
            <div className="leftSide"> 
                <div clasName="post" id="individual">
                    <div className="title"><label>CheckIn: {cookies.get('checkIn')}</label></div>
                    <div className="title"><label>CheckOut: {cookies.get('checkOut')}</label></div>
                    <div className="title"><label>Adults: {cookies.get('adults')}</label></div>
                    <div className="title"><label>Children: {cookies.get('children')}</label></div>
                    <div className="title"><label>Nombre:{habitObject.nombre} </label></div>
                    <div className="title"><label>Num.Habitacion:{habitObject.numHabitacion} </label></div>
                    <div className="title"><label>Num.Camas:{habitObject.numCamas} </label></div>
                    <div className="title"><label>Num.Baño:{habitObject.Baño} </label></div>
                    <div className="title"><label>Precio:{finalprice} </label></div>
                    <div className="addCommentContainer">
                        <button onClick={onSubmit }>Reserva</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Habitaciones;