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
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <hr/>
    </div>

    <div className="card">
      <img className="pequeñas" src="https://www.eleconomista.com.mx/__export/1623788711331/sites/eleconomista/img/2021/06/15/ruta-expres-nuevo-leon-cortesia-gob-nl.png_1902800913.png"/>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    </div>
  <div className="leftcolumn">
    <div className="card">
      <div>
        <img className='imgM' src="https://i0.wp.com/thehappening.com/wp-content/uploads/2016/05/monterrey1.jpg?fit=1024%2C694&ssl=1"/>
      </div>
    </div>
  
      <h2>Contaminación</h2>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>Seguridad</h2>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <hr/>
    </div>

    <div className="card">
      <img className="pequeñas" src="https://cdn.milenio.com/uploads/media/2023/01/19/ruben-aguilar-torres-inspector-operacion.jpeg"/>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
  </div>
</div>

  </>
  )
}

export default Informacion;
