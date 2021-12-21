import React from 'react';
import { Link } from "react-router-dom";
// import { Nav, NavDropdown } from 'react-bootstrap';

import Menu from '../Menu/';


function BarraNavegaccion(props) {

    // const [saldo, Setsaldo] = useState({ saldo: 0 });

    const recibirSaldo = (saldoRecarga) => {
        // Setsaldo(saldoRecarga.saldo)
        console.log("desde barraN")
        console.log(saldoRecarga.saldo)
        props.bus(saldoRecarga.saldo)
        // console.log(props.bus)      



    }

    // useEffect(() => {

    //     recibirSaldo(saldo.saldo);

    // });



    return (
        <div>
            {
                props.menu === 'superior' ? (

                    props.login.token !== undefined ? (
                        <div>
                            
                            <span>Bienvenido: {props.login.Nombre} ({props.login.TipoUsuario}) , su saldo es ${props.saldo},</span><Link style={{ color: 'White', textDecoration: 'none' }} to="/logout">Cerrar session</Link>
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
                    <>                    
                    <Menu bus={recibirSaldo} login={props.login} />
                    </>
                )
            }
        </div >
    );

}


BarraNavegaccion.defaultProps = {
    login: { Login: "false" }

}

export default BarraNavegaccion;