import React from 'react';
import NavBar from "../../components/navBar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/footer";

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}