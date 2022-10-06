import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {L0AD_POSTS} from "../../redax";
import {postService} from "../../service";
import {Post} from "../post/Post";


const Posts = () => {
    const {posts}=useSelector(state => state.postsReducer)
    let dispatch=useDispatch()

    useEffect(()=>{
        postService.getAll().then(({data})=>
            dispatch({type:L0AD_POSTS, payload:data}))

    },[])
    return (
        <div>{
            posts.map(post=><Post key={post.id} post={post}/>)
        }
        </div>
    );
};

export default Posts;