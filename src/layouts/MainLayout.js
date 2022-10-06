import React from 'react';
import {Headers} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Headers/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;