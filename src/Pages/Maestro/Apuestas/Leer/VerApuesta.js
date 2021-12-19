import React, { useState } from 'react';
import { Tab, Col, Row, ListGroup } from 'react-bootstrap';

import json from "../../../../assets/others/Request.json";

import Info from '../../../../Components/Info/';
import VisualizaccionDatos from '../../../../Components/VisualizaccionDatos/';
import BarraNavegaccion from '../../../../Components/BarraNavegaccion/';
// import Carusel from '../../../../Components/Carusel/';
import Tabla from '../../../../Components/tabla/';
// import Menu from '../../Components/Menu/';
// import Tarjetas from '../Components/Tarjetas/';
//import VentanaModal from './Components/VentanaModal/';


import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button, Carousel, Nav, Navbar, Container, Form, FormControl, Card } from 'react-bootstrap';
// import { FaBeer } from 'react-icons/fa'; //ejemplo uso de iconos 


//ejemplo uso de iconos

// classs Icon extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer style={{color: 'blue',}} />? </h3>
//   }
// }


//ejemplo componente de funcion

// const App = () =>{
//   return (
//   <div>
//   <header>
//     <HeaderInfo msg="Hola mundo props"/>
//   </header>
// </div>
//   );
// }


const VerApuesta = ({ login, saldor, bus }) => {
    const [saldo, Setsaldo] = useState(saldor);

    const recibirSaldo = (saldoRecarga) => {
        Setsaldo(parseInt(saldo) + parseInt(saldoRecarga))
        console.log("desde verApuesta")
        console.log(saldoRecarga)
        bus(parseInt(saldo) + parseInt(saldoRecarga))
        // console.log(props.bus)       


    }


    // const EliminarApuesta = (saldoRecarga) => {
    //     Setsaldo(parseInt(saldo) + parseInt(saldoRecarga))
    //     console.log("desde verApuesta")
    //     console.log(saldoRecarga)
    //     bus(parseInt(saldo) + parseInt(saldoRecarga))
    //     // console.log(props.bus)       


    // }

    return (
        //  let csss ={background: '#1565c0', color: 'white', height: 300 };
        <div>
            {/* {saldo} */}

            {/*ejemplo  uso de iconos */}
            {/* <Icon/> */}

            {/*ejemplo uso de ventana modal */}
            {/* <VentanaModal textoBoton= "Presioname" titulo="Prueba" mensaje="I will not close if you click outside me"/>  */}

            <Info saldo={saldo} login={login} estilo="cabezera col-lg-12" />

            {/* <Menu /> */}
            {
                // console.log("Ppal->")
                // console.log(props.login)
            }
            <BarraNavegaccion bus={recibirSaldo} login={login} />


            <h1 style={{ margin: '5% 30% 1% 30%', textAlign: 'center' }}>Apuestas Activas</h1>

            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                        <ListGroup >
                            <ListGroup.Item style={{ background: "#3791f8" }} >
                                REPORTES
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link1">
                                Apuestas Activas
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Apuestas Ganadas
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                                Apuestas Perdidas
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                Historial de Apuestas
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <div style={{ margin: '0% 5% 5% 5%' }}>
                                    {/* busEliminar={}   busActualizar={} */}
                                    <Tabla columnas={["Id apuesta", "fecha de la apuesta", "fecha maxima de cacelaccion", "Monto apostado", "Resultado de la apuesta", "acciones"]} campos={["_id", "fechaApuesta", "fechaMaxCancelaccion", "valorApuesta", "resultadoApuesta"]} registros={json.ReporteApuestas} />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <div style={{ margin: '0% 5% 5% 5%' }}>
                                    <Tabla columnas={["Id apuesta", "fecha de la apuesta", "fecha maxima de cacelaccion", "Monto apostado", "Resultado de la apuesta", "acciones"]} campos={["_id", "fechaApuesta", "fechaMaxCancelaccion", "valorApuesta", "resultadoApuesta"]} registros={json.ReporteApuestas} />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <div style={{ margin: '0% 5% 5% 5%' }}>
                                    <Tabla columnas={["Id apuesta", "fecha de la apuesta", "fecha maxima de cacelaccion", "Monto apostado", "Resultado de la apuesta", "acciones"]} campos={["_id", "fechaApuesta", "fechaMaxCancelaccion", "valorApuesta", "resultadoApuesta"]} registros={json.ReporteApuestas} />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <div style={{ margin: '0% 5% 5% 5%' }}>
                                    <Tabla columnas={["Id apuesta", "fecha de la apuesta", "fecha maxima de cacelaccion", "Monto apostado", "Resultado de la apuesta", "acciones"]} campos={["_id", "fechaApuesta", "fechaMaxCancelaccion", "valorApuesta", "resultadoApuesta"]} registros={json.ReporteApuestas} />
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>


            {/* 
            <VisualizaccionDatos
                //border: '1px solid #d0d0d0'
                // estilos={{ margin: '50px 250px 50px 250px' }}
                clases="row col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1"
                componente="Tarjeta"
                datos={json.Apuestas}
            /> */}

            <VisualizaccionDatos
                clases="col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0"
                estilos={{ overflow: 'hidden', background: '#1565c0', color: 'white', padding: '20px 50px 200px 50px', margin: '50px 0px 0px 0px' }}
                datos={json.NavDelPie}
            />


            <Info estilo="pie col-lg-12" msg="© 2021 Badminton Play. All rights reserved | Design by G17E3" />

        </div>

    );
}

export default VerApuesta;