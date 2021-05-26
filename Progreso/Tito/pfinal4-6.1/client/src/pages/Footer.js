import { makeStyles } from "@material-ui/core";
import React from "react";

function Footer() {

    return (

            <div className="footer">
                <div className="row">

                    <div className="col">
                        <h4>DONDE ESTAMOS</h4>
                        <h6 className="list-unstyled">
                            <li>Barcelona 08031</li>
                            <li>ESP</li>
                            <li>Calle falsa 123</li>
                        </h6>
                    </div>

                    <div className="col">
                        <h4>CONTACTO</h4>
                        <h6 className="list-unstyled">
                            <li>Tel.: +34 934 123 789</li>
                            <li>Fax.: +34 934 123 789</li>
                            <li>hotelbienestar@hotmail.com</li>
                        </h6>
                    </div>

                    <div className="col">
                        <h4>REDES SOCIALES</h4>
                        <h6 className="list-unstyled">
                            <li>FACEBOOK</li>
                            <li>INSTAGRAM</li>
                            <li>BLOG</li>
                        </h6>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} HOTEL BIENESTAR | Todos los derechos reservados | Terminos de Servicio | Privacidad
                    </p>
                </div>
            </div>
        
    );
}





export default Footer;