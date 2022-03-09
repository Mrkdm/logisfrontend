import React from 'react'
import {Link} from 'react-router-dom'
import logoLogisitca2 from '../assets/images/Logo-Logistica2.png'

const Footer = () => {
    return (
       <footer className="bgDark">
           <div className="container">
               <img src={logoLogisitca2} alt="logo" style={{ width:170, height:100, objectFit:'cover',cursor: 'pointer'}} className=" img-fluid"  />
               <ul className="list-inline">
                   <li className="list-inline-item footer-menu"><Link to="/" >Inicio</Link></li>
                   <li className="list-inline-item footer-menu"><Link to="/aboutUs" >Sobre Nosotros</Link></li>                   <li></li>
                   <li className="list-inline-item footer-menu"><Link to="/#contact">Contacto</Link></li>
                   
                   
               </ul>
         
               <small>
                   Todos los derechos reservados logisticainmobiliaria
               </small>
           </div>
       </footer>
    )
}

export default Footer
