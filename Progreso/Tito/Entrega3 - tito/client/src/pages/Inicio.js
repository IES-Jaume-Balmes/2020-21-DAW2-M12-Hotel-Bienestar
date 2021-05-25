import { makeStyles } from '@material-ui/core'
import React from 'react'
//import background_image from "../img/banner.jpg"
//import Banner from './Banner'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
    const classes = useStyle()

    return (
        <>
            <div className={classes.slider}>
                <ImageSlider slides={SliderData} />
            </div> 
            <div>
                <h4>MOMENTOS UNICOS</h4>
                <Cards />
            </div>        
        </>


    )
}

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
}))


export default Inicio
