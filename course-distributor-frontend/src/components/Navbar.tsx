import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {useAuth } from "../contexts/AuthContext";
import Search from "./Search";
import "../styles/Navbar.css";

const Navbar = () => {

    const { isAuthenticated,  logout } = useAuth();

    const location = useLocation();

    const isAuthPage = location.pathname === "/login" || 
                       location.pathname === "/register";


    const handleLogout = () => {
        logout();
        window.location.href="/";
    }


    return (
        <nav className="navbar">
            <Search />
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/courses">Courses</Link>
            <Link className="nav-link" to="/create-course">Create Course</Link>
            <Link className="nav-link" to="/profile-user">Profile</Link>
            { !isAuthPage && 
                (isAuthenticated ? (<button className="nav-link" onClick={handleLogout} >Logout</button>)
                    :(<Link className="nav-link" to="/login">Login/Register</Link>)
                    )}
        </nav>
    );
}

export default Navbar;