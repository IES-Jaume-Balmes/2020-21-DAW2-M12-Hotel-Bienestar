import React,{useState} from 'react';
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import Cookies from 'universal-cookie';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";

function CreateUsuari() {
    const cookies = new Cookies();
    let {id} = useParams();
    let history = useHistory();


    const initialValues ={
        name: "",
        apellidos: "",
        dniCliente: "",
        email: "",
       phone: "",
       titularTarjeta: "",
       numTarjeta: "",
       fechaExpTarjeta: "",
       pais:""
    };

    const validationSchema = Yup.object().shape({//mirar yup int
        name: Yup.string().required('Selecciona una fecha de entrada'),
        apellidos: Yup.string().required('Selecciona una fecha de entrada'),
        dniCliente: Yup.string().required('Selecciona una fecha de entrada'),
        email: Yup.string().required('Selecciona una fecha de entrada'),
        phone: Yup.string().required('Selecciona una fecha de entrada'),
        titularTarjeta: Yup.string().required('Selecciona una fecha de entrada'),
        numTarjeta: Yup.string().required('Selecciona una fecha de entrada'),
        fechaExpTarjeta: Yup.date().required('Selecciona una fecha de entrada'),
        pais: Yup.string().required('Selecciona una fecha de entrada'),
    });
    
    
    const onSubmit = (data) =>{
        data.ReservaId=cookies.get('IdReserva');
        //json.push({'ReservaId':cookies.get('IdReserva')});
        console.log(data)
        
        axios.post(`http://localhost:3001/clientes`,data).then(()=>{
            history.push("/");
        });
        
    };
    
    
    return (
        

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            <Form className="border border-dark">
            <div className="card">
                
                <div className="card-header"><h4 className="text-center m-auto">Datos</h4></div>
                <div className="card-body">
                    <label>Nombre</label>
                    <Field 
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            name="name" 
                            placeholder="Nombre"
                          
                           
                        />
                        <ErrorMessage name="Nombre" component="span"/>
                                <label>Apellido</label>
                                <Field 
                            autoComplete="off"
                            type="text"
                            
                            name="apellidos" 
                            className="form-control"
                            placeholder="Primer Apellido"
                         
                        />
                        <ErrorMessage name="firstname" component="span"/>
                    <label>DNI</label>

                    <Field 
                            autoComplete="off"
                            type="text"
                            
                            name="dniCliente" 
                            placeholder="(Ex.123456789R)"
                            className="form-control " 
             
                            
                        />
                         <ErrorMessage name="dni" component="span"/>
                        <label>Correo</label>
                        <Field 
                            autoComplete="off"
                             
                            name="email" 
                            placeholder="Email"
                            className="form-control " 
           
                            
                        />
                         <ErrorMessage name="email" component="span"/>
                        <label>Telefono</label>
                        <Field 
                            autoComplete="off"
                            
                            name="phone" 
                            placeholder="(Ex.666 555 777)"
                            className="form-control"
               
                            
                        />
                         <ErrorMessage name="phone" component="span"/>
                        <label>Pais</label>
                        <Field  
                        name="pais"
                        className="form-control"/>
                         <ErrorMessage name="pais" component="span"/>
                    
                    <div><h2>Datos de pago</h2></div>

                    <div className="formConatinerBlock">
                        <div><label>Titular de la Tarjeta:</label></div>
                        <Field 
                            autoComplete="off"
                            type="text"
                            
                            name="titularTarjeta" 
                            placeholder="(Ex.Marc Jorge)"
                            className="form-control"
                          
                        />
                        <ErrorMessage name="titularTarjeta" component="span"/>
                    </div>

                    <div className="formConatinerBlock">
                        <div><label>Numero Tarjeta:</label></div>
                        <Field 
                            autoComplete="off"
                            type="text"
                             
                            name="numTarjeta" 
                            placeholder="(Ex.1234567891213)"
                            className="form-control"
                          
                        />
                        <ErrorMessage name="numTarjeta" component="span"/>
                    </div>

                    <div className="formConatinerBlock">
                        <div><label>Fecha de cadudciad:</label></div>
                        <Field 
                            autoComplete="off"
                            
                            name="fechaExpTarjeta" 
                            placeholder="(Ex.0-5...)"
                            type="date"
                            className="form-control"
                            
                        />

                        <ErrorMessage name="fechaExpTarjeta" component="span"/>
                    </div>
                    
                    <button type="submit" >Hacer Reserva</button>
               
                </div>
                
            </div> 
            </Form> 
        </Formik>
    );
}

export default CreateUsuari;