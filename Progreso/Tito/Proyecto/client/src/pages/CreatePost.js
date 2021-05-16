import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { date, object } from 'yup/lib/locale';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

function CreatePost() {
    let history = useHistory();

    const initialValues ={
        name: "",
        email: "",
        phone: "",
        adults: "",
        children: "",
        checkIn: "",
        checkOut: "",
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
        axios.post("http://localhost:3001/reserva", data).then((response)=>{
            console.log(data);
            history.push("/");
        });
    };
    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form className="formContainer ">
                    <label>Please Enter Your Name:</label>
                    <ErrorMessage name="name" component="span"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="name" 
                        placeholder="(Ex. Johnn...)" />
                    <label>Email Addres:</label>
                    <ErrorMessage name="email" component="span"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="email" 
                        placeholder="(Ex. Name@gmail.com...)" />
                    <label>Telefon Movil:</label>
                    <ErrorMessage name="phone" component="span"/>
                    <Field 
                        autoComplete="off"
                        type="phone"
                        id="inputCreatePost" 
                        name="phone" 
                        placeholder="(Ex. 123456789...)" />
                    <label>Numero d'adults:</label>
                    <ErrorMessage name="adults" component="span"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="adults" 
                        placeholder="(Ex.1-5...)"
                    />
                    <label>Numero de nens:</label>
                    <ErrorMessage name="children" component="span"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="children" 
                        placeholder="(Ex.0-5...)"
                    />
                    <label>Check In:</label>
                    <ErrorMessage name="checkIn" component="span"/>
                    <Field 
                        autoComplete="off"
                        type="date"
                        id="inputCreatePost" 
                        name="checkIn" 
                    />
                    <label>Check Out:</label>
                    <ErrorMessage name="checkOut" component="span"/>
                    <Field 
                        autoComplete="off"
                        type="date"
                        id="inputCreatePost" 
                        name="checkOut" 
                    />
                
                    <button type="submit">Reservar! <EventAvailableIcon/></button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;