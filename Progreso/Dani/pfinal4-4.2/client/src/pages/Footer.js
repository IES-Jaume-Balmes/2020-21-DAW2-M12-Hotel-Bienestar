import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    const classes = useStyle()
    return (
        <div className = {classes.root}>
            <Typography variant = "subtitle1" gutterBottom>
                2021 Copyright by @HotelBienestar
            </Typography>
            <Typography variant = "subtitle1" gutterBottom>
                Privacy . Terms . Sitemap . Instagram . Facebook
            </Typography>
            
        </div>
    )
}
const useStyle = makeStyles((theme) => ({
    root: {
        borderTop: "1px solid #ccc",
        textAlign: "center",
        fontStyle: "italic",
        marginTop: theme.spacing(2),
        background: "#f8d5cbf7",
        width: "100%",
        bottom: "0",
        backgroundColor: "black",
        color: "white",
    }
}))
export default Footer
