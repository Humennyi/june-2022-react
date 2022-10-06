import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {CHOOSE_USER} from "../../redax";
import UserDetails from "../userDetails/UserDetails";

const UserComponent = () => {

    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type:CHOOSE_USER, payload: +id})
    },[id]);

    return (
        <div>
            {user && (<UserDetails user={user}/>)}
        </div>
    )
}
export {UserComponent};