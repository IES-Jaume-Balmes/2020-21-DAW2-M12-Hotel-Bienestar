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
        desc: "Relajate y disfruta de las mejores piscinas climatizadas con tus seres queridos."
    },
    {
        id: 2,
        title: 'HABITACIONES',
        img: img2,
        desc: "Descansa en nuestras habitaciones totalmente equipadas para que pases el tiempo que quieras "
    },
    {
        id: 3,
        title: 'RINCONES',
        img: img3,
        desc: "Cada una de nuestras salas es un rincon unico para disfrutar."
    },
]
const Cards = (props) => {

    return (
        <div >
            <div className = "row w-100">
                {
                    cards.map(card =>(
                        <div className = "col p-0" key = {card.id}>
                            <Card title = {card.title} img = {card.img} desc={card.desc}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
