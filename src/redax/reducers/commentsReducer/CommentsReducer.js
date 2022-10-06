import { L0AD_COMMENTS} from "../../actions/Actions";


const commentsReducer=(state={comments:[],comment:null}, action)=>{
    const {type, payload} = action;
    switch (type) {
        case L0AD_COMMENTS:
            return {
                ...state,
                comments:payload
            };

        default:
            return state;
    }
}
export {
    commentsReducer
}