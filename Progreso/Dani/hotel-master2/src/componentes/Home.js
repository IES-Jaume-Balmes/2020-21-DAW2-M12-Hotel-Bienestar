import { Button, CssBaseline, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import mockData from "../mockData"
import Banner from './Banner'
import DatePicker from './DatePicker'
import RoomCard from './RoomCard'


const Home = () => {

    const classes = useStyle()
    const [showdates, setShowdates] = useState(false)
    return (
        <>
        <CssBaseline/>
        <div className = {classes.root}>
            <div className = {classes.dates}>
                <Button onClick = {() => setShowdates(!showdates)}>
                    {
                    showdates ? "Ocultar" : "Buscar Fechas"
                    }
                </Button>
                </div>
                {
                    showdates && <DatePicker/>
                }
                <Banner/>
                <Grid container className = {classes.section } spacing ={3}>
                    {
                        mockData.map(({src, title}, index) => (
                            <Grid item sm = "6" md = "4" lg = "4" >
                                <RoomCard src = {src} 
                                title = {title} 
                                key = {index}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(1),
    },
    dates: {
        display: "flex",
        flexDirection: "column",
        "& button": {
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            color: "rgba(255,103,31,0.4)",
            textTransform: "inherit",
            fontsize: "1.2rem",
            fontWeight: "bold",
        },
        "& button:hover": {
            backgroundColor: "rgba(255,103,31,0.4)",
            color: "#fff",
        }
    },
}))

export default Home
