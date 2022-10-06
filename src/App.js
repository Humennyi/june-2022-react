import MainLayout from "./layouts/MainLayout";


import {Route, Routes} from "react-router-dom";

import PostsPage from "./pages/postsPage/PostsPage";
import CommentsPage from "./pages/commentsPage/CommentsPage";
import UserPage from "./pages/userPage/UsersPage";
import UsersPage from "./pages/usersPage/UsersPage";


function App() {



  return (
<Routes>
    <Route path={'/'} element={<MainLayout/>}>
        <Route path={'users'} element={<UsersPage/>}/>
        <Route path={'users/:id'} element={<UserPage/>}/>
        <Route path={'posts'} element={<PostsPage/>}/>
        <Route path={'comments'} element={<CommentsPage/>}/>
    </Route>
</Routes>
  );
}

export default App;
