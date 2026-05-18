import "../styles/Header.css";
import Navbar from "./Navbar";

const Header = () =>{
    return(
        <div className="header-container">
            <a href="/"><h1 className="header">CORE</h1></a>
            <Navbar />
        </div>
    )
}

export default Header;