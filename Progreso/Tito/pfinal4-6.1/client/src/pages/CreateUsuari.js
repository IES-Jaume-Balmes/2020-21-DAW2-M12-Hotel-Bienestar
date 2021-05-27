import React,{useState} from 'react';
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import Cookies from 'universal-cookie';

function CreateUsuari() {
    const cookies = new Cookies();
    let {id} = useParams();
    let history = useHistory();
    const [name, setName] = useState("");
    const [firstname, setFirstName] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pais, setPais] = useState("");
    const [titularTarjeta, setTitularTarjeta] = useState("");
    const [numTarjeta, setNumTarjeta] = useState("");
    const [fechaExpTarjeta, setFechaExpTarjeta] = useState("");
    const IdReserva = cookies.get('IdReserva');
    const variable = { 
        name: name,
        apellidos: firstname,
        dniCliente: dni,
        email: email,
        pais: pais,
        phone: phone,
        titularTarjeta: titularTarjeta,
        numTarjeta: numTarjeta,
        fechaExpTarjeta: fechaExpTarjeta,
        ReservaId:IdReserva,
    }
    
        
    const onSubmit = () =>{
        axios.post(`http://localhost:3001/clientes`,variable).then(()=>{
            history.push("/");
        });
    };
    return (
        

        <form class="was-validated">
            <div className="card">
                
                <div className="card-header"><h4 className="text-center m-auto">Datos</h4></div>
                <div className="card-body">
                    <label>Nombre</label>
                    <input 
                            autoComplete="off"
                            type="text"
                            id="inputCreatePost" 
                            className="form-control"
                            name="name" 
                            placeholder="Nombre"
                            value={name}
                            onChange={(event)=>{setName(event.target.value)}}
                            required
                        />
                            <div class="valid-feedback">Valido.</div>
                            <div class="invalid-feedback">No dejes este campo vacío!.</div>
                                <lable>Apellido</lable>
                                <input 
                            autoComplete="off"
                            type="text"
                            id="inputCreatePost" 
                            name="firstname" 
                            className="form-control"
                            placeholder="Primer Apellido"
                            value={firstname}
                            onChange={(event)=>{setFirstName(event.target.value)}}
                            required
                        />
                    <label>DNI</label>

                    <input 
                            autoComplete="off"
                            type="text"
                            id="inputCreatePost" 
                            name="dni" 
                            placeholder="(Ex.123456789R)"
                            className="form-control " 
                            value={dni}
                            onChange={(event)=>{setDni(event.target.value)}}
                            required
                        />
                        <lable>Correo</lable>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="email" 
                            placeholder="Email"
                            className="form-control " 
                            value={email}
                            onChange={(event)=>{setEmail(event.target.value)}}
                            required
                        />
                        <label>Telefono</label>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="phone" 
                            placeholder="(Ex.666 555 777)"
                            className="form-control"
                            value={phone}
                            onChange={(event)=>{setPhone(event.target.value)}}
                            required
                        />
                        <lable>Pais</lable>
                        <select value={pais} onChange={(event)=>{setPais(event.target.value)}} className="form-control" >
                            <option value="España">España</option>
                            <option value="Francia">Francia</option>
                            <option value="Italia">Italia</option>
                            <option value="Alemania">Alemania</option>
                        </select>
                    </div>
                
            </div>

            <div>
                <div className="formContainer">
                    
 
                    
                    <div><h2>Datos de pago</h2></div>

                    <div className="formConatinerBlock">
                        <div><label>Titular de la Tarjeta:</label></div>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="titulartarjeta" 
                            placeholder="(Ex.Marc Jorge)"
                            value={titularTarjeta}
                            onChange={(event)=>{setTitularTarjeta(event.target.value)}}
                        />
                    </div>

                    <div className="formConatinerBlock">
                        <div><label>Numero Tarjeta:</label></div>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="numtarjeta" 
                            placeholder="(Ex.1234567891213)"
                            value={numTarjeta}
                            onChange={(event)=>{setNumTarjeta(event.target.value)}}
                        />
                    </div>

                    <div className="formConatinerBlock">
                        <div><label>Fecha de cadudciad:</label></div>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="fechaExpTarjeta" 
                            placeholder="(Ex.0-5...)"
                            type="date"
                            value={fechaExpTarjeta}
                            onChange={(event)=>{setFechaExpTarjeta(event.target.value)}}
                        />
                    </div>
                    
                    <button type="submit" onClick={onSubmit}>Hacer Reserva</button>
                </div>
            </div>  
        </form>
    );
}

export default CreateUsuari;