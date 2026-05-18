import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {

    const token = localStorage.getItem("token");

    return (
        <nav className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/courses">Courses</Link>
            <Link className="nav-link" to="/create-course">Create Course</Link>
            {token?true:false && <Link className="nav-link" to="/login">Login/Register</Link>}
        </nav>
    );
}

export default Navbar;