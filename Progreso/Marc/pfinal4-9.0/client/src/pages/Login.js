import React,{useState, useContext} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {AuthContext} from  "../helpers/AuthContext";

function Login() {
    const [nombre, setNombre] = useState("");
    const [contrasenya, setContrasenya] = useState("");
    const {setAuthState} = useContext(AuthContext);

    let history = useHistory();

    const login = ()=>{
        const data = {nombre: nombre, contrasenya: contrasenya};
        axios.post("http://localhost:3001/auth/login", data).then((response)=>{
            if(response.data.error){
                alert(response.data.error);
            } else{
                console.log(response);
                console.log(response.data.token);
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({nombre:response.data.nombre, id:response.data.id, status:true});
                history.push("/HomeEmpleados");
            }
        });
    };
    return (
        <div className="loginContainer">
            <label>Username:</label>
            <input 
                type="text" 
                onChange={(event)=>{
                    setNombre(event.target.value);
                }}
            />
            <label>Password:</label>
            <input 
                type="password" 
                onChange={(event)=>{
                    setContrasenya(event.target.value);
                }}
            />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;
