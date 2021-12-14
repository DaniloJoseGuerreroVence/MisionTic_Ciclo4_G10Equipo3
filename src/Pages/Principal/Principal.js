import React from 'react';

import json from "../../assets/others/Request.json";

import Info from '../../Components/Info/';
import VisualizaccionDatos from '../../Components/VisualizaccionDatos/';
import BarraNavegaccion from '../../Components/BarraNavegaccion/';
import Carusel from '../../Components/Carusel/';
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


const Principal = (props) => {
    return (
        //  let csss ={background: '#1565c0', color: 'white', height: 300 };
        <div>
            {/* {props.d} */}

            {/*ejemplo  uso de iconos */}
            {/* <Icon/> */}

            {/*ejemplo uso de ventana modal */}
            {/* <VentanaModal textoBoton= "Presioname" titulo="Prueba" mensaje="I will not close if you click outside me"/>  */}

            <Info login={props.login} estilo="cabezera col-lg-12" />

            {/* <Menu /> */}
            {
            // console.log("Ppal->")
            // console.log(props.login)
            }
            <BarraNavegaccion login={props.login} />


            <Carusel />

            <h1 style={{ textAlign: 'center' }}>Eventos disponibles para apostar</h1>

            <VisualizaccionDatos
                //border: '1px solid #d0d0d0'
                // estilos={{ margin: '50px 250px 50px 250px' }}
                clases="row col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1"
                componente="Tarjeta"
                datos={json.Apuestas}
            />




            <VisualizaccionDatos
                clases="col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0"
                estilos={{ overflow: 'hidden', background: '#1565c0', color: 'white', padding: '20px 50px 200px 50px' }}
                datos={json.NavDelPie}
            />


            <Info estilo="pie col-lg-12" msg="© 2021 Badminton Play. All rights reserved | Design by G17E3" />

        </div>

    );
}

export default Principal;