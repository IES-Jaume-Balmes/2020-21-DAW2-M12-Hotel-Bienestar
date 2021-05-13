import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'

const RoomCard = ({src, title}) =>  {
    const classes = useStyle()
    return (
        <div className = {classes.root}>
            <figure className = {classes.imageWrapper}>
                <img className = {classes.media} src = {src} alt = {title}/>
            </figure>
            <Typography variant = "h5" color = "textPrimary">{title}</Typography>
        </div>

    )
}
const useStyle = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4,0,2,0),
        [theme.breakpoints.down("sm")]: {
            "& h6": {
                wordWrap: "break-word", 
            }
        }
    },
    imageWrapper: {
        overflow: "hidden",

    },
    media: {
        height: "400px",
        width: "600px",
        objectFit: "cover",
        transform: "scale(1.1)",
        webkitTransform: "scale(1.1)",
        webkitTransition: ".4 ease-in-out",
        transition: ".4 ease-in-out",
        "&:hover": {
            transform: "scale(1)",
            webkitTransform: "scale(1)",
        }
    }
}))

export default RoomCard