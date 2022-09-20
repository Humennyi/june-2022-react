import React, {useEffect, useState} from 'react';

import {userService} from "../../service/user.api.service";
import User from "../user/User";
import UserDetails from "../user-details/User-details";
import PostService from "../../service/user.api.service/Post.service";

function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [post,setPost]=useState([]);


    const showPost=(post)=>{
       setPost(post)
    }

    const showUser=(obj)=>{
        setUser(obj)
    }

   useEffect(()=>{
       userService.getAll().then(value => setUsers(value.data))
   },[])


    return (
        <div>{
            users.map(user=><User key={user.id} user={user} showUser={showUser}/>)
        }
        {
            user && <UserDetails key={user.id} user={user} showPost={showPost}/>

        }
            {
                post && <PostService key={post.id} post={post}/>
            }
        </div>
    );
}

export default Users;
