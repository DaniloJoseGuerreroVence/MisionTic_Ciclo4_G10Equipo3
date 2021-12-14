import React from 'react';
import { Link } from "react-router-dom";
// import { Nav, NavDropdown } from 'react-bootstrap';

import Menu from '../Menu/';


function BarraNavegaccion(props) {

    return (
        <div>
            {
                props.menu === 'superior' ? (

                    props.login.Login === 'true' ? (
                        <div>
                            <span>Bienvenido: {props.login.Nombre} ({props.login.TipoUsuario}) , su saldo es $0.00  </span><Link style={{ color: 'White', textDecoration: 'none' }} to="/logout">Cerrar session</Link>
                        </div>
                    )
                        :
                        (
                            <div>
                                <Link style={{ color: 'White', textDecoration: 'none' }} to="/login">Inicia session</Link>{' / '}
                                <Link style={{ color: 'White', textDecoration: 'none' }} to="/Registro">Crea tu cuenta</Link>
                            </div>
                        )







                ) : (



                    <Menu tipo={props.login.TipoUsuario} />


                )



            }
        </div >
    );

}


BarraNavegaccion.defaultProps = {
    login: { Login: "false" }

}

export default BarraNavegaccion;