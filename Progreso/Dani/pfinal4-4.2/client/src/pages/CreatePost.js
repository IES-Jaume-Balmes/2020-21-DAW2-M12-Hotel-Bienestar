import React,{useState} from 'react';
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";


function CreatePost() {
    let {id} = useParams();
    let history = useHistory();
    const [adults, setAdults] = useState("");
    const [children, setChildren] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const onSubmit = () =>{
        axios.post(`http://localhost:3001/reserva`,{
            HabitacioneId:id,
            adults: adults,
            children: children,
            checkIn: checkIn,
            checkOut: checkOut,
        }).then((response)=>{
            if(response.data.error){
                console.log(response.data.error);
            }else{
                setAdults("");
                setCheckIn("");
                setCheckOut("");
                setChildren("");
                history.push("/habitaciones");
            }
        });
    };
    return (
        <div className="createPostPage">
            <div>
                <div className="formContainer">
                    <div className="formConatinerBlock">
                        <div><label>Check In:</label></div>
                        <input 
                            autoComplete="off"
                            type="date"
                            id="inputCreatePost" 
                            name="checkIn" 
                            value={checkIn}
                            onChange={(event)=>{setCheckIn(event.target.value)}}
                        />
                    </div>
                    <div className="formConatinerBlock">
                        <div><label>Check Out:</label></div>
                        <input 
                            autoComplete="off"
                            type="date"
                            id="inputCreatePost" 
                            name="checkOut" 
                            value={checkOut}
                            onChange={(event)=>{setCheckOut(event.target.value)}}
                        />
                    </div>
                    <div className="formConatinerBlock">
                        <div><label>Numero d'adults:</label></div>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="adults" 
                            placeholder="(Ex.1-5...)"
                            value={adults}
                            onChange={(event)=>{setAdults(event.target.value)}}
                        />
                    </div>
                    
                    <div className="formConatinerBlock">
                        <div><label>Numero de nens:</label></div>
                        <input 
                            autoComplete="off"
                            id="inputCreatePost" 
                            name="children" 
                            placeholder="(Ex.0-5...)"
                            value={children}
                            onChange={(event)=>{setChildren(event.target.value)}}
                        />
                    </div>
                    
                    
                    <button type="submit" onClick={onSubmit}>Hacer Reserva</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;