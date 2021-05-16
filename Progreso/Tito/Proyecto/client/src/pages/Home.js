import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import MySlider from "./Slider"



function Home() {
    

    const [listOfHabitacion, setListOfHabitacion] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:3001/habitaciones").then((response)=>{
            setListOfHabitacion(response.data);
        });
    }, []);
    
    return (
        <div className="postContainer">
            <div className="slider container bg-dark">
            </div>

            {listOfHabitacion.map((value, key)=>{
                return (
                    <div className="post" onClick={()=>{
                        history.push(`/habitaciones/${value.id}`)
                    }}>
                        <div className="title">{value.nombre}</div>
                        <div className="body">
                            <label>PrecioBase: {value.PrecioBase} </label>
                        </div>
                        <div className="body">
                            <label>Telefono: {value.phone}</label></div>
                        <div className="body">
                            <label>Adults: {value.adults} </label>
                        </div>
                        <div className="body"> <label>children: {value.children} </label>
                        </div>
                        <div className="footer">
                            <label>Check In: </label>
                            {value.checkIn}
                        </div>
                        <div className="footer">
                            <label>Check Out: </label>
                            {value.checkOut}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Home;
