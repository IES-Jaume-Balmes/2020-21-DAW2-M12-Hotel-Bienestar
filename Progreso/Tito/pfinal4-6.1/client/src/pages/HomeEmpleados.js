import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import {withRouter} from 'react-router-dom';

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
            <button style={{border:'1px solid black'}} onClick={clientes}>Ver Clientes</button>
            <button style={{border:'1px solid black'}} onClick={habitaciones}>Ver Habitaciones</button>
        </div>

    )
}

export default withRouter(HomeEmpleados);
