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
                Privacy . Terms . Sitemap
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
        background: "whitesmoke",
    }
}))
export default Footer
