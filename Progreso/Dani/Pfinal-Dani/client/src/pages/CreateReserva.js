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
            <div className="card">
                <Form>
                <div className="card-header"><h4 className="text-center m-auto">Reserve Online</h4></div>
                <div className="card-body ">

                <div className="row">
                <div className="col">
                <label>Llegada</label><br/>
                    <Field 
                        autoComplete="off"
                        type="date"
                        id="inputCreatePost" 
                        name="checkIn" 
                       
                    /><br/>
                    <ErrorMessage name="checkIn" component="span"/>
                </div>
                
                <div className="col">
                <label>Salida</label><br/>
                    <Field 
                        autoComplete="off"
                        type="date"
                        id="inputCreatePost" 
                        name="checkOut" 
                    /><br/>
                    <ErrorMessage className="" name="checkOut" component="span"/>
                    </div>
                </div>
                    

                    <label>Numero D'adults:</label>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="adults" 
                        placeholder="(Ex.1-5...)"
                    />
                    <ErrorMessage name="adults" component="span"/>

                    <label>Numero de nens:</label>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="children" 
                        placeholder="(Ex.0-5...)"
                    />
                    <ErrorMessage name="children" component="span"/>

                    <button type="submit">Hacer Reserva</button>
                    </div>
                </Form>
                </div>
            </Formik>
            

        </div>
    );
}


export default CreateReserva;