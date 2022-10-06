import {CHOOSE_USER,L0AD_USERS} from "../../actions/Actions";


const usersReducer=(state={users:[],user:null}, action)=>{
    const {type, payload} = action;

    switch (type) {
        case L0AD_USERS:
            return {
                ...state,
                users:payload
            };
        case CHOOSE_USER:

            const user = state.users.find(user => user.id === payload);
            return {...state, user}
        default:
            return state;
    }
}
export {
    usersReducer
}