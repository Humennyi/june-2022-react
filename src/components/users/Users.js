import React, {useEffect, useState} from 'react';

import {userService} from "../../service";
import User from "../user/User";
import {UserForm} from "../userForms/UserForms";



function Users  () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            <div><UserForm setUsers={setUsers}/></div>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    )
}

export default Users;