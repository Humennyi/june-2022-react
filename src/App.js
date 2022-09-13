import {useReducer} from "react";


const init = (initialvalue) => {
    return {counter1: initialvalue, counter2: initialvalue}
}

const reducer = (state, action) => {
    console.log(action)
    return {...state}
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);
    return (
        <div>

            <h1>counter1:{state.counter1}</h1>
            <h1>counter2:{state.counter2}</h1>
            <button onClick={()=>dispatch({type:'INC'})}>inc</button>
            <button>dec</button>
            <button>reset</button>
            <button>set</button>


        </div>
    );
}

export  {App};
