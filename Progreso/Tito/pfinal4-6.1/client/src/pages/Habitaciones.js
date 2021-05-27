import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';

function Habitaciones() {
  const cookies = new Cookies();
  let { id } = useParams();
  let history = useHistory();
  const [habitObject, setHabitObject] = useState({});
  const variable1 = cookies.get("checkIn");
  const variable2 = cookies.get("checkOut");
  const variable3 = cookies.get("adults");
  const variable4 = cookies.get("children");
  const variable = {
    checkIn: variable1,
    checkOut: variable2,
    adults: variable3,
    children: variable4,
    HabitacioneId: habitObject.id,
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/habitaciones/byId/${id}`)
      .then((response) => {
        setHabitObject(response.data);
      });
  }, []);

  const onSubmit = () => {
    cookies.set("IdHabitacion", habitObject.id, { path: "/" });
    axios.post(`http://localhost:3001/reserva`, variable).then((response) => {
      cookies.set("IdReserva", response.data.id, { path: "/" });
      history.push(`/createusuari/${habitObject.id}`);
    });
  };
  return (

    <div className="card w-50 border-dark">
      <div className="card-header">
        <h4 className="text-center m-auto">Resumen de la reserva</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <span className="col">
          <strong>Llegada </strong>
          {cookies.get("checkIn")} <CallReceivedIcon />
          </span>
          
          <span className="col">
           <strong>Salida </strong> 
           {cookies.get("checkOut")} <CallMadeIcon />
            <br />
          </span>
        </div>
        <div>
          <div className="card-header">
            <h4 className="text-center m-auto">
              {habitObject.nombre} Nº {habitObject.numHabitacion}
            </h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item ">
                <AccessibilityIcon/> 
               <strong> Adultos
              <span className="float-right">{cookies.get("adults")}</span></strong>
            </li>
            <li class="list-group-item ">
                <ChildCareIcon/> 
               <strong> Niños
              <span className="float-right">{cookies.get("children")}</span></strong>
            </li>
            <li class="list-group-item ">
                <HotelIcon/>
              <strong> Camas
              <span className="float-right">{habitObject.numCamas}</span></strong> 
            </li>
            <li class="list-group-item ">
                <BathtubIcon/>
              <strong> Baño/s <span className="float-right">{habitObject.Baño}</span></strong>
            </li>
            <li class="list-group-item list-group-item-success ">
              <span className="float-right"> Precio <strong>{habitObject.PrecioBase}€ </strong></span>
            </li>
          </ul>
        </div>
      </div>
      <button class="btn bg-dark text-white m-auto" onClick={onSubmit} > Continuar </button>
    </div>
  );
}

export default Habitaciones;
