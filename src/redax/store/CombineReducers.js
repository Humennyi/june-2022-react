import {combineReducers} from "redux";

import {usersReducer} from "../reducers/userReducer/UserReducer";
import {postsReducer} from "../reducers/postReducer/PostReducer";
import {commentsReducer} from "../reducers/commentsReducer/CommentsReducer";

let reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer
});

export {
    reducer
}