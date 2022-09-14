import User from "./R&MComponents";
import './R&M.css'
import {useEffect, useState} from "react";

export default function Users() {
    let [users,setUsers] = useState([]);
useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
            console.log(value);
        });
      }, []);
    return(
        <div className="main">
            <h2>The Rick and Morty</h2>
            {
                users.map((users,index)=>
                    (<User item={users} key={index}/>))}
        </div>
    );

}