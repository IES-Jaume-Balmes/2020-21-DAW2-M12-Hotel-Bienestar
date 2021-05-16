import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router';

function LoginMiReserva() {
    let history = useHistory();

    const onSubmit = ()=>{
        axios.post(`htpp:\\localhost:3001\clientes`).then((response)=>{
        });
        history.push("/mireserva");
    };

    return (
        <div>
            <Formik>
                <Form className="formLogin">
                    <div>
                        <div><label>Nombre:</label></div>
                        <ErrorMessage name="nombre" component="span"/>
                        <Field 
                        autoComplete="off" 
                        id="inputLogin"
                        name="nombre" 
                        placeholder="(Ex. Marc)" />
                    </div>
                    
                    <div>
                        <div><label>Correo:</label></div>
                        <ErrorMessage name="correo" component="span"/>
                        <Field 
                        autoComplete="off"
                        type="email"
                        id="inputLogin" 
                        name="correo" 
                        placeholder="Tu correo" />
                    </div>
                    
                    <div>
                        <div> <label>Telefono:</label></div>
                        <ErrorMessage name="Telefono" component="span"/>
                        <Field 
                        autoComplete="off"
                        type="phone"
                        id="inputLogin" 
                        name="Telefono" 
                        placeholder="Tu telefono" />
                    </div>
                    
                   
                    
                    <button type="submit" onClick={onSubmit}>Register</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginMiReserva;
