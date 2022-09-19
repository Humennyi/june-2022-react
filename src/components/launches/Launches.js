import React, {useEffect, useState} from 'react';

import {getLauncheAxios} from "../../service/launches.api.axios.service/Launches.api.axios.service";
import Launch from "./Launch";
import '../launches/Launches.css';



function Launches() {
    let [launches,setLaunches]=useState([]);

    useEffect(() => {
        getLauncheAxios().then(({data}) =>{
            const filter = data.filter(launch=>launch.launch_year < "2020");
            setLaunches(filter)

        })
    }, []);


    return (

        <div className="launches">
            <h1>SpaceX</h1>
            {launches.map((launch,index)=>
                <Launch
                    keu={index}
                    launch={launch}
                />)
        }

        </div>
    );
}

export default Launches;