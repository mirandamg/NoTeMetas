import logo from "../../Media/logo.png"
import '../styles/Navbar.scss'

import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();


    return (
        <>
            <nav>
                <a href="/inicio">
                    <img
                        src={logo}
                        width="155px"
                        height="105px"
                        id="deersign-logo"
                        alt="logo deer sign"
                    />
                </a>

                <div>
                    <ul className="navbar">
                        <li><input className="search" placeholder="Nombre Producto" /></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;