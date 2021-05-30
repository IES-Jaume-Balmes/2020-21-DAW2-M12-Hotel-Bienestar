import React,{useEffect, useState, useContext} from 'react';
import {useParams,useHistory} from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';

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
      <>
        <div  className=" col card w-50 p-3 border-dark">
          <div className="card-header">
            <h4 className="text-center m-auto">Resumen de la reserva</h4>
          </div>
          <div className="card-body">
            <div className="row">
            
              <span className="col text-center">
            Llegada 
              {cookies.get("checkIn")} <CallReceivedIcon />
              </span>
              
              <span className="col text-center">
            Salida  
              {cookies.get("checkOut")} <CallMadeIcon />
                <br />
              </span>
            </div>
            <div>
              <div className="card-header">
                <h4 className="text-center m-auto">
                  {habitObject.nombre} Nº {habitObject.numHabitacion}
                </h4>
                <img className="rounded img-fluid mx-auto d-block"src ={`../img/${habitObject.Imagen}`}/>
              </div>
              <ul class="list-group ">
                <li class="list-group-item ">
                    <AccessibilityIcon/> 
                 Adultos
                  <span className="float-right badge badge-pill badge-dark">{cookies.get("adults")}</span>
                </li>
                <li class="list-group-item ">
                    <ChildCareIcon/> 
                 Niños
                  <span className="float-right badge badge-pill badge-dark">{cookies.get("children")}</span>
                </li>
                <li class="list-group-item ">
                    <HotelIcon/>
                 Camas
                  <span className="float-right badge badge-pill badge-dark">{habitObject.numCamas}</span> 
                </li>
                <li class="list-group-item ">
                    <BathtubIcon/>
                 Baño/s <span className="float-right badge badge-pill badge-dark">{habitObject.Baño}</span>
                </li>
                <li class="list-group-item list-group-item-success ">
                  <span className="float-right badge badge-pill badge-success"> Total:{finalprice}€ </span>
                </li>
              </ul>
            </div>
          </div>
          <button class="btn bg-dark text-white m-auto" onClick={onSubmit} > Continuar </button>
        </div>
      </>
  );
};

export default Habitaciones;