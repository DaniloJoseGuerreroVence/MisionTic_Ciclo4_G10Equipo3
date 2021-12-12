import React, { useState } from "react"

import json from "../../assets/others/Request.json";

import Info from '../../Components/Info/';
import VisualizaccionDatos from '../../Components/VisualizaccionDatos/';
import BarraNavegaccion from '../../Components/BarraNavegaccion/';
import Carusel from '../../Components/Carusel/';
import Menu from '../../Components/Menu/';


// const clik = () => {

 

//     // bus(LoginExtern);
//     setlogin(LoginExtern);
//     alert(LoginExtern);


// }

export default function Login(Props) {
    const [login, setlogin] = useState();



    // return <Name name={name}>;

    return (

        <div>
            {/* <BarraNavegaccion /> */}
        
            {/* <BarraNavegaccion /> */}

            {/*ejemplo  uso de iconos */}
            {/* <Icon/> */}

            {/*ejemplo uso de ventana modal */}
            {/* <VentanaModal textoBoton= "Presioname" titulo="Prueba" mensaje="I will not close if you click outside me"/>  */}

            <Info login={login} estilo="cabezera col-lg-12" />

            <Menu />

            <Carusel />

            <h1 style={{ textAlign: 'center' }}>Eventos disponibles para apostar</h1>

            <h3>Login</h3>

            <input type="button" value="Click Me" onClick={() => {setlogin(json.LoginExtern)}}></input>




            <VisualizaccionDatos
                clases="col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0"
                estilos={{ overflow: 'hidden', background: '#1565c0', color: 'white', padding: '20px 50px 200px 50px' }}
                datos={json.NavDelPie}
            />


            <Info estilo="pie col-lg-12" msg="© 2021 Badminton Play. All rights reserved | Design by G17E3" />

        </div>


    )

}
