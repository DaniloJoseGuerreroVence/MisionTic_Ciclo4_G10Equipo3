// import React, { useState } from 'react';
import React from 'react';
import { Card } from 'react-bootstrap';

import VentanaModal from '../VentanaModal/';



export default function Tarjetas(props) {
    // const [estado, setEstado] = useState(1);

    // const pres = () => {

    //     setEstado(estado+1);
    // }


    return (
        <Card >
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                    {props.descripccion}
                </Card.Text>
                <br />
                {/* <Button variant="primary">Jugador 1</Button>{' '}
                <Button variant="secondary">Empate</Button>{' '}
                <Button variant="danger">Jugador 2</Button> */}
                {/* <div className="row">

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                </div>
                
            </div> */}

                <VentanaModal variant="primary" textoBoton={props.equipo1} textoBotonModal="Apostar" titulo="Realizar Apuesta" mensaje="I will not close if you click outside me" />{' '}
                <VentanaModal variant="secondary" textoBoton="Empate" textoBotonModal="Apostar" titulo="Realizar Apuesta" mensaje="I will not close if you click outside me" />{' '}
                <VentanaModal variant="danger" textoBoton={props.equipo2} textoBotonModal="Apostar" titulo="Realizar Apuesta" mensaje="I will not close if you click outside me" />


                {/* <input type="button" onClick={pres} value=""></input> */}
                {/* <Card.Link href="/">Link</Card.Link> */}

            </Card.Body>
        </Card>
    );


}