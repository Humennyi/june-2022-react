import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import CommentDetails from "./components/commentDetails/CommentDetails";


function App() {


    return (
        <div>
            <ul>
                <li><Link to={'/todos'}>todos pages</Link></li>
                <li><Link to={'/albums'}>albums pages</Link></li>
                <li><Link to={'/comments'}>comments pages</Link></li>

            </ul>
            <hr/>
            <Routes>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={':id'} element={<CommentDetails/>}/>

                </Route>

            </Routes>


        </div>
    );
}

export default App;
