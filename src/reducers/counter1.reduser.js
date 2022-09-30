import {DEC, INC, RESET, SET} from "./count.actions";
import {useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case INC:
            return {counter1: state.counter1 + 1}
        case DEC:
            return {counter1: state.counter1 - 1}
        case RESET:
            return {counter1: 0}
        case SET:
            return {counter1: action.payload}

    }
}
const useCount1Reducer1=()=>useReducer(reducer,{counter:0})
export {
    useCount1Reducer1
}