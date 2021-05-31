import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import { useHistory, useParams } from "react-router-dom";

import Cookies from "universal-cookie";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
const current = new Date();

const date = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`;



function CreateReserva() {
  let history = useHistory("");

  const initialValues = {
    adults: "1",
    children: "0",
    checkIn: "",
    checkOut: "",
  };

  const validationSchema = Yup.object().shape({
    //mirar yup int
    adults: Yup.string(),
    children: Yup.string(),
    checkIn: Yup.date().required("Selecciona una fecha de entrada").min(date, `No puedes reservar para una fecha anterior a la actual!`),
    checkOut: Yup.date().required("Selecciona una fecha de salida").min(date, `la fecha seleccionada no puede ser anterior a la actual!`),
  });

  const onSubmit = (data) => {
    const cookies = new Cookies();
    cookies.set("adults", data.adults, { path: "/" });
    cookies.set("children", data.children, { path: "/" });
    cookies.set("checkIn", data.checkIn, { path: "/" });
    cookies.set("checkOut", data.checkOut, { path: "/" });
    history.push("./home");
  };
  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <div className="card ">
          <Form className="border border-dark">
            <div className="card-header">
              <h4 className="text-center m-auto">Reserve Online</h4>
            </div>
            <div className="card-body ">
              <div className="row">
                <div className="col">
                  <label>Llegada</label>
                  <Field
                

                    autoComplete="off"
                    type="date"

                    name="checkIn"
                    className="form-control"
                  />
                  <ErrorMessage name="checkIn" component="span" />
                  <br />
                </div>

                <div className="col">
                  <label>Salida</label>
                  <Field
                    autoComplete="off"
                    type="date"

                    name="checkOut"
                    className="form-control"
                  />
                  <ErrorMessage className="" name="checkOut" component="span" />
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="col">
                <label>Numero de adultos:</label>
              <Field
                as="select"
                autoComplete="off"
                id="inputCreatePost"
                name="adults"
                className="form-control required"
                required
              >
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
              <ErrorMessage name="adults" component="span" />
                </div>
                <div className="col"><label>Numero de niños:</label>
              <Field
                as="select"
                autoComplete="off"
                id="inputCreatePost"
                name="children"
                placeholder="(Ex.0-5...)"
                className="form-control"
              >
                <option selected value="0">
                  sin niños
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Field>
              <ErrorMessage name="children" component="span" /></div>
              </div>

              <button type="submit" class="btn bg-dark text-white col mt-3">
                {" "}
                continuar <EventAvailableIcon />
              </button>
            </div>
          </Form>
        </div>
      </Formik>
      <div className="border-dark contacto card">
        <div className="card-header">
          <h4 className="text-center m-auto">
            Contacta con nosotros <EmailIcon />
          </h4>
        </div>
        <div className="card-body">
          <div className="col">
            <h6 className="list-unstyled">
              <li>Tel.: +34 934 123 789</li>
              <li>Fax.: +34 934 123 789</li>
              <li>hotelbienestar@hotmail.com</li>
            </h6>
          </div>
        </div>
      </div>
      {()=>{
          document.getElementById('fecha').defaultValue = date;
      }}
    </div>
  );
}

export default CreateReserva;
