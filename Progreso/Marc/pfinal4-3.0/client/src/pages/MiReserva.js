import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router';

function MiReserva() {
    const [listOfClientes, setListOfClientes] = useState({});
    let history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:3001/clientes").then((response)=>{
            setListOfClientes(response.data);
        });
    }, []);

    
    return (
        <div>
            <div>
                <div >{listOfClientes.name}</div>
            </div>
        </div>
    )
}

export default MiReserva;
