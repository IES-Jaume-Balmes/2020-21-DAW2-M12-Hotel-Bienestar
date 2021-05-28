import React, {useState} from 'react';
import '../App.css';
import CloseIcon from '@material-ui/icons/Close'
import Img1 from '../img/galeria1.jpg';
import Img2 from '../img/galeria2.jpg';
import Img3 from '../img/galeria3.jpg';
import Img4 from '../img/galeria4.jpg';
import Img5 from '../img/galeria5.jpg';
import Img6 from '../img/galeria6.jpg';
import Img7 from '../img/galeria7.jpg';
import Img8 from '../img/galeria8.jpg';

const Galeria = () => {

    let data = [
        {
            id: 1,
            src: Img1,
        },
        {
            id: 2,
            src: Img2,
        },
        {
            id: 3,
            src: Img3,
        },
        {
            id: 4,
            src: Img4,
        },
        {
            id: 5,
            src: Img5,
        },
        {
            id: 6,
            src: Img6,
        },
        {
            id: 7,
            src: Img7,
        },
        {
            id: 8,
            src: Img8,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempsrc, setTempsrc] = useState('');
    const getImg = (src) => {
        setTempsrc(src);
        setModel(true);
    }

    return (
        <>

        <div className = {model ? "model open" : "model"}>
            <img src = {tempsrc} />
            <CloseIcon onClick = {() => setModel(false)} />
        </div>

        <div className = "gallery">
            {data.map((item, index) =>{
                return (
                    <div className = "pics" key = {index} onClick = {() => getImg(item.src)}>
                        <img src = {item.src} style = {{width: '100%'}} />
                    </div>
                )
            })}

        </div>

        </>
    )
}


export default Galeria