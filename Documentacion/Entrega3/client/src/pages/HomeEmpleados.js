import React from 'react'
import { useHistory } from 'react-router';
import Habitaciones from './Habitaciones';

function HomeEmpleados() {
    let history = useHistory("");

    const clientes = () =>{
        history.push("/ClientesEmpleados");
    };

    const habitaciones = () =>{
        history.push("/HabitacionesEmpleados");
    };

    return (
        <div>
            <h1>Hola</h1>
            <button onClick={clientes}>Ver Clientes</button>
            <button onClick={habitaciones}>Ver Habitaciones</button>
        </div>

    )
}

export default HomeEmpleados;
