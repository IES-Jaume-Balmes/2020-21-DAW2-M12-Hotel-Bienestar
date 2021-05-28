import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useHistory} from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';


function CreateHabitacion(){
    let history = useHistory();
    
    const initialValues ={
        nombre: "",
        numHabitacion: "",
        numCamas: "",
        Baño: "",
        PrecioBase: "",
        Estado: "",
        Descripcion: "",
    };

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('Tienes que poner un nombre!'),
        numHabitacion: Yup.string().required('Tienes que poner el numero de habitaciones!'),
        numCamas: Yup.string().required('Tienes que poner el numero de camas!'),
        Baño: Yup.string().required('Tienes que poner el numero de baños!'),
        PrecioBase: Yup.string().required('Tienes que poner el precio base!'),
        Estado: Yup.string().required('Tienes que poner el estado de habitacion!'),
        Descripcion: Yup.string().required('Tienes que poner una descripcion de la habitacion!'),

    });

    const onSubmit = (data) =>{
        axios.post("http://localhost:3001/habitaciones", data).then(()=>{
            console.log(data);
            history.push("/");
        });
    };
    const back = ()=>{
        history.push("/HomeEmpleados");
    };
    
    return (
        <div className="card">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form>
                    <label>Nombre de la Habitación:</label>
                    <ErrorMessage name="nombre" component="span"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost" 
                        name="nombre" 
                        placeholder="(Ex. Habitacion Real...)" />
                    <label>Numero de la Habitación:</label>
                    <ErrorMessage name="numHabitacion" component="span"/>
                    <Field 
                        autoComplete="off" 
                        name="numHabitacion" 
                        placeholder="Ex.110" />
                    <label>Numero de Camas:</label>
                    <ErrorMessage name="numCamas" component="span"/>
                    <Field 
                        autoComplete="off" 
                        name="numCamas" 
                        placeholder="Ex.1,2,3.." />    
                    <label>Numero de baños:</label>
                    <ErrorMessage name="Baño" component="span"/>
                    <Field 
                        autoComplete="off" 
                        name="Baño" 
                        placeholder="Ex.1,2..." />
                    <label>Precio de la Habitación:</label>
                    <ErrorMessage name="PrecioBase" component="span"/>
                    <Field 
                        autoComplete="off"
                        name="PrecioBase" 
                        placeholder="Ex.150€" />
                    <label>Estado:</label>
                    <ErrorMessage name="Estado" component="span"/>
                    <Field 
                        autoComplete="off"
                        name="Estado" 
                        placeholder="Ex.Disponible/No Disponible" />
                    <label>Descripción:</label>
                    <ErrorMessage name="Descripcion" component="span"/>
                    <Field 
                        autoComplete="off"
                        name="Descripcion" 
                        placeholder="Ex.Esta habi..." />
                    <button type="submit">Agregar Habitación</button>
                </Form>
            </Formik>
            <div><button onClick={back}>Fuck Go Back</button></div>
        </div>
    )
}



export default CreateHabitacion;