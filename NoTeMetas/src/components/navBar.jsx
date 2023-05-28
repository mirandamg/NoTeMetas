import logo from "../Media/logo.png"
import { FaSistrix } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import {FaRegMap} from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import {FaExclamationTriangle} from "react-icons/fa";
import '../styles/Navbar.css'

function NavBar(){
    return (
        <>
            <nav>
      <div className="brand"><a href="/"><img src={logo} width="70" height="40"/> </a></div>
      <div className="navigation">
        <ul className="menu">
          <li><a href="/informacion"><FaInfo/></a></li>
          <li><a href="/movilidad"><FaTaxi/></a></li>
          <li><a href="/rutas"><FaRegMap /></a></li>
          <li><a href="/seguridad"><FaExclamationTriangle /></a></li>
        </ul>
        <div className="search">
          <div className="search-content">
            <button className="search-button"> <FaSistrix/></button>
            <input type="text" className="search-input" placeholder="Search here..."></input>
          </div>
        </div>
      </div>
    </nav>

        </>
    );
}

export default NavBar;