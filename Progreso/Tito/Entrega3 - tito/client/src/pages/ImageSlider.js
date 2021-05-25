import React ,{useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { makeStyles } from '@material-ui/core';

const ImageSlider = ({slides}) => {
    const classes = useStyle()
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    return (
        <section className = {classes.slider}>
            <FaArrowAltCircleLeft className= {classes.leftArrow} onClick = {prevSlide}/>
            <FaArrowAltCircleRight className= {classes.rigthArrow} onClick = {nextSlide}/>
        {SliderData.map((slide, index) => {
            return (
                <div className = {index === current ? classes.slideActive : classes.slide} key = {index}>
                    {index === current && (<img src= {slide.image} alt = 'travel image' className = {classes.image} />)}
                </div>
            )
        })}
        </section>
    )
};

const useStyle = makeStyles((theme) => ({
    slider: {
        position: "relative",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      image: {
        width: "1300px",
        height: "500px",
        borderRadius: "10px",
      },
      rigthArrow: {
        position: "absolute",
        top: "50%",
        right: "120px",
        fontsize: "3rem",
        color: "#000",
        zIndex: "10",
        cursor: "pointer",
        userSelect: "none",
      },
      leftArrow: {
        position: "absolute",
        top: "50%",
        left: "120px",
        fontsize: "3rem",
        color: "#000",
        zIndex: "10",
        cursor: "pointer",
        userSelect: "none",
      },
      slide: {
        opacity: "0",
        transitionDuration: "1s ease",
      },
      slideActive: {  
        opacity: "1",
        transitionDuration: "1s",
        transform: "scale(1.08)",
      },
}))

export default ImageSlider
