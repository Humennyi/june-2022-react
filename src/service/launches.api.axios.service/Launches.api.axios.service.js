import axios from 'axios';

let axiousInstance=axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches',
    headers: {'Content-Type': 'application/json',}

});
const getLauncheAxios= ()=>{
    return axiousInstance.get()
}
export {getLauncheAxios}