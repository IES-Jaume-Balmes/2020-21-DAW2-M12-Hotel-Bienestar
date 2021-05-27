import React,{useState} from 'react';
import EmailIcon from '@material-ui/icons/Email';
import {useHistory,useParams} from "react-router-dom";

import Cookies from 'universal-cookie';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

function CreateReserva(){
    let history = useHistory("");

    const initialValues ={
        adults: "",
        children: "",
        checkIn: "",
        chekcOut: "",
    };

    const validationSchema = Yup.object().shape({//mirar yup int
        adults: Yup.string().min(1).max(5).required('Este campo de obligatorio!'),
        children: Yup.string().max(4),
        checkIn: Yup.date().required('Selecciona una fecha de entrada'),
        checkOut: Yup.date().required('Selecciona una fecha de salida'),
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
            <div className="card ">
                <Form className="border border-dark">
                <div className="card-header"><h4 className="text-center m-auto">Reserve Online</h4></div>
                <div className="card-body ">

                <div className="row">
                <div className="col">
                <label>Llegada</label>
                    <Field 
                        autoComplete="off"
                        type="date"
                        id="inputCreatePost" 
                        name="checkIn" 
                       className="form-control required"
                       
                    />
                    <ErrorMessage name="checkIn" component="span"/><br/>
                </div>
                
                <div className="col">
                <label>Salida</label>
                    <Field 
                        autoComplete="off"
                        type="date"
                        id="inputCreatePost" 
                        name="checkOut" 
                        className="form-control"
                    />
                    <ErrorMessage className="" name="checkOut" component="span"/><br/>
                    </div>
                </div>
                    

                    <label>Numero D'adults:</label>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="adults" 
                        placeholder="(Ex.1-5...)"
                        className="form-control required"
                        required
                    />
                    <ErrorMessage name="adults" component="span"/><br/>

                    <label>Numero de nens:</label>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="children" 
                        placeholder="(Ex.0-5...)"
                        className="form-control"
                    />
                    <ErrorMessage name="children" component="span"/><br/>

                    <button type="submit" class="btn bg-dark text-white"> Reservar <EventAvailableIcon/></button>
                    </div>
                </Form>
                </div>
            </Formik>
            <div className="border-dark contacto card">
            <div className="card-header"><h4 className="text-center m-auto">Contacta con nosotros <EmailIcon/></h4></div>
            <div className="card-body"><div className="col">
                       
                        <h6 className="list-unstyled">
                            <li>Tel.: +34 934 123 789</li>
                            <li>Fax.: +34 934 123 789</li>
                            <li>hotelbienestar@hotmail.com</li>
                        </h6>
                    </div></div>
            </div>

        </div>
    );
}


export default CreateReserva;