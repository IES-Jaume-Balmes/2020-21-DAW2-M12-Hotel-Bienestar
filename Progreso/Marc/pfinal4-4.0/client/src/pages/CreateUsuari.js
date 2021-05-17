import React,{useState} from 'react';
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";


function CreateUsuari() {
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

    const onSubmit = () =>{
        axios.post(`http://localhost:3001/clientes`,{
            ReservaId:id,
            name: name,
            apellidos: firstname,
            dniCliente: dni,
            email: email,
            pais: pais,
            phone: phone,
            titularTarjeta: titularTarjeta,
            numTarjeta: numTarjeta,
            fechaExpTarjeta: fechaExpTarjeta,
        }).then((response)=>{
            if(response.data.error){
                console.log(response.data.error);
            }else{
                setName();
                setFirstName();
                setDni();
                setEmail();
                setPhone();
                setPais();
                setTitularTarjeta();
                setNumTarjeta();
                setFechaExpTarjeta();
                history.push("/");
            }
        });
    };
    return (
        <div className="createPostPage">
            <div>
                <div className="formContainer">
                    <div className="formConatinerBlock">
                        <div><label>Nombre:</label></div>
                        <input 
                            autoComplete="off"
                            type="text"
                            id="inputCreatePost" 
                            name="name" 
                            placeholder="(Ex. Marc)"
                            value={name}
                            onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="formConatinerBlock">
                        <div><label>Apellido:</label></div>
                        <input 
                            autoComplete="off"
                            type="text"
                            id="inputCreatePost" 
                            name="firstname" 
                            placeholder="(Ex.Garcia)"
                            value={firstname}
                            onChange={(event)=>{setFirstName(event.target.value)}}
                        />
                    </div>
                    <div className="formConatinerBlock">
                        <div><label>Dni:</label></div>
                        <input 
                            autoComplete="off"
                            type="text"
                            id="inputCreatePost" 
                            name="dni" 
                            placeholder="(Ex.123456789R)"
                            value={dni}
                            onChange={(event)=>{setDni(event.target.value)}}
                        />
                    </div>
                    <div className="formConatinerBlock">
                        <div><label>Correo:</label></div>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="email" 
                            placeholder="(Ex.ex@gmail.com)"
                            value={email}
                            onChange={(event)=>{setEmail(event.target.value)}}
                        />
                    </div>
                    
                    <div className="formConatinerBlock">
                        <div><label>Telefono:</label></div>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="phone" 
                            placeholder="(Ex.666 555 777)"
                            value={phone}
                            onChange={(event)=>{setPhone(event.target.value)}}
                        />
                    </div>

                    <div className="formConatinerBlock">
                        <div><label>Pais:</label></div>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="pais" 
                            placeholder="(Ex.España)"
                            value={pais}
                            onChange={(event)=>{setPais(event.target.value)}}
                        />
                    </div>

                    
                    <br></br>
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
        </div>
    );
}

export default CreateUsuari;