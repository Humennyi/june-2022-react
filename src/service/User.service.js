import {axiosService} from "./Axios.service.api";
import {urls} from "../config";

const userService={
    getAll: ()=>axiosService.get(urls.users),
    createUser: (user)=>axiosService.post(urls.users,user)
}

export {
    userService
}