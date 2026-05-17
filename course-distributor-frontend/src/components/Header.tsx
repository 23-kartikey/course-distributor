import "../styles/Header.css";
import Navbar from "./Navbar";

const Header = () =>{
    return(
        <div className="header-container">
            <h1 className="header">CORE</h1>
            <Navbar />
        </div>
    )
}

export default Header;