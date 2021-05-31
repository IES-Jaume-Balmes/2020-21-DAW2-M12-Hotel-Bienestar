import { makeStyles } from "@material-ui/core";
import React from "react";
//import background_image from "../img/banner.jpg"
//import Banner from './Banner'
import Cards from "./Cards";
import Galeria from "./Galeria";
import "bootstrap/dist/css/bootstrap.min.css";

const Inicio = () => {
  const classes = useStyle();

  return (
    <>
     
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
            <li data-target="#demo" data-slide-to="5"></li>
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../img/slider1.jpg"
                alt="Los Angeles"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>Piscinas</h3>
                <p>Piscinas climatizadas! WOW</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../img/slider2.jpg"
                alt="Chicago"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>Barmans especializados</h3>
                <p>Increibles cockteles!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../img/slider3.jpg"
                alt="New York"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>Descansa</h3>
                <p>Disfruta de nuestras estancias</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../img/slider4.jpg"
                alt="New York"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>Barcelona</h3>
                <p>Visitanos!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../img/slider5.jpg"
                alt="New York"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>Más Piscinas</h3>
                <p>Relajate en nuestras piscinas</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../img/slider6.jpg"
                alt="New York"
                width="1100"
                height="500"
              />
              <div className="carousel-caption">
                <h3>Dormitorios y desayunos</h3>
                <p>Comfortables camas y deliciosos desayunos!</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      

      <div>
        <h1 style={{ textAlign: "center" }}>MOMENTOS UNICOS</h1>
        <Cards />
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>GALERÍA</h1>
        <Galeria />
      </div>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  slider: {
    height: "90vh",
    width: "100%",
    position: "relative",
    //backgroundImage: `url(${background_image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

export default Inicio;
