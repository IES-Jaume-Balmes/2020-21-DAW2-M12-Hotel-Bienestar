import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PaymentIcon from "@material-ui/icons/Payment";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

function MiReserva() {
  let { id } = useParams();
  const [clienteObject, setClienteObject] = useState({});
  const [reservaObject, setReservaObject] = useState({});
  const [habitacionObject, setHabitacionObject] = useState({});
  let history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3001/clientes/byId/${id}`).then((response) => {
      console.log(response);
      setClienteObject(response.data);
    });
    axios.get(`http://localhost:3001/clientes/byId2/${id}`).then((response) => {
      console.log(response);
      setReservaObject(response.data);
    });

    axios.get(`http://localhost:3001/clientes/byId3/${id}`).then((response) => {
      console.log(response);
      console.log(response.data.Imagen);
      setHabitacionObject(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="p-0 w-100 card ">
        <div className="w-100 bg-dark text-white card-header">
          <h1 className="text-center m-auto">
            Reserva a nombre de {clienteObject.name} {clienteObject.apellidos}
          </h1>
        </div>
        
        <div className="card-body">
            <div className="row">
                <div className="col mb-5" >
                    <img className="w-100 rounded h-100" src={`../img/${habitacionObject.Imagen}`}/>
                </div>
                <div className="col">
                <ul className="list-group">
                <li className="list-group-item">Check In {reservaObject.checkIn}</li>
                <li className="list-group-item">Check Out {reservaObject.checkOut}</li>
                <li className="list-group-item">Vendran {reservaObject.adults} adultos y {reservaObject.children}
            niños</li>
            <li className="list-group-item">Camas {habitacionObject.numCamas}</li>
            <li className="list-group-item">Precio {habitacionObject.PrecioBase}€ </li>
                </ul>
                </div>
            </div>
          <div className="row">
            <div className="col">
              <div className="w-100 bg-dark text-white card-header">
                <h1 className="text-center m-auto">
                  <AssignmentIndIcon fontSize="large" />
                </h1>
              </div>

              <ul className=" w-100 list-group">
                <li className="list-group-item">
                  <EmailIcon /> {clienteObject.email}
                </li>
                <li className="list-group-item">
                  <PhoneIcon /> {clienteObject.phone}
                </li>
                <li className="list-group-item">
                  <LocationOnIcon /> {clienteObject.pais}
                </li>
                <li className="list-group-item">
                  <RecentActorsIcon /> {clienteObject.dniCliente}
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="w-100 bg-dark text-white card-header">
                <h1 className="text-center m-auto">
                  <PaymentIcon fontSize="large" />
                </h1>
              </div>
              <ul className="list-group">
                <li className="list-group-item"><strong>Titular </strong> {clienteObject.titularTarjeta}</li>
                <li className="list-group-item"><strong>nº Tarjeta </strong>{clienteObject.numTarjeta}</li>
                <li className="list-group-item"> <strong>Fecha Exp. </strong>  {clienteObject.fechaExpTarjeta}</li>
            </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MiReserva;
