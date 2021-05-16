import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import { date, object } from 'yup/lib/locale';


function CreatePost() {
    let {id} = useParams();
    let history = useHistory();

    const initialValues ={
        name: "",
        email: "",
        phone: "",
        adults: "",
        children: "",
        checkIn: "",
        chekcOut: "",
    };

    const validationSchema = Yup.object().shape({//els numeros no poden ser 0
        name: Yup.string("No introduzcas numeros ni caracteres especiales").required('Debes introducir un nombre!'),
        email: Yup.string("El correo introducido no es correcto").required('Introduce tu correo electronico!'),
        phone: Yup.number("El numero es incorrecto!").required('Introduce un numero de telefono!'),
        adults: Yup.number().positive().min(1,"Tiene que haber almenos 1 persona bobo").max(5,"Máximo 5 adultos").integer().required('Introduce el numero de adultos!'),
        children: Yup.number().integer().min(0,"El numero no puede ser negativo!").max(5,"Máximo 5 niños").required('Introduce el numero de niños!'),
        checkIn: Yup.date().required('Debes introducir una fecha de Entrada'),
        checkOut: Yup.date().required('Debes introducir una fecha de Salida'),
    });

    const onSubmit = (data) =>{
        axios.post(`http://localhost:3001/reserva`, data).then((response)=>{
            axios.post(`http://localhost:3001/clientes`, data).then((response)=>{
                history.push("/");
            });
        });
    };
    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form className="formContainer">
                    <div className="formConatinerBlock"><div><label>Check In:</label></div>
                        <ErrorMessage name="checkIn" component="span"/>
                        <Field 
                            autoComplete="off"
                            type="date"
                            id="inputCreatePost" 
                            name="checkIn" 
                        />
                    </div>
                    <div className="formConatinerBlock">
                        <div>
                            <label>Check Out:</label>
                        </div>
                        <ErrorMessage name="checkOut" component="span"/>
                        <Field 
                            autoComplete="off"
                            type="date"
                            id="inputCreatePost" 
                            name="checkOut" 
                        />
                    </div>
                    <div className="formConatinerBlock">
                        <div><label>Numero d'adults:</label></div>
                        <ErrorMessage name="adults" component="span"/>
                        <Field 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="adults" 
                            placeholder="(Ex.1-5...)"
                        />
                    </div>
                    
                    <div className="formConatinerBlock">
                        <div><label>Numero de nens:</label></div>
                        <ErrorMessage name="children" component="span"/>
                        <Field 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="children" 
                            placeholder="(Ex.0-5...)"
                        />
                    </div>
                    
                    <div className="formConatinerBlock">
                        <div><label>Nombre:</label></div>
                        <ErrorMessage name="name" component="span"/>
                        <Field 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="name" 
                            placeholder="(Ex. Johnn...)" 
                        />
                    </div>
                    
                    <div className="formConatinerBlock">
                        <div><label>Email Addres:</label></div>
                        <ErrorMessage name="email" component="span"/>
                        <Field 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="email" 
                            placeholder="(Ex. Name@gmail.com...)" 
                        />
                    </div>
                
                    <div className="formConatinerBlock">
                        <div><label>Telefon Movil:</label></div>
                        <ErrorMessage name="phone" component="span"/>
                        <Field 
                            autoComplete="off"
                            type="phone"
                            id="inputCreatePost" 
                            name="phone" 
                            placeholder="(Ex. 123456789...)" 
                        />
                    </div>
                    
                    
                    
                    
                    <button type="submit">Hacer Reserva</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;