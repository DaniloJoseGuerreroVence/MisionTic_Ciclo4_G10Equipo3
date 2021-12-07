// import React, { useState } from 'react';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



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
                <Button variant="primary">Jugador 1</Button>{' '}
                <Button variant="secondary">Empate</Button>{' '}
                <Button variant="danger">Jugador 2</Button>
                {/* <input type="button" onClick={pres} value=""></input> */}
                {/* <Card.Link href="/">Link</Card.Link> */}
              
            </Card.Body>
        </Card>
    );


}