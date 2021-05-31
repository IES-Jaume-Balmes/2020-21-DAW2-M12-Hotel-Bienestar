import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Cookies from "universal-cookie";

function Home() {
  let id = useParams();

  const [listOfHabitacion, setListOfHabitacion] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/habitaciones").then((response) => {
      setListOfHabitacion(response.data);
    });
  }, []);

  const agregarPiscina = () => {
    const cookies = new Cookies();
    cookies.set("Piscina", 10, { path: "/" });
    document.getElementById("piscina").disabled = true;
    document.getElementById("piscina").classList.remove("boton");
  };
  const agregarPadel = () => {
    const cookies = new Cookies();
    cookies.set("Padel", 5, { path: "/" });
    document.getElementById("padel").disabled = true;
    document.getElementById("padel").classList.remove("boton");
  };
  const agregarAlmuerzo = () => {
    const cookies = new Cookies();
    cookies.set("Almuerzo", 20, { path: "/" });
    document.getElementById("almuerzo").disabled = true;
    document.getElementById("almuerzo").classList.remove("boton");
  };
  const agregarMascota = () => {
    const cookies = new Cookies();
    cookies.set("Mascota", 10, { path: "/" });
    document.getElementById("mascota").disabled = true;
    document.getElementById("mascota").classList.remove("boton");
  };
  const agregarTraslado = () => {
    const cookies = new Cookies();
    cookies.set("Traslado", 40, { path: "/" });
    document.getElementById("traslado").disabled = true;
    document.getElementById("traslado").classList.remove("boton");
  };
  

      
  return (
    <div className=" hab container">
      <div className="card add sticky-top">
        <ul class="list-group">
          <li class="list-group-item">
            Piscina
            <button
              id="piscina"
              onClick={agregarPiscina}
              className="btn  boton bg-dark text-white"
            >
              + 10€
            </button>
          </li>
          <li class="list-group-item">
            Padel
            <button
              id="padel"
              onClick={agregarPadel}
              className="btn boton  bg-dark text-white"
            >
              + 5€
            </button>
          </li>
          <li class="list-group-item">
            Almuerzo
            <button
              id="almuerzo"
              onClick={agregarAlmuerzo}
              className="btn  boton bg-dark text-white"
            >
              + 20€
            </button>
          </li>
          <li class="list-group-item">
            Cuidado de mascota
            <button
              id="mascota"
              className="btn  boton bg-dark text-white"
              onClick={agregarMascota}
            >
              + 10€
            </button>
          </li>
          <li class="list-group-item">
            Traslado al hotel
            <button
              id="traslado"
              className="btn  boton bg-dark text-white"
              onClick={agregarTraslado}
            >
              + 40€
            </button>
          </li>
        </ul>
      </div>
      {listOfHabitacion.map((value) => {
        return (
          <div
            id="ND"
            className="habitacion card"
            style={{
              backgroundImage: `url(../img/${value.Imagen})`,
              backgroundSize: "100% 100%",
            }}
            onClick={() => {
              if (value.Estado == "Disponible") {
                history.push(`/habitaciones/${value.id}`);
              } else {
                alert("No disponible de momento");
              }
            }}
          >
            <div className="card-header h-15  bg-dark text-white">
              <h5>{value.nombre}</h5>
            </div>
            <div className="card-body">
              <p className="bg-success rounded">Precio: {value.PrecioBase}€</p>
              <br />

              <p id="estado" className="state bg-warning rounded">
                Estado: {value.Estado}
              </p>
            </div>
          </div>
        );
      })}
      
    </div>
  );
}

export default Home;
