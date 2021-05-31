import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

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
                alert("response.data.error");
            }else{
                history.push(`/mireserva/${response.data.id}`);
            }
        });
    };

    return (
        <div className="border-dark card p-5">
            <div className="card-header"><h4 className="text-center m-auto">Identificate</h4></div>
            <div className="card-body">
                <label>Nombre:</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Pon tu nombre"
                    className="form-control"
                    onChange={(event)=>{
                        setNombre(event.target.value);
                    }}
                />

                <label>Correo:</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Pon tu email"
                    className="form-control"
                    onChange={(event)=>{
                        setCorreo(event.target.value);
                    }}
                />
 
                <label>Telefono:</label>
                <input
                    name="phone"
                    type="phone"
                    placeholder="Pon tu telefono"
                    className="form-control"
                    onChange={(event)=>{
                        setTelefono(event.target.value);
                    }}
                />
            </div>
            <button type="submit" className="btn w-100 bg-dark text-white" onClick={onSubmit}>Ver mi reserva <EventAvailableIcon/></button>
        </div>
    );
};

export default LoginMiReserva;
