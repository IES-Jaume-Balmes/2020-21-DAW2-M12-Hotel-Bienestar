import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import background_image from "../imagenes/banner.jpg"
import {Link} from "react-router-dom"

const Banner = () => {
    const classes = useStyle()
    return (
        <div className = {classes.root}>
            <div className =  {classes.info}>
            <Typography variant = "h2">Planea tus vacaciones</Typography>
            <Link to = "/search">
                <Button variant = "contained">Mira nuestras habitaciones</Button>
            </Link>
            </div>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        height: "75vh",
        position: "relative",
        backgroundImage: `url(${background_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    info: {
        backgroundColor: "#000",
        color: "#fff",
        width: "350px",
        padding: theme.spacing(2),
        "& h2": {
            marginBottom: theme.spacing(4)
        },
        "& button": {
            backgroundColor: "rgba(255,103,31)",
            color: "#fff",
            textTransform: "inherit",
            fontsize: "1.2rem",
            fontWeight: "bold",
        },
        "& button:hover": {
            backgroundColor: "#fff",
            color: "rgba(255,103,31)",
        }
    }
}))


export default Banner
