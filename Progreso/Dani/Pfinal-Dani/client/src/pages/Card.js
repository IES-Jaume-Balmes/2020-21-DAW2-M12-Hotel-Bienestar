import React from 'react'


const Card = ({title, img}) => {
    return (
        <div className = "card text-center bg-dark">
            <div className = "overflow">
                <img src = {img} alt = "" className = "card-img-top"/>  
            </div>
            <div className = "card-body text-light">
                <h4 className = "card-title">{title}</h4>
                <p className = "card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
    )
}

export default Card
