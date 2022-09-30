import React from 'react';
import {DEC, INC, RESET, SET, useCount1Reducer2} from "../reducers";

const Counter2 = () => {
    const [state, dispatch] = useCount1Reducer2();
    return (
        <div>
            <h1>Counter:{state.counter2} </h1>
            <button onClick={()=>dispatch({type:INC})}>inc</button>
            <button onClick={()=>dispatch({type:DEC})}>dec</button>
            <button onClick={()=>dispatch({type:RESET})}>res</button>
            <button onClick={()=>dispatch({type:SET,payload:20})}>set</button>
        </div>
    );
}

export {Counter2};