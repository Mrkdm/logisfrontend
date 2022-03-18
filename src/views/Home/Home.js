import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import fondo1 from '../../assets/images/fondo1.jpg'
import fondo3 from '../../assets/images/fondo3.jpg'
import fondo4 from '../../assets/images/fondo4.jpg'



import logoAFA from '../../assets/images/LogoAFA.png'
import logoMVS from '../../assets/images/LogoMVS.png'
//Import Components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer.js'
import WhatsappBottom from '../../components/WhatsappBottom'

import FormConsult from '../../components/FormConsult';
const Home = () => {
    const [totalCasas, setTotalCasas] = useState([]);
    const [casasCancun, setCasasCancun] = useState([]);
    const [casasMerida, setCasasMerida] = useState([]);
    const [casasTulum, setCasasTulum] = useState([]);
    const [casasPlaya, setCasasPlaya] = useState([]);

    //ESTADO COMO QUINTANA ROO O YUCATAN

    useEffect(() => {
        (async () => {
            await axios.get('https://logis.live/api/images/ubication/Cancun').then((res) => { setCasasCancun(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('https://logis.live/api/images/ubication/Merida/').then((res) => { setCasasMerida(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('https://logis.live/api/images/ubication/Tulum/').then((res) => { setCasasTulum(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('https://logis.live/api/images/ubication/Playa/').then((res) => { setCasasPlaya(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('https://logis.live/api/images/').then((res) => { setTotalCasas(res.data) }).catch((err) => console.log(err))
        })();


    }, [])


    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='oneText'>
                    <h3><b>Bienvenido! a LOGÍSTICA INMOBILIARIA</b></h3>
                </div>
                <AwesomeSlider style={{ height: "500px", minHeight: "500px" }}>
                    <div data-src={fondo3} />
                    <div data-src={fondo1} />
                    <div data-src={fondo4} />
                </AwesomeSlider>

            </div>


            <section>
                <div className="container-fluid" >
                    <div className="content-center">
                        <h1 className="h2 mt-5"><b>Mira nuestras casas en Yucatan, Cancún, Tulum, Playa del Carmen y elije una!</b></h1>

                    </div>
                    <div id="section" className="row" style={{ marginTop: 10 }}>
                        <div className="col-md-6">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="/casasCancun">
                                        <h2>Cancún</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider>
                                    {
                                        casasCancun.map((imgs) => {

                                            return (

                                                <div key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: "100vw", height: "90vh", objectFit: 'cover' }} alt="Portfolio 01" />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="/casasMerida">
                                        <h2>Mérida</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider>
                                    {
                                        casasMerida.map((imgs) => {

                                            return (

                                                <div key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: "100vw", height: "100vh", objectFit: 'cover' }} alt="Portfolio 01" />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="/casasPlaya">
                                        <h2>Playa del Carmen</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider>
                                    {
                                        casasPlaya.map((imgs) => {

                                            return (

                                                <div key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: "100vw", height: "90vh", objectFit: 'cover' }} alt="Portfolio 01" />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>
                        <div className="col-md-6 ñ">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="/casasTulum">
                                        <h2>Tulum</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider>
                                    {
                                        casasTulum.map((imgs) => {

                                            return (

                                                <div key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: "100vw", height:"90vh", objectFit: 'cover' }} />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="/casas">
                                        <h2>Quintana Roo y Yucatán</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider style={{height:"55vh"}}>
                                    {
                                        totalCasas.map((imgs) => {

                                            return (

                                                <div  key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: "100vw", height: "90vh", objectFit: 'cover' }} />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div></div>
                    </div>
                </div>
            </section>

            <section>
                <section id="hero2">
                    <div className="container">
                        <div className="mt-5">
                            <h1 className="titleHero2">¿Estas interesado en comprar, rentar o vender un bien inmueble?</h1>

                        </div>
                    </div>
                    <div className="container ">
                        <FormConsult />
                    </div>
                </section>
            </section>

            <section className='container mt-5'>
                <h2>LOGISTÍCA INMOBILIARIA también te ofrece ayuda con lo siguiente</h2>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>

                            <h5 className=''><b>AVALUOS</b></h5>
                            <hr />
                            <br />
                            <div className='mt-2 mb-4'>
                                <img className='img-fluid' style={{ width: "200px", objectFit: "cover" }} src={logoAFA} />
                            </div>

                            <a href="https://api.whatsapp.com/send?phone=5219982323301" className='btn btn-outline-primary'>Contacto</a>
                        </div>
                        <div className='col-lg-4 mt-5 mb-5'></div>
                        <div className='col-lg-4 col-md-6'>
                            <h5 className=''><b>SERVICIOS LEGALES</b></h5>
                            <hr />
                            <div className='mt-4 mb-4'>
                                <img className='img-fluid' style={{ width: "150px", objectFit: "cover" }} src={logoMVS} />

                            </div>
                            <a href="https://api.whatsapp.com/send?phone=5219982323301" className='btn btn-outline-primary'>Contacto</a>


                        </div>

                    </div>
                </div>
            </section>

            <br />
            <br />

            <br />

            <br />

            <br />

            <br />

            <br />



            <Footer />
            <WhatsappBottom />
        </div>


    )
}

export default Home
