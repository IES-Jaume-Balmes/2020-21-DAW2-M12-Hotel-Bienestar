import React,{useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Reserva() {
    let {id} = useParams();
    const [reservaObject, setReservaObject] = useState({});
    const [comments, setComments] = useState([]); //list
    const [newComment, setNewComment] = useState("");

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
                PostId: id,
            }
            ).then((response)=>{
                const commentToAdd = {commentBody: newComment};
                setComments([...comments, commentToAdd]);
                setNewComment("");
        });
    };
    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title">{reservaObject.name}</div>
                    <div className="body">{reservaObject.email}</div>
                    <div className="footer">{reservaObject.phone}</div>
                    <div className="footer">{reservaObject.adults}</div>
                    <div className="footer">{reservaObject.childreen}</div>
                    <div className="footer">{reservaObject.checkIn}</div>
                    <div className="footer">{reservaObject.checkOut}</div>
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
                    {comments.map((comment)=>{
                        return (
                            <div className="comment">
                                {comment.commentBody}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reserva;