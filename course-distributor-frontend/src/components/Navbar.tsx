import { Link, useLocation } from "react-router-dom";
import { logout } from "../services/AuthService";
import "../styles/Navbar.css";
import { useState } from "react";
const Navbar = () => {

    const location = useLocation();

    const isAuthPage = location.pathname === "/login" || 
                       location.pathname === "/register";

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
        window.location.href="/";
    }


    return (
        <nav className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/courses">Courses</Link>
            <Link className="nav-link" to="/create-course">Create Course</Link>
            { !isAuthPage && 
                (isLoggedIn ? (<button onClick={handleLogout} >Logout</button>)
                    :(<Link className="nav-link" to="/login">Login/Register</Link>)
                    )}
        </nav>
    );
}

export default Navbar;