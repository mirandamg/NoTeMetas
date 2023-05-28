import '../styles/Inicio.css'
import NavBar from '../components/NavBar'


function Inicio(){
    return(
        <>
        
        <NavBar />
        <div className="rowM">
  <div className="column middle">
    <h1>Planea tu viaje</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
    <p>Pellentesque non leo sed urna imperdiet accumsan. Sed neque augue, accumsan eget finibus sed, vestibulum in nulla.</p>
    <br />
    <a href="/informacion" className="buttonL">Leer más</a>
</div>
  
  <div className="column side">
    <img className="img1" src="https://blog.uber-cdn.com/cdn-cgi/image/width=2161,height=1081,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/12/MX_x-cosas-que-querr%C3%A1s-hacer-en-Monterrey-desde-que-sale-el-sol.jpg"/>
  </div>
</div>
<hr/>

<div className="row">
  <div className="column sideC">
  <img className="imgC" src="https://diariopresenterm.blob.core.windows.net.optimalcdn.com/images/2018/03/01/cropw0h0sismoos-focus-0-0-732-549.jpg"/>
  </div>
    <div className="column middleC">
    <h2>Inseguridad</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerats.</p>
    <br />
    <a href="/seguridad" className="buttonL">Leer más</a>

  </div>
  <div className="column sideC">
  <img className="imgC" src="https://img.freepik.com/vector-premium/mapa-ruta-punteros-estilo-plano_23-2147789377.jpg"/>
  </div>
  <div className="column middleC">
    
    <h2>¿Como llegar?</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat.</p>
    <br />
    <a href="/rutas" className="buttonL">Leer más</a>

  </div>
</div>

        
    </>
    )

}

export default Inicio