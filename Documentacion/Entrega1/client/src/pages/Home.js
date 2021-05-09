import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

function Home() {
    const [listOfReserves, setListOfReserves] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:3001/reserva").then((response)=>{
            setListOfReserves(response.data);
        });
    }, []);
    return (
        <div>
            {listOfReserves.map((value, key)=>{
                return (
                    <div  className="post" onClick={()=>{
                        history.push(`/reserva/${value.id}`)
                    }}>
                        <div className="name">{value.name}</div>
                        <div className="body">{value.email}</div>
                        <div className="body">{value.phone}</div>
                        <div className="body">{value.adults}</div>
                        <div className="body">{value.childreen}</div>
                        <div className="body">{value.checkIn}</div>
                        <div className="body">{value.checkOut}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default Home;
