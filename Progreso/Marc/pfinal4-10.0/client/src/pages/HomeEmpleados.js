import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
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
        <div class="col card w-50 p-3 border-dark">
            <div class="card-header">
                <h4 class="text-center m-auto">Bienvenido</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col text-center"> 
                        <button style={{border:'1px solid black'}} onClick={clientes}>Ver Clientes</button>
                    </div>
                    <div class="col text-center"> 
                        <button style={{border:'1px solid black'}} onClick={habitaciones}>Ver Habitaciones</button>
                    </div>
                </div>
    
            </div>
            
           </div>

    )
}

export default withRouter(HomeEmpleados);
