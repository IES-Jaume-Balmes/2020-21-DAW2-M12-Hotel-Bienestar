import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import background_image from "../img/banner.jpg"

const Banner = () => {
    const classes = useStyle()
    return (
        <div className = {classes.root}>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        height: "75vh",
        width: "100%",
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
