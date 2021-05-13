import { Chip, makeStyles, Slider, Typography } from '@material-ui/core';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import React, { useState } from 'react';
import mockData, {chips} from "../mockData";
import Results from './Results';
import {useSelector} from "react-redux";
import {selectStart} from "../features/startSlice";
import {selectEnd} from "../features/endSlice";

const SearchPage = () => {
    const classes = useStyle()
    const [value, setValue] = useState(400)
    const start = useSelector(selectStart)
    const end = useSelector(selectEnd)

    const handleChange = (newValue) => {
        setValue(newValue);
     }
    return (
        <div className = {classes.root}>
            <Typography variant = "h5" gutterBottom>
                Habitaciones disponibles
            </Typography>
            <div className = {classes.chips}>
                {
                    chips.map(({key, label}) => {
                        let icon = <HighlightOffTwoToneIcon/>
                        return(
                            <Chip label = {label}
                            key = {key}
                            icon = {icon}
                            className = {classes.chip}/>
                        )
                    })
                }
            </div>
            <div className = {classes.selector}>
                <Typography gutterBottom>Precios</Typography>
                    <Slider value={value} 
                    onChange={handleChange}
                    aria-labelledby="continuous-slider" 
                     min = {100}
                     max = {400}
                     valueLabelDisplay = "auto"
                     color = "secondary"
                     />
            </div>
            {
                mockData
                .filter((data) => data.cat === "room")
                .filter((data) => data.price < value)
                .filter((data) => end < data.notAvailablestart || start > data.notAvailableend)
                .map(({src, title, price, stock}, index) => (
                    <Results title = {title}
                            key = {index} 
                            src = {src}
                            price = {price}
                            stock = {stock}
                    />
                ))
            }
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        
    },
    chips: {
        padding: theme.spacing(1),

    },
    chip: {
        margin: theme.spacing(1),
    },
    selector: {
        width: "300px",
        marginLeft: theme.spacing(3),
    }
}))

export default SearchPage
