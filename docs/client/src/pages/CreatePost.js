import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import axios from "axios";
import {useHistory} from "react-router-dom";


function CreatePost() {
    let history = useHistory();

    const initialValues ={
        name: "",
        email: "",
        phone: " ",
        adults: "",
        childreen: "",
        checkIn: "",
        chekcOut: "",
    };

    const validationSchema = Yup.object().shape({//mirar yup int
        name: Yup.string().required('You must input your name!'),
        email: Yup.string().required('You must input an email!'),
        phone: Yup.string().required('Phone number is not valid'),
        adults: Yup.string().min(1).max(5).required('You must input a number of adults!'),
        childreen: Yup.string().max(4).required('You must input a number of childreen!'),
        checkIn: Yup.date().required('You must input a checkIn!'),
        checkOut: Yup.date().required('You must input a checkOut!'),
    });

    const onSubmit = (data) =>{
        axios.post("http://localhost:3001/reserva", data).then((response)=>{
            history.push("/");
        });
    };
    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form className="formContainer">
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
                        name="phne" 
                        placeholder="(Ex. 123456789...)" />
                    <label>Numero D'adults:</label>
                    <ErrorMessage name="adults" component="span"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="adults" 
                        placeholder="(Ex.1-5...)"
                    />
                    <label>Numero de nens:</label>
                    <ErrorMessage name="childreen" component="span"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="childreen" 
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

export default CreatePost;