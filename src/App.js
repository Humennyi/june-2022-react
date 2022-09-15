
import './App.css';
import {useEffect, useState} from "react";
import {getUsers} from "./sevices/user.service";
import UserComponent from "./components/UserComponent";

function App() {

 let [users,setUsers]=useState([]);

useEffect(()=>{
  getUsers().then(value => setUsers(value.data));
},[])
    const chooseUser=(id)=>{
        console.log(id);
    }

  return (
    <div >
        {users.map(value => <
            UserComponent
            key={value.id}
            chooseUser={chooseUser}

        />)}

    </div>);
}

export default App;
