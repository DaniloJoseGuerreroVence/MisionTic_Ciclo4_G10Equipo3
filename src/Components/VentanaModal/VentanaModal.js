import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

export default function VentanaModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={props.variant} onClick={handleShow}>
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
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Monto a apostar</Form.Label>
                  <Form.Control type="text" placeholder="$0" />
                  <Form.Label>Resultado apostado</Form.Label>
                  <Form.Control type="text" placeholder={props.textoBoton} readOnly />
                </Form.Group>
              </Form>
              :
              props.mensaje
          }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary">{props.textoBotonModal}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  // render(<Example />);
}



