import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const Results = ({src, title, price, stock}) => {
    const classes = useStyle()
    return (
        <Paper className = {classes.root}>
            <div className = {classes.left}>
                <img src = {src} className = {classes.image} alt = {title}/>
            </div>
            <div className = {classes.right}>
                <Typography variant = "h4">{title}</Typography>
                <Typography variant = "h6">Precio por noche {" "}
                <span className = {classes.number}>{price}€</span></Typography>
                <Typography variant = "h6">Habitaciones en stock
                <span className = {classes.number}>{stock}</span></Typography>
            </div>
        </Paper>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "flexStart",
        margin: theme.spacing(1),
    },
    left: {
        margin: theme.spacing(2,5,5,5)    
    },
    image: {
        maxWidth: "400px",
        height: "auto",
        borderRadius: "10px",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "300px"
        }
    },
    number: {
        fontWeight: "1000",
        marginLeft: theme.spacing(2),
        fontsize: "1.1rem",
    }
}))

export default Results
