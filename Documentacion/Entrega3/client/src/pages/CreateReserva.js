import React,{useState} from 'react';
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import Home from './Home';
import Cookies from 'universal-cookie';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import { date, object } from 'yup/lib/locale';

function CreateReserva(){
    let history = useHistory("");
    const [adults, setAdults] = useState("");
    const [children, setChildren] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const initialValues ={
        adults: "",
        children: "",
        checkIn: "",
        chekcOut: "",
    };

    const validationSchema = Yup.object().shape({//mirar yup int
        adults: Yup.string().min(1).max(5).required('You must input a number of adults!'),
        children: Yup.string().max(4).required('You must input a number of childreen!'),
        checkIn: Yup.date().required('You must input a checkIn!'),
        checkOut: Yup.date().required('You must input a checkOut!'),
    });


    const onSubmit = (data) =>{
        const cookies = new Cookies();
        cookies.set('adults',data.adults,{path:'/'});
        cookies.set('children',data.children,{path:'/'});
        cookies.set('checkIn',data.checkIn,{path:'/'});
        cookies.set('checkOut',data.checkOut,{path:'/'});
        history.push("./home");
    }
    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form className="formContainer">
                    <label>Numero D'adults:</label>
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
                    <button type="submit">Hacer Reserva</button>
                </Form>
            </Formik>
            

        </div>
    );
}


export default CreateReserva;