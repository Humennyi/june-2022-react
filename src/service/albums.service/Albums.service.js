import {axiosService} from "../axios.service/Axios.service";
import {urls} from "../../configs";

const albumsService={
    getAll:()=>axiosService.get(urls.albums)

}
export {albumsService}