import React, {useEffect, useState} from 'react';
import {commentsService} from "../../service";
import Comment from "../comment/Comment";
import {Outlet} from "react-router-dom";


function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.data))
    }, [])
    return (
        <div>
            <Outlet/>
            {
            comments.map(comment=><Comment key={comment.id} commet={comment}/>)
        }</div>
    );
}

export default Comments;