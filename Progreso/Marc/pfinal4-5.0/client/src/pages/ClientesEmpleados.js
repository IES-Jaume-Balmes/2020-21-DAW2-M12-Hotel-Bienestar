import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom";


function Empleados() {
    const [listOfClientes, setListOfClientes] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        axios.get('http://localhost:3001/clientes ').then((response)=>{
          setListOfClientes(response.data)
        });
    },[]);

    const back = ()=>{
        history.push("/HomeEmpleados");
    };
    

    return (
        <div className="postContainer">
            {listOfClientes.map((value)=>{
                return(
                    <div>
                        <div>{value.name}</div>
                        <div><label>Apellidos: {value.apellidos} </label></div>
                        <div><label>Dni: {value.dniCliente}</label></div>
                        <div><label>Pais: {value.pais} </label></div>
                        <div><label>Telefono: {value.phone} </label></div>
                        <div><label>Email: {value.email}</label> 
                        </div>
                    </div>
                );
            })}
            <div><button onClick={back}>Fuck Go Back</button></div>
        </div>
    )
}

export default Empleados
