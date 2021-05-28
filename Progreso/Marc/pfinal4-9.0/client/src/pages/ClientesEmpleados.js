import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useHistory, useParams} from "react-router-dom";


function ClientesEmpleados() {
    const [listOfClientes, setListOfClientes] = useState([]);
    let history = useHistory();
    let {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:3001/clientes ').then((response)=>{
          setListOfClientes(response.data)
        });
    },[]);

    const back = ()=>{
        history.push("/HomeEmpleados");
    };

    const borrar = (id)=>{
        axios.delete(`http://localhost:3001/clientes/${id}`).then(()=>{
            setListOfClientes(listOfClientes.filter((val)=>{
                return val.id != id;
            }));
        });
    };
    

    return (
        <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Dni</th>
                    <th>Pais</th>
                    <th>Movil</th>
                    <th>Email</th>
                    <th> </th>
                </tr>
            </thead>
            {listOfClientes.map((value)=>{
                return(
                    <tbody>
                        <tr>
                            <td>{value.name}</td>
                            <td>{value.apellidos}</td>
                            <td>{value.dniCliente}</td>
                            <td>{value.pais}</td>
                            <td>{value.phone}</td>
                            <td>{value.email}</td> 
                            <td><button onClick={()=>{borrar(value.id)}}>x</button></td>      
                        </tr>
                    </tbody>
                );
            })}
            <div><button onClick={back}>Fuck Go Back</button></div>
            </table>
        </div>
    )
}

export default ClientesEmpleados
