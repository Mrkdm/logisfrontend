import React from 'react'
import Navbar from '../../components/Navbar'
import {Link} from 'react-router-dom'
const PageNotFound = () => {
    return (
        <div  className="container-fluid" >
        <Navbar/>
        <div className="row">
   
        <div className="col-sm-12 content-center">

       <img className="img-fluid"  src="https://www.creativefabrica.com/wp-content/uploads/2019/05/Error-icon-by-Muhazdinata-580x386.jpg" />
          
                <h3>Oops!, Esta pagina no fue encontrada</h3>
                <p>Desafortunadamente, esta página no está disponible. Pero no se preocupe, ¡podemos volver a encarrilarlo!</p>
                <Link to="/" className="colorPink h4">Ir a la pagina de Inicio</Link>
            

        </div>
    </div>
        </div >
    )
}

export default PageNotFound