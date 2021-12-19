import React, { useState, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

// import Tabla from '../tabla/';

export default function VentanaModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputSaldo = useRef(null);
  const inputApuesta = useRef(null);


  let funcion = ""

  const ConfigurarEvento = () => {
    // let saldo = {apuesta: inputApuesta.current.value}
    console.log("Configurar evento=>")
    // console.log({id:props.id})
    // props.bus({ saldo })
    // handleClose()
  }



  const CancelarApuesta = () => {
    // let saldo = {apuesta: inputApuesta.current.value}
    // console.log("CancelarApuesta=>" + props.id)
    console.log({ id: props.id })
    // props.bus({ saldo })
    // handleClose()
  }



  const RealizarApuesta = (e) => {
    let saldo = { apuesta: inputApuesta.current.value }
    console.log("apuesta=>")
    console.log(saldo)
    // props.bus({ saldo })
    handleClose()
  }


  const recargaSaldo = (e) => {

    // let saldo = window.Recarga.monto.value
    let saldo = inputSaldo.current.value

    // alert("ww")
    console.log("=>" + inputSaldo.current.value)
    // console.log(window.Recarga.monto.value)
    props.bus({ saldo })
    handleClose()
  }

  // funcion=RealizarApuesta

  return (
    <>
      <Button className={props.clases} variant={props.variant} onClick={handleShow}>
        {props.textoBoton}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>  {props.titulo}   </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {

            props.titulo === 'Realizar Apuesta' ?
              <>
                {funcion = RealizarApuesta}
                < Form >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Monto a apostar</Form.Label>
                    <Form.Control ref={inputApuesta} type="text" placeholder="$0" />
                    <Form.Label>Resultado apostado</Form.Label>
                    <Form.Control type="text" placeholder={props.textoBoton} readOnly />
                  </Form.Group>
                </Form>
              </>
              :
              props.titulo === 'Recargar Saldo' ?
                <>
                  {funcion = recargaSaldo}

                  <Form id="Recarga" onSubmit={recargaSaldo}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Monto a recargar</Form.Label>
                      <Form.Control ref={inputSaldo} name="monto" type="text" placeholder="Monto $$" />
                    </Form.Group>

                  </Form>
                </>
                :
                props.titulo === 'Cancelar Apuesta' ?
                  <>
                    {funcion = CancelarApuesta}

                    <Form >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Esta seguro que desea cancelar la apuesta {props.id} ?</Form.Label>
                      </Form.Group>
                    </Form>
                  </>
                  :
                  props.titulo === 'Configurar evento' ?
                    <>
                      {funcion = ConfigurarEvento}

                      <Form >

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Descripcion del evento</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                          <br />
                          <Form.Label>Resultados del evento</Form.Label>
                          {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                              <Form.Check
                                inline
                                label="Gana Grupo 1"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                inline
                                label="Gana Grupo 2"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                              <Form.Check
                                inline
                                label="Empate"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                            </div>
                          ))}


                          <Form.Label>Fecha maxima de cancelaccion</Form.Label>
                          <Form.Control type="text" placeholder="Normal text" />
                        </Form.Group>

                      </Form>

                    </>
                    :
                    props.mensaje
          }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={funcion}>{props.textoBotonModal}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  // render(<Example />);
}



