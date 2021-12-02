import React from 'react';
import { Link } from "react-router-dom";

const BarraNavegaccion = (props) => {

    return (

        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contacto">contacto</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>

        </div>

    );

}

export default BarraNavegaccion;