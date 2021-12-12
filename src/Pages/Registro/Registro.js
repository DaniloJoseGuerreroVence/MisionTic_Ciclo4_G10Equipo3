// import React, { useState } from "react"
import React from "react"

import json from "../../assets/others/Request.json";

import Info from '../../Components/Info/';
import VisualizaccionDatos from '../../Components/VisualizaccionDatos/';
import BarraNavegaccion from '../../Components/BarraNavegaccion/';
// import Carusel from '../../Components/Carusel/';
// import Menu from '../../Components/Menu/';

import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';


// const clik = () => {



//     // bus(LoginExtern);
//     setlogin(LoginExtern);
//     alert(LoginExtern);


// }

export default function Registro(Props) {
    // const [login, setlogin] = useState();



    // return <Name name={name}>;

    const fnLogin = (e) => {

        // return(
        e.preventDefault();       



    }

    return (

        <div>
            {/* <BarraNavegaccion /> */}


            {/*ejemplo  uso de iconos */}
            {/* <Icon/> */}

            {/*ejemplo uso de ventana modal */}
            {/* <VentanaModal textoBoton= "Presioname" titulo="Prueba" mensaje="I will not close if you click outside me"/>  */}

            <Info estilo="cabezera col-lg-12" />

            {/* <Menu login={login} /> */}
            <BarraNavegaccion />

            {/* <Carusel /> */}

            <h1 style={{ textAlign: 'center' }}>Registro en Badminton Play</h1>

            <div style={{ padding: '40px 0px 40px 0px', margin: '0% 35% 3% 35%', border: '1px solid', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>



                <Form onSubmit={fnLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl id="inlineFormInputGroup" placeholder="Email" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <InputGroup>
                            <InputGroup.Text>**</InputGroup.Text>
                            <FormControl type="password" id="inlineFormInputGroup2" placeholder="Password" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <InputGroup>
                            <InputGroup.Text>**</InputGroup.Text>
                            <FormControl type="password" id="inlineFormInputGroup2" placeholder="Confirma el Password" />
                        </InputGroup>
                    </Form.Group>                  


                    <Button variant="primary" type="submit">
                        Iniciar session
                    </Button>
                </Form>
            </div>
            {/* <form onSubmit={fnLogin}>

                <Form.Label>Tipo usuario</Form.Label>
                <Form.Select name="tipoUsuario" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Externo</option>
                    <option>Interno</option>
                    <option>Admin</option>
                </Form.Select>
                <Button variant="primary" type="submit">Iniciar session</Button  >


              

            </form> */}

            {/* <input type="button" value="Iniciar session " onClick={() => { setlogin(json.LoginExtern) }}></input> */}
            <VisualizaccionDatos
                clases="col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0"
                estilos={{ overflow: 'hidden', background: '#1565c0', color: 'white', padding: '20px 50px 200px 50px' }}
                datos={json.NavDelPie}
            />


            <Info estilo="pie col-lg-12" msg="© 2021 Badminton Play. All rights reserved | Design by G17E3" />

        </div>


    )

}
