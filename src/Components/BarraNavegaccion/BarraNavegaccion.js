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
                            <spam>Bienvenido: {props.login.Nombre} ({props.login.TipoUsuario}) , su saldo es $0.00</spam>
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
                    props.login.Login === 'true' ? (

                        <Menu tipo={props.login.TipoUsuario} />

                    ) : (

                        <Menu tipo={props.login.TipoUsuario} />
                    )

                )



            }
        </div >
    );

}


// const BarraNavegaccion = (props) => {

//     return (

//         <div>

//             {
//                 props.menu === 'superior' ? (

//                     props.login.Login === 'true' ? (
//                         <div>
//                             <spam>Bienvenido: xxxxx {props.login.TipoUsuario}, su saldo el $0.00</spam>
//                         </div>
//                     )
//                         :
//                         (
//                             <div>
//                                 <Link style={{ color: 'White', textDecoration: 'none' }} to="/login">Inicia session</Link>{' / '}
//                                 <Link style={{ color: 'White', textDecoration: 'none' }} to="/Registro">Crea tu cuenta</Link>
//                             </div>
//                         )
//                 ) : (



//                     props.login.Login === 'true' ? (


//                         props.login.TipoUsuario === 'Externo' ?
//                             (
//                                 <div>

//                                     <Menu/>
//                                     {
//                                     /* <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/">Home</Link>
//                                     <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/contacto">Gestionar Cuenta</Link> */}


//                                     {/* <Nav
//                                         className="me-auto my-2 my-lg-0"
//                                         style={{ maxHeight: '100px' }}
//                                         navbarScroll
//                                     >

//                                         <Link style={{ padding: 3, marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/">Home</Link>



//                                         <NavDropdown title="Gestionar Cuenta" id="navbarScrollingDropdown">
//                                             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                             <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item href="#action5">
//                                                 Something else here
//                                             </NavDropdown.Item>
//                                         </NavDropdown>
//                                     </Nav> */}
//                                 </div>

//                             )
//                             :
//                             props.login.TipoUsuario === 'Interno' ?
//                                 (
//                                     <div style={{ marginLeft: 150 }}>
//                                         <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/">Home</Link>
//                                         <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/contacto">contacto</Link>
//                                         <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/users">Users</Link>

//                                     </div>

//                                 )
//                                 :
//                                 props.login.TipoUsuario === 'Admin' ? (
//                                     <div style={{ marginLeft: 150 }}>
//                                         <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/">Home</Link>
//                                         <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/contacto">contacto</Link>
//                                         <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/users">Users</Link>

//                                     </div>

//                                 ) : null


//                     ) : (

//                         <div style={{ marginLeft: 150 }}>
//                             <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/">Home</Link>
//                             <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/contacto">contacto</Link>
//                             <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/users">Users</Link>

//                         </div>

//                     )

//                 )


//             }

//         </div >




//     );

// }

BarraNavegaccion.defaultProps = {
    login: { Login: "false" }

}

export default BarraNavegaccion;