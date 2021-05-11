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
                        <div className="title">{value.name}</div>
                        <div className="body">
                            <label>Email: {value.email} </label>
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
