import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

import {CHOOSE_USER} from "../../redax";
import css from './HEADERS.module.css'

const Headers = () => {
    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type:CHOOSE_USER, payload: +id})
    },[id]);

    return (
        <div className={css.nav__menu}>
            <div><Link to={'/'}>Main</Link></div>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
            <div>{user && (<div>{user.name}</div>)}</div>
        </div>
    )
}
export {Headers};