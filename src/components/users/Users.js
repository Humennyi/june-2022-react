import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import User from "../user/User";
import {commentsService as usersService} from "../../service";
import {L0AD_USERS} from "../../redax";

const Users = () => {

    const {users} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        usersService.getAll().then(({data}) => dispatch({type:L0AD_USERS, payload: data}))
    },[])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    )
}
export {Users};