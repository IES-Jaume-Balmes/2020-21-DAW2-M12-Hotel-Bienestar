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
            history.push("/HabitacionesEmpleados");
        });
    };
    const back = ()=>{
        history.push("/HomeEmpleados");
    };
    
    return (
        <div className="card">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form className="border border-dark">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="text-center m-auto">Crear una Habitacion</h4>
                        </div>

                        <div className="card-body">
                            <div>
                                <label>Nombre de la Habitación:</label>
                                
                                <Field 
                                    autoComplete="off"
                                    name="nombre" 
                                    placeholder="(Ex. Habitacion Real...)" />
                                <ErrorMessage name="nombre" component="span"/>
                            </div>
                            <div>
                                <label>Numero de la Habitación:</label>
                                <Field 
                                    autoComplete="off" 
                                    name="numHabitacion" 
                                    placeholder="Ex.110" />                              
                                <ErrorMessage name="numHabitacion" component="span"/>
                            </div>
                            <div>
                                <label>Numero de Camas:</label>
                                <Field 
                                    autoComplete="off" 
                                    name="numCamas" 
                                    placeholder="Ex.1,2,3.." />
                                <ErrorMessage name="numCamas" component="span"/>
                            </div>
                            <div>
                                <label>Numero de baños:</label>
                                <Field 
                                    autoComplete="off" 
                                    name="Baño" 
                                    placeholder="Ex.1,2..." />
                                <ErrorMessage name="Baño" component="span"/>
                            </div>
                            <div>
                                <label>Precio de la Habitación:</label>
                                <Field 
                                    autoComplete="off"
                                    name="PrecioBase" 
                                    placeholder="Ex.150€" />
                                <ErrorMessage name="PrecioBase" component="span"/>
                            </div>
                            <div>
                                <label>Estado:</label>
                                <Field 
                                    autoComplete="off"
                                    name="Estado" 
                                    placeholder="Ex.Disponible/No Disponible" />
                                <ErrorMessage name="Estado" component="span"/>
                            </div>  
                            <div>
                                <label>Descripción:</label>
                                <Field 
                                    autoComplete="off"
                                    name="Descripcion" 
                                    placeholder="Ex.Esta habi..." />
                                <ErrorMessage name="Descripcion" component="span"/>
                            </div>
                            <div>
                                <button type="submit"  class="btn bg-primary text-white">Agregar Habitación</button>

                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
            <div><button type="button" class="btn bg-dark btn-lg text-white" onClick={back}>Atras</button></div>
        </div>
    )
}



export default CreateHabitacion;