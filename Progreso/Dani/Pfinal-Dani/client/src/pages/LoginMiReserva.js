import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';

function LoginMiReserva() {
    let history = useHistory();
    let {id} = useParams();
    const [name, setNombre] = useState("");
    const [email, setCorreo] = useState("");
    const [phone, setTelefono] = useState("");
    const data = {name:name, email:email, phone:phone};

    const onSubmit = ()=>{
        axios.post(`http://localhost:3001/clientes/mireserva`,data).then((response)=> {
            if(response.data.error){
                alert(response);
            }else{
                history.push(`/mireserva/${response.data.id}`);
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
                    placeholder="Pon tu nombre"
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
                    placeholder="Pon tu email"
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
                    placeholder="Pon tu telefono"
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
