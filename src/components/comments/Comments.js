import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentsService} from "../../service";
import {L0AD_COMMENTS} from "../../redax";
import Comment from "../comment/Comment";

const Comments = () => {
    const {comments} = useSelector(state => state.commentsReducer);
    let dispatch = useDispatch();

    useEffect(()=>{
        commentsService.getAll().then(({data})=>
            dispatch({type:L0AD_COMMENTS, payload:data}
            ))},[])
    return (
        <div>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;