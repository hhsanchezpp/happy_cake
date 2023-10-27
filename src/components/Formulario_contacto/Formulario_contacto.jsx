import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import "./Formulario_contacto.css"

function Formulario_contacto() {
  const [mensaje, setMensaje] = useState("")
  const navigate = useNavigate()

  const enviar_mensaje = (e) =>{
    e.preventDefault()
      alert("Mensaje, enviado...")
      setMensaje("")
      navigate("/happy_cake")
  }
  return (
    <Form className='w-50 m-auto mt-3' onSubmit={enviar_mensaje}>
      <Form.Group className="mb-3">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control required value={mensaje} onChange={(e) => setMensaje(e.target.value)} as="textarea" rows={5} />
      </Form.Group>
      <button className='btn_form' type="submit">Enviar mensaje</button>
    </Form>
  );
}

export default Formulario_contacto;