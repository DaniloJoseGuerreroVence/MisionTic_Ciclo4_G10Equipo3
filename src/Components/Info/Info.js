import React, { Component } from 'react';
// import PropTypes from 'prop-types'  ;
import "./Info.css";
// import { Link } from "react-router-dom";
import BarraNavegaccion from '../BarraNavegaccion/BarraNavegaccion';


class Info extends Component {

    //No es Obligatorio si se usan defaultProps
    // constructor(props){  
    //     super(props)  
    //     }  


    render() {
        return (
            // <div style={{backgroundColor:'blue'}}>

            <div className={this.props.estilo}>

                {/* 
                    <div class="top-left">
                        <span> Help 018000-123-1234 </span>
                    </div> 
                */}

                <div className="top-right">

                    {
                        this.props.msg !== '' ?
                            <ul>
                                <li>{this.props.msg}</li>
                            </ul>
                            :
                            <ul>
                                {/* {"=> "}{this.props.login.TipoUsuario}{'_'} */}
                                <BarraNavegaccion login={this.props.login} menu='superior' />
                            </ul>
                    }

                </div>

            </div>



        );
    }
}


// HeaderInfo.propTypes = {  
//     productName: PropTypes.string.isRequired,  
//     productPrice: PropTypes.number  
// }      


Info.defaultProps = {
    msg: '',
    login: {Login:"false"}

}

export default Info