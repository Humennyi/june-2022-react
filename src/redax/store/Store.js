import {createStore} from "redux";

import {reducer} from "./CombineReducers";

const store = createStore(reducer);

export {
    store
}