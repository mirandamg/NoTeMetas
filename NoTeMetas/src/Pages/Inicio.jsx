import logo from "../Media/logo.png"
import '../styles/Inicio.css'


function Inicio(){
    return(
        <>
        <div>
            <h1>Hola</h1>
            <nav>
            <a href="/">
                    <img src={logo} width="155px"height="105px"/>
                </a>
                <div>
                    <ul>
                        
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Inicio