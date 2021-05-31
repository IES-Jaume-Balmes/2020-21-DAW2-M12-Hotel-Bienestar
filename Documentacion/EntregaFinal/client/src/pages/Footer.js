import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import BookIcon from '@material-ui/icons/Book';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
function Footer() {

    return (

            <div className=" bg-dark footer">
                <div className="row">

                    <div className="col">
                        <h4>DONDE ESTAMOS <LocationOnIcon/></h4>
                        <h6 className="list-unstyled">
                            <li>Barcelona 08031</li>
                            <li>ESP</li>
                            <li>Calle falsa 123</li>
                        </h6>
                    </div>

                    <div className="col">
                        <h4>CONTACTO <EmailIcon/></h4>
                        <h6 className="list-unstyled">
                            <li>Tel.: +34 934 123 789</li>
                            <li>Fax.: +34 934 123 789</li>
                            <li>hotelbienestar@hotmail.com</li>
                        </h6>
                    </div>

                    <div className="col">
                        <h4>REDES SOCIALES</h4>
                        <h6 className="list-unstyled">
                            <li>FACEBOOK <FacebookIcon/> </li>
                            <li>INSTAGRAM <InstagramIcon/></li>
                            <li>BLOG <BookIcon/></li>
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