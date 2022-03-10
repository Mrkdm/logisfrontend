import React from 'react'
import {Link} from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'

import logoLogisitca from '../assets/images/Logo-Logistica.png'
const Navbar = () => {
  const navigate = useNavigate()

    return (
  <div className="">





  <nav className="navbar navbar-expand-lg  navbar-light bglight">
  <img onClick={()=>{navigate( '/')} } alt='LogoMain' style={{ width:170, objectFit:'cover',cursor: 'pointer'}} src={logoLogisitca} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link " style={{fontSize:'18px'}} to="/"><b>Inicio</b> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" style={{fontSize:'18px'}} to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <b>Casas en venta</b>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {/*<Link className="dropdown-item" to="/">Yucátan</Link>*/}

          <Link className="dropdown-item" to="/casasCancun">Cancún</Link>
          <Link className="dropdown-item" to="/casasTulum">Tulum</Link>
          <Link className="dropdown-item" to="/casasPlaya">Playa del Carmen</Link>

    
        </div>
      </li>
     { /*<li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle"   style={{fontSize:'18px'}}to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         <b> Casas en renta</b>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="#">Merida</Link>
          <Link className="dropdown-item" to="#">Cancun</Link>
   
        </div>
      </li>*/}

    </ul>
 
  </div>
</nav>

  </div>
    )
}

export default Navbar
