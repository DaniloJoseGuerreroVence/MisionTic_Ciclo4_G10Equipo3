import React from 'react';
import { Link } from "react-router-dom";

const BarraNavegaccion = (props) => {

    return (

        <div>
            
            {
                props.menu === 'superior' ? (
                    
                    props.login.Login === 'true' ? (
                        <div>
                            <p>Bienvenido: xxxxx {props.login.TipoUsuario}, su saldo el $0.00  </p>
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
                    <div style={{ marginLeft: 150 }}>
                        <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/">Home</Link>
                        <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/contacto">contacto</Link>
                        <Link style={{ marginLeft: 15, fontSize: '20px', color: 'White', textDecoration: 'none' }} to="/users">Users</Link>

                    </div>
                )


            }

        </div>




    );

}

export default BarraNavegaccion;