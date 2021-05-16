import React from 'react'
import Slider from "react-slick";
import habitacion1 from "../img/habitacion1.jpg";
import habitacion2 from "../img/habitacion2.jpg";
import habitacion3 from "../img/habitacion3.jpg";
import habitacion4 from "../img/habitacion4.jpg";
import habitacion5 from "../img/habitacion5.jpg";
import habitacion7 from "../img/habitacion7.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [habitacion1,habitacion2,habitacion3,habitacion4,habitacion5,habitacion7];

function MySlider() {
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
    
      return (
        <div className="App">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      );
}

export default MySlider;
