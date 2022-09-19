import React, {useEffect, useState} from 'react';

import User from "./User";
import {getUsers} from "../../service/user.api.service/User.api.service";
import './Users.css'

function Users() {
    let [users,setUsers] = useState([]);
    let [user, setUser] = useState(0);

    const lift=(obj)=>{
        setUser(obj);
    }


useEffect(()=>{
    getUsers().then(value => setUsers(value))
},[])



    return (
        <div className='main'>
            <h3>{user?.username}</h3>



            {users.map((user,index)=>(
                <User
                    key={index}
                    user={user}
                    lift={lift}
            />))


        }

        </div>
    );
}



export default Users;