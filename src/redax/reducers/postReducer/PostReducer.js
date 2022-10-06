import { L0AD_POSTS} from "../../actions/Actions";


const postsReducer=(state={posts:[],post:null}, action)=>{
    const {type, payload} = action;
    switch (type) {
        case L0AD_POSTS:
            return {
                ...state,
                posts:payload
            };

        default:
            return state;
    }
}
export {
    postsReducer
}