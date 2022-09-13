import {axiosService} from "../axios.service/Axios.service";
import {urls} from "../../configs";

const commentsService={
    getAll:()=>axiosService.get(urls.comments)
}
export {commentsService}