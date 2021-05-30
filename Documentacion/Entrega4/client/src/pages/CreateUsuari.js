import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreateUsuari() {
  const cookies = new Cookies();
  let { id } = useParams();
  let history = useHistory();

  const initialValues = {
    name: "",
    apellidos: "",
    dniCliente: "",
    email: "",
    phone: "",
    titularTarjeta: "",
    numTarjeta: "",
    fechaExpTarjeta: "",
    pais: "",
  };

  //Validaciones con expresiones regulares
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("No dejes este campo vacio")
      .matches(/[a-zA-Z]/, {
        message: "Introduce un nombre válido!",
      }),
    apellidos: Yup.string().required("No dejes este campo vacio"),
    dniCliente: Yup.string()
      .required("No dejes este campo vacio")
      .matches(/[0-9]{8}[A-Z]/, "El formato del DNI es incorrecto"),
    email: Yup.string()
      .required("Selecciona una fecha de entrada")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
        message: "Introduce una direccion de correo válida",
      }),
    phone: Yup.string()
      .required("No dejes este campo vacio")
      .matches(/^[0-9]{9}$/, "Revisa este campo!"),
    titularTarjeta: Yup.string()
      .required("No dejes este campo vacio")
      .matches(/[a-zA-Z]/, {
        message: "Revisa este campo!",
      }),
    numTarjeta: Yup.string()
      .required("No dejes este campo vacio")
      .matches(/^[0-9]{10}$/, "El numero de tarjeta no es correcto "),
    fechaExpTarjeta: Yup.string().required("No dejes este campo vacio").matches(/[0-9]{2}\/[0-9]{2}/,"El formato debe ser MM/AA"),
    pais: Yup.string().required("Selecciona un pais"),
  });

  const onSubmit = (data) => {
    data.ReservaId = cookies.get("IdReserva");

    axios.post(`http://localhost:3001/clientes`, data).then(() => {
      history.push("/");
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="border m-5  row">
        <div className="card border-dark  p-3 col-sm">
          <div className="card-header">
            <h4 className="text-center m-auto">Datos Cliente</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <label>Nombre</label>
                <Field
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Nombre"
                />
                <ErrorMessage name="name" component="span" />
              </div>
              <div className="col">
                <label>Apellido</label>
                <Field
                  autoComplete="off"
                  type="text"
                  name="apellidos"
                  className="form-control"
                  placeholder="Primer Apellido"
                />
                <ErrorMessage name="apellidos" component="span" />
                <br />
              </div>
            </div>

            <label>DNI</label>

            <Field
              autoComplete="off"
              type="text"
              name="dniCliente"
              placeholder="(Ex.123456789R)"
              className="form-control "
            />
            <ErrorMessage name="dniCliente" component="span" /><br/>
            <label>Correo</label>
            <Field
              autoComplete="off"
              name="email"
              placeholder="Email"
              className="form-control "
            />
            <ErrorMessage name="email" component="span" /><br/>
            <div className="row">
              <div className="col">
                <label>Telefono</label>
                <Field
                  autoComplete="off"
                  name="phone"
                  placeholder="(Ex.666 555 777)"
                  className="form-control"
                />
                <ErrorMessage name="phone" component="span" />
              </div>
              <div className="col">
                <label>Pais</label>
                <Field name="pais" className="form-control" />
                <ErrorMessage name="pais" component="span" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-dark h-50 p-3 card col-sm">
          <div className="card-header">
            <h4 className="text-center m-auto">Pago</h4>
          </div>
          <div className="body">
            <div>
              <label>Titular de la Tarjeta:</label>
            </div>
            <Field
              autoComplete="off"
              type="text"
              name="titularTarjeta"
              placeholder="Titular de la Tarjeta"
              className="form-control"
            />
            <ErrorMessage name="titularTarjeta" component="span" /><br/>

            <div className="row">
              
              <div className="col">
              <label>Numero Tarjeta:</label>
                <Field
                  autoComplete="off"
                  type="text"
                  name="numTarjeta"
                  placeholder="(Ex.1234567891213)"
                  className="form-control"
                />
                <ErrorMessage name="numTarjeta" component="span" /><br/>
              </div>
              <div className="col">
                <label>Fecha de cadudciad:</label>

                <Field
                  autoComplete="off"
                  name="fechaExpTarjeta"
                  placeholder="MM/AA"
                  type="text"
                  className="form-control"
                />

                <ErrorMessage name="fechaExpTarjeta" component="span" /><br/>
              </div>
            </div>

            <button type="submit" class="btn boton bg-dark text-white">
              Reservar
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default CreateUsuari;
