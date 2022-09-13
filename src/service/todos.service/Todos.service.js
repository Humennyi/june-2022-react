import {axiosService} from "../axios.service/Axios.service";
import {urls} from "../../configs";

const todosService= {
    getAll: () => axiosService.get(urls.todos)
}
export {todosService}