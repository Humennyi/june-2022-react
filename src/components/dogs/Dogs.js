import {Dog} from "../dog/Dog";
import {CREATE, DELETE} from "../../reducer/action/Action";
import {useRef} from "react";
import {useAnimalReducer} from "../../reducer/reducer/Reducer";
import css from "./Dogs.module.css"


const Dogs = () => {

    const [state, dispatch] = useAnimalReducer()

    const dogName = useRef()

    const createDog = () => {
        dispatch({type: CREATE, payload: {name: dogName.current.value}})
        console.log(state)
    }

    const deleteDog = (id) => {
        dispatch({type: DELETE, payload: {id}})
    }

    return (<div>
               <div className={css.main}>
                <h4>Add Dog:</h4>
                <input type="text" ref={dogName}/>
                <button onClick={createDog}>Add</button>

                </div>
                 <div>{state.map((dog, index) => <Dog key={index} dog={dog} deleteDog={deleteDog}/>)}</div>

             </div>

    )

}

export {Dogs}