import React,{useState, useContext} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import {AuthContext} from  "../helpers/AuthContext";

function LoginMiReserva() {
    let history = useHistory();
    const [name, setNombre] = useState("");
    const [email, setCorreo] = useState("");
    const [phone, setTelefono] = useState("");
    const {setAuthState} = useContext(AuthContext);

    const onSubmit = ()=>{
        const data = {name:name, email:email, phone:phone};
        axios.post("http://localhost:3001/clientes/mireserva",data).then((response)=> {
            if(response.data.error){
                alert(response.data.error);
            }else{
                history.push("/clientes/mireserva");
            }
        });
    };

    return (
        <div className="loginContainer">
            <div>
                <label>Nombre:</label>
                <input
                    name="name"
                    type="text"
                    onChange={(event)=>{
                        setNombre(event.target.value);
                    }}
                />
            </div>
            <div>
                <label>Correo:</label>
                <input
                    name="email"
                    type="email"
                    onChange={(event)=>{
                        setCorreo(event.target.value);
                    }}
                />
            </div>       
            <div>
                <label>Telefono:</label>
                <input
                    name="phone"
                    type="phone"
                    onChange={(event)=>{
                        setTelefono(event.target.value);
                    }}
                />
            </div>
            <button type="submit" onClick={onSubmit}>Register</button>
        </div>
    );
};

export default LoginMiReserva;
