import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import background_image from "../img/banner.jpg"
import {Link} from "react-router-dom"
import Banner from './Banner'

const Inicio = () => {
    const classes = useStyle()
    return (
        <>
        <div className = {classes.root}>
            
        </div>
        
        <div className = {classes.banner}>
            <Banner/>
        </div>
        </>
    )
}

const useStyle = makeStyles((theme) => ({
    banner: {
        height: "75vh",
        width: "100%",
        position: "relative",
        backgroundImage: `url(${background_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    root: {
        width: "100%",
        position: "fixed",
        top: "14.5vh",
        left: "40vw",
        zIndex: "50",
        [theme.breakpoints.down("sm")]: {
            top: "22vh",
            left: 0,
        }
    },
}))


export default Inicio
