import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import Logo from '../assets/images/Logo-Logistica.png'
const FormQuestion = (props) => {

    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [text, setMessage] = useState("Hola, me interesa este inmueble que vi en LogisticaInmobiliaria y quiero que me contacten. Gracias.");
    const [tel, setPhoneNumber] = useState(null);


    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeMessage = (e) => {
        setMessage(e.target.value)
    }
    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }




    const onSubmitSendServer = async (e) => {
        e.preventDefault()
        var user = {
            name,
            email,
            text,
            tel,
            idProp: props
        }

        await axios.post('https://logis.live/api/messageQuestion', user).then((res) => {
            if (res.data.status == 1) {
                swal("Se a enviado correctamente", {
                    icon: "success"
                })
            }
            else {
                swal('A ocurrido un error', {
                    icon: "error"
                })
            }
        })
    }



    return (
        <>
            <div className="">
                <button type="button" className="btn btn-outline-dark btn-sm mt-4" data-toggle="modal" data-target={"." + props.data + "-modal-lg"}>Contactar</button>

            </div>
            <div class={"modal fade " + props.data + "-modal-lg"} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Nuevo mensage</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5>Contactar</h5>
                                        <img src={Logo} style={{ width: 270, objectFit: 'cover' }} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <form>
                                            <div class="form-group">

                                                <input type="hidden" value={props.data} class="form-control" id="recipient-name" />
                                            </div>
                                            <div class="form-group">
                                                <label for="recipient-name" class="col-form-label">Email:</label>
                                                <input type="text" onChange={onChangeEmail} class="form-control" id="recipient-name" />
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="message-text" class="col-form-label">Nombre:</label>
                                                        <input type="text" onChange={onChangeName} class="form-control" id="recipient-name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="message-text" class="col-form-label">Teléfono:</label>
                                                        <input type="text" onChange={onChangePhoneNumber} class="form-control" id="recipient-name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Mensaje:</label>
                                                <textarea onChange={onChangeMessage} value="Hola, me interesa este inmueble que vi en Logística Inmobiliaria y quiero que me contacten. Gracias." class="form-control" id="message-text"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="col-form-label">Para continuar acepta nuetro <a href='/aviso-de-privacidad'>Aviso de privacidad</a></label>
                                                <div className='d-flex'>
                                                <p className='mt-2'>Eh leido y acepto </p>
                                                <input required className='m-3'  type="checkbox"/>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a className="btn btn-secondary" href="tel:9983387357">9983387357</a>
                            <button type="button" onClick={onSubmitSendServer} class="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormQuestion
