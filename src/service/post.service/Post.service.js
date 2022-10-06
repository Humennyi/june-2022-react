import {axiosService} from "../axios.service/Axios.service";
import {urls} from "../../configs";

const postService={
    getAll:()=>axiosService.get(urls.posts)
}
export {
    postService
}