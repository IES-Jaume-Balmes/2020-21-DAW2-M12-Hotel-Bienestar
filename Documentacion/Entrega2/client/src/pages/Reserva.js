import React,{useEffect, useState, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../helpers/AuthContext";

function Reserva() {
    let {id} = useParams();
    const [reservaObject, setReservaObject] = useState({});
    const [comments, setComments] = useState([]); //list
    const [newComment, setNewComment] = useState("");
    const {authState} = useContext(AuthContext);


    useEffect(() => {
        axios.get(`http://localhost:3001/reserva/byId/${id}`).then((response)=>{
            setReservaObject(response.data);
        }); 
        axios.get(`http://localhost:3001/comments/${id}`).then((response)=>{
            setComments(response.data);
        }); 
    },[]);

    const addComment = ()=>{
        axios
            .post("http://localhost:3001/comments",{
                commentBody: newComment,
                ReservaId: id,
            },
            {
                headers:{
                    accessToken: localStorage.getItem("accessToken"), 
                },
            })
            .then((response)=>{
                if(response.data.error){
                    console.log(response.data.error);
                }else{
                    const commentToAdd = {commentBody: newComment, username:response.data.username};
                    setComments([...comments, commentToAdd]);

                    setNewComment("");
                }
        });
    };

    const deleteComment =(id)=>{
        axios.delete(`http://localhost:3001/comments/${id}`, 
            {headers:{accessToken:localStorage.getItem('accessToken')},
        }).then(()=>{
            setComments(comments.filter((val)=>{
                return val.id != id;
                
            }));
        });
    };

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"><label>Nombre: {reservaObject.name}</label></div>
                    <div className="footer"><label>Correo: {reservaObject.email} </label></div>
                    <div className="footer"><label>Telefono: {reservaObject.phone} </label></div>
                    <div className="footer"><label>Adults: {reservaObject.adults} </label></div>
                    <div className="footer"><label>Children: {reservaObject.children} </label></div>
                    <div className="footer"><label>Check In: {reservaObject.checkIn} </label></div>
                    <div className="footer"><label>Check Out: {reservaObject.checkOut} </label></div>
                </div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input
                        type="text" 
                        placeholder="Comment..." 
                        autoComplete="off" 
                        value={newComment}
                        onChange={(event)=>{setNewComment(event.target.value)}}
                    />
                    <button onClick={addComment}>Add Comment</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment,key)=>{
                        return (
                            <div key={key} className="comment">
                                {comment.commentBody}
                                <label>, Username: {comment.username}</label>
                                {authState.username === comment.username && <button onClick={()=>{deleteComment(comment.id)}}>x</button>}
                            </div>
                        );
                    })}
                   
                </div>
            </div>
        </div>
    )
}

export default Reserva;