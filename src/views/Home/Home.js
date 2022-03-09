import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import images from '../index.js'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'



//Import Components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer.js'
import WhatsappBottom from '../../components/WhatsappBottom'

import FormConsult from '../../components/FormConsult';
const Home = () => {
    const [totalCasas, setTotalCasas] = useState([]);
    const [casasCancun, setCasasCancun] = useState([]);
    const [casasMerida, setCasasMerida] = useState([]);


    useEffect(() => {
        (async () => {
            await axios.get('https://logis.live/api/images/ubication/Cancun').then((res) => { setCasasCancun(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('https://logis.live/api/images/ubication/Merida/').then((res) => { setCasasMerida(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('https://logis.live/api/images/').then((res) => { setTotalCasas(res.data) }).catch((err) => console.log(err))
        })();
    }, [])


    return (
        <div>
            <Navbar />
            <section id="hero">
                <video muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop class="fillWidth visible-lg">
                    <source src={video} type="video/mp4 " />
                </video>
                <div className="oneText">
                    <h3 className='text-success'><b>Bienvenido!</b></h3>
                    <h5>Continua bajando</h5>
                </div>

            </section>
            <section>
                <div className="container-fluid" >
                    <div className="content-center">
                        <h1 className="h2 mt-5"><b>Mira nuestras casas en Mérida, Yucatan, Cancún y elije una!</b></h1>

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
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: 1800, height: 410, objectFit: 'cover' }} alt="Portfolio 01" />
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
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: 1800, height: 410, objectFit: 'cover' }} alt="Portfolio 01" />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>
                        <div className="col-md-6 content-center">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="#">
                                        <h2>Quintana Roo y Yucátan</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider>
                                    {
                                        totalCasas.map((imgs) => {

                                            return (

                                                <div key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: 1800, height: 410, objectFit: 'cover' }} alt="Portfolio 01" />
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
                <section id="hero2">
                    <div className="container">
                        <div className="mt-5">
                            <h1 className="">Estas interesado en vender tu casa?</h1>

                            <p className="text-white">El equipo de Logisticainmobiliaria esta dispuesto a ayudarte en lo necesario para vender tu inmueble contactanos ahora! </p>
                        </div>
                    </div>
                    <div className="container ">
                        <FormConsult />
                    </div>
                </section>
            </section>

            <section>





            </section>

            <Footer />
            <WhatsappBottom />
        </div>


    )
}

export default Home
