import React from 'react';
import '../styles/Informacion.css'
import React from 'react';
import NavBar from '../components/navBar'


function Informacion(){
    return(
    <div className="container section-split">
        <div className="header">
            <h1 className="informacion-title">Información en Monterrey</h1>
        </div>
        
        <NavBar />

        <section id="inseguridad" className="section">
            <div className="container">
            <h2>Inseguridad en Monterrey</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id lectus quis elit feugiat commodo sed vel diam. Sed suscipit purus a leo porta luctus. Fusce et tristique dolor, in varius mauris. Vivamus tristique, ipsum vitae consectetur aliquet, nunc turpis porta mauris, at ullamcorper nulla ex id est. Vestibulum porta ex auctor dui fermentum auctor. Fusce pretium, metus sed vulputate efficitur, urna ligula commodo nisi, in feugiat dui felis vel ante. Donec ut convallis enim, a finibus elit. Integer at ligula facilisis, vestibulum mi eget, ullamcorper dui. In sodales semper nibh sed vulputate. Fusce vestibulum odio at risus lobortis, sit amet venenatis orci interdum. Nunc nec aliquet dui.
            </p>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/45AJYTDFPJBGDCJSCORSRLX7HM.jpg" alt="Imagen de inseguridad en Monterrey" />
            </div>
          </section>
    
          <section id="transporte" className="section">
            <div className="container">
            <h2>Transporte Público en Monterrey</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id lectus quis elit feugiat commodo sed vel diam. Sed suscipit purus a leo porta luctus. Fusce et tristique dolor, in varius mauris. Vivamus tristique, ipsum vitae consectetur aliquet, nunc turpis porta mauris, at ullamcorper nulla ex id est. Vestibulum porta ex auctor dui fermentum auctor. Fusce pretium, metus sed vulputate efficitur, urna ligula commodo nisi, in feugiat dui felis vel ante. Donec ut convallis enim, a finibus elit. Integer at ligula facilisis, vestibulum mi eget, ullamcorper dui. In sodales semper nibh sed vulputate. Fusce vestibulum odio at risus lobortis, sit amet venenatis orci interdum. Nunc nec aliquet dui.
            </p>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/45AJYTDFPJBGDCJSCORSRLX7HM.jpg" alt="Imagen de transporte público en Monterrey" />
            </div>
          </section>
    
          <section id="contaminacion" className="section">
            <div className="container">
            <h2>Impactos de la Contaminación</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id lectus quis elit feugiat commodo sed vel diam. Sed suscipit purus a leo porta luctus. Fusce et tristique dolor, in varius mauris. Vivamus tristique, ipsum vitae consectetur aliquet, nunc turpis porta mauris, at ullamcorper nulla ex id est. Vestibulum porta ex auctor dui fermentum auctor. Fusce pretium, metus sed vulputate efficitur, urna ligula commodo nisi, in feugiat dui felis vel ante. Donec ut convallis enim, a finibus elit. Integer at ligula facilisis, vestibulum mi eget, ullamcorper dui. In sodales semper nibh sed vulputate. Fusce vestibulum odio at risus lobortis, sit amet venenatis orci interdum. Nunc nec aliquet dui.
            </p>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/45AJYTDFPJBGDCJSCORSRLX7HM.jpg" alt="Imagen de impactos de la contaminación" />
            </div>
          </section>
    </div>
  )
}

export default Informacion;
