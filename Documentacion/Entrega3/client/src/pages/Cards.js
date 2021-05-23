import React from 'react'
import Card from './Card'

import img1 from '../img/piscina.jpg'
import img2 from '../img/habitacionCard.jpg'
import img3 from '../img/card3.jpg'

const cards = [
    {
        id: 1,
        title: 'PISCINA',
        img: img1,
        desc: "Hola que tal"
    },
    {
        id: 2,
        title: 'HABITACIONES',
        img: img2
    },
    {
        id: 3,
        title: 'RINCONES',
        img: img3
    },
]
const Cards = (props) => {

    return (
        <div className = "container1 d-flex justify-content-center align-items-center h-100">
            <div className = "row">
                {
                    cards.map(card =>(
                        <div className = "col-md-4" key = {card.id}>
                            <Card title = {card.title} img = {card.img}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
