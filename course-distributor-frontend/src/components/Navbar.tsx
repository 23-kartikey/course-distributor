import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/courses">Courses</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
        </nav>
    );
}

export default Navbar;