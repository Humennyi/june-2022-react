import {axiosService} from "./Axios.service";
import {posts} from "../../configs";

const postService={
    getAll:()=>axiosService.get(posts.posts)
}
export {postService}