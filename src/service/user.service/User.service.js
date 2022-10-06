import {urls} from "../../configs";
import {axiosService} from "../axios.service/Axios.service";

const userService={
    getAll:()=>axiosService.get(urls.users)
}
export {
    userService
}