import React from 'react';
// import PropTypes from 'prop-types'  ;
import "./Info.css";
// import { Link } from "react-router-dom";
import BarraNavegaccion from '../BarraNavegaccion/BarraNavegaccion';


function Info(props) {

    //No es Obligatorio si se usan defaultProps
    // constructor(props){  
    //     super(props)  
    //     }  




    // const saldoR = (saldo) => {
    //     console.log("desde info ")
    //     console.log(saldo)

    // }

    return (

        // <div style={{backgroundColor:'blue'}}>

        <div className={props.estilo}>

            {/* 
                    <div class="top-left">
                        <span> Help 018000-123-1234 </span>
                    </div> 
                */}

            <div className="top-right">

                {
                    props.msg !== '' ?
                        <ul>
                            <li>{props.msg}</li>
                        </ul>
                        :
                        <ul>
                            {/* {"=> "}{this.props.login.TipoUsuario}{'_'} */}
                            <BarraNavegaccion saldo={props.saldo} login={props.login} menu='superior' />
                        </ul>
                }

            </div>

        </div>



    );

}


// HeaderInfo.propTypes = {  
//     productName: PropTypes.string.isRequired,  
//     productPrice: PropTypes.number  
// }      


Info.defaultProps = {
    msg: '',
    login: { Login: "false" }

}

export default Info