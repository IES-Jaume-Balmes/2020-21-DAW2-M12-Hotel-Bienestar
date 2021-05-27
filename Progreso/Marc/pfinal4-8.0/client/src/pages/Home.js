import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import Cookies from 'universal-cookie';


function Home() {
    let id = useParams();
    
    const [listOfHabitacion, setListOfHabitacion] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:3001/habitaciones").then((response)=>{
            setListOfHabitacion(response.data);
        });
    }, []);

    const agregarPiscina = () =>{
        const cookies = new Cookies();
        cookies.set('Piscina',10,{path:'/'});
    };
    const agregarPadel = () =>{
        const cookies = new Cookies();
        cookies.set('Padel',5,{path:'/'});
    };
    const agregarAlmuerzo = () =>{
        const cookies = new Cookies();
        cookies.set('Almuerzo',20,{path:'/'});
    };
    const agregarMascota = () =>{
        const cookies = new Cookies();
        cookies.set('Mascota',10,{path:'/'});
    };
    const agregarTraslado = () =>{
        const cookies = new Cookies();
        cookies.set('Traslado',40,{path:'/'});
    };
    return (
        <div className="postContainerHabitaciones ">
            {listOfHabitacion.map((value)=>{
                return (
                    <div>
                        <div className="card" style={{ backgroundImage:`url(../img/${value.Imagen})`, backgroundSize: "100% 100%" }}
                        onClick={()=>{
                            if(value.Estado == "Disponible"){
                                history.push(`/habitaciones/${value.id}`)
                            }else{
                                alert("No disponible, amigo")
                            }
                        }}>
                            <div className="card-header h-15  bg-dark text-white"><h5>{value.nombre}</h5></div>
                            <div className="card-body">
                                <p className="price bg-success rounded">Precio: {value.PrecioBase}€</p><br/>
                                <p className="state bg-warning rounded">Estado: {value.Estado}</p>
                            </div>
                            
                        </div>
                    </div>
                );
            })}
            <div>
                <p>Piscina + 10€</p>
                <button onClick={agregarPiscina}>Añadir</button>
            </div>
            <div>
                <p>Padel +5€</p>
                <button onClick={agregarPadel}>Añadir</button>
            </div>
            <div>
                <p>Aluerzo +20€</p>
                <button onClick={agregarAlmuerzo}>Añadir</button>
            </div>
            <div>
                <p> Viajo con mascota +10€</p>
                <button onClick={agregarMascota}>Añadir</button>
            </div>
            <div>
                <p>Traslado al hotel +40€</p>
                <button onClick={agregarTraslado}>Añadir</button>
            </div>         
        </div>
    )
}

export default Home;
