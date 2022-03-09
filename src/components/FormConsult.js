import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
const FormConsult = () => {
    
    const [email, setEmail] =useState(null);
    const [name, setName] = useState(null);
    const [lastname, setLastname] = useState('');
    const [tel, setPhoneNumber] = useState('');




    
    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const onChangeName = (e)=>{
        setName(e.target.value)
    }
    const onChangeLastname = (e)=>{
        setLastname(e.target.value)
    }
    const onChangePhoneNumber = (e)=>{
        setPhoneNumber(e.target.value)
    }


    

    const onSubmitSendServer = async (e)=>{
        e.preventDefault()
        console.log(name)
        var user = {
            name,
            email,
            lastname,
            tel
        }
        await axios.post('https://logis.live/api/messageConsult', user).then((res)=>swal("Se a enviado correctamente", {
            icon: "success"
        })).catch((err)=>{swal("Upps!, Lo sentimos, a ocurrido un error", {
            icon: "error"
        })})
    }
    return (
        <div className="row">
        <div className="col-md-6 mt-4">
            <h3 className="text-white">
                Contactanos Sin ningun compromiso
            </h3>
            <p className="text-white">
            Envia tus datos y nos aseguraremos de contactarte lo mas antes posible para aclarar alguna duda o consulta Gracias.
            </p>
        </div>
        <div className="col-md-6 mt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" onChange={onChangeName} required className="form-control" placeholder="Nombre" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" onChange={onChangeLastname} className="form-control" placeholder="Apellido" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" onChange={onChangeEmail} required className="form-control" placeholder="Email" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" onChange={onChangePhoneNumber} className="form-control" placeholder="Numero telefonico (opcional)" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <button onClick={onSubmitSendServer} className="btn btn-success full-width">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FormConsult
