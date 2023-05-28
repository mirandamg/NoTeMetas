import '../styles/Informacion.css'
import NavBar from '../components/navBar'


function Informacion(){
    return(
  <>
  <NavBar />
    <div className="header">
      <h1>Información en Monterrey</h1>
    </div>
    <div className="row">
    <div className="rightcolumn">
    <div className="card">
      <h2>Movilidad</h2>
      <p>En este apartado encontrarás información completa sobre los costos, zonas y todo lo relacionado con el transporte público en Monterrey. Te ofrecemos detalles sobre los diferentes modos de transporte, tarifas actualizadas, descuentos y un mapa detallado de rutas. Creemos en la importancia del transporte público como una opción sostenible y accesible para todos. ¡Explora nuestra página y descubre las ventajas de usar el transporte público en Monterrey!</p>
      <hr/>
    </div>

    <div className="card">
      <img className="pequeñas" src="https://www.eleconomista.com.mx/__export/1623788711331/sites/eleconomista/img/2021/06/15/ruta-expres-nuevo-leon-cortesia-gob-nl.png_1902800913.png"/>
      <p>
En Monterrey, encontrarás una amplia variedad de opciones de transporte público, que incluyen autobuses, metro, tranvías y taxis.</p>
    </div>
    </div>
  <div className="leftcolumn">
    <div className="card">
      <div>
        <img className='imgM' src="https://i0.wp.com/thehappening.com/wp-content/uploads/2016/05/monterrey1.jpg?fit=1024%2C694&ssl=1"/>
      </div>
    </div>
    <div className="card">
    <h2>Contaminación</h2>
      <p>Explora nuestro apartado sobre la contaminación en Monterrey y cómo reducirla. Conoce los tipos de contaminación y sus efectos en la salud y el medio ambiente. Nuestro mapa de calor destaca las zonas más afectadas. Encuentra consejos prácticos para tomar medidas y contribuir a una ciudad más limpia. ¡Únete a nosotros para combatir la contaminación en Monterrey!</p>
      <hr/>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>Seguridad</h2>
      <p>Explora nuestro apartado de seguridad en Monterrey y descubre los lugares más seguros para visitar. Con nuestro mapa de calor, identificarás las zonas con mayor incidencia delictiva. Te proporcionamos recomendaciones confiables para que disfrutes de tus actividades con tranquilidad. ¡Planifica tus salidas sin preocupaciones en Monterrey!</p>
      <hr/>
    </div>

    <div className="card">
      <img className="pequeñas" src="https://cdn.milenio.com/uploads/media/2023/01/19/ruben-aguilar-torres-inspector-operacion.jpeg"/>
      <p>Una de nuestras prioridades es el dar información de valor a los turistas que vienen a Monterrey para evitar que estos sean victimas de algún crimen durante su estadía.</p>
    </div>
  </div>
</div>

  </>
  )
}

export default Informacion;
