import React, {useRef} from 'react';
import {Cat} from "../cat/Cat";
import {CREATE, DELETE} from "../../reducer/action/Action";
import {useAnimalReducer} from "../../reducer/reducer/Reducer";
import css from "./Cats.module.css"

const Cats = () => {

    const [state, dispatch] = useAnimalReducer()

    let catName = useRef()

    const createCat = () => {
        dispatch({type: CREATE, payload: {name: catName.current.value}})
    }

    const deleteCat = (id) => {

        dispatch({type: DELETE, payload: {id}})
    }

    return (<div>
        <div className={css.main}>

            <h4>Add Cat:</h4>
            <input type="text" ref={catName}/>
            <button onClick={createCat}>Add</button>


        </div>
            <div>{state.map((cat, index) => <Cat key={index} cat={cat} deleteCat={deleteCat}/>)}</div>


    </div>
)

}

export {Cats}