import React from 'react';
import {DEC, INC, RESET, SET, useCount1Reducer1} from "../reducers";

const Counter1 = () => {
    const [state, dispatch] = useCount1Reducer1();
    return (
        <div>
            <h1>Counter:{state.counter1} </h1>
            <button onClick={()=>dispatch({type:INC})}>inc</button>
            <button onClick={()=>dispatch({type:DEC})}>dec</button>
            <button onClick={()=>dispatch({type:RESET})}>res</button>
            <button onClick={()=>dispatch({type:SET, payload:30})}>set</button>
        </div>
    );
}

export {Counter1};