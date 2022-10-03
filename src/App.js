import {Cats} from "./components/cats/Cats";
import {Dogs} from "./components/dogs/Dogs";
import css from "./app.module.css"


function App() {


    return (
        <div className={css.main}>
            <Cats/>
            <Dogs/>

        </div>
    );
}

export default App;
