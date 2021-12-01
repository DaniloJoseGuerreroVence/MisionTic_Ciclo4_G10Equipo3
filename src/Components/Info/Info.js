import React, { Component } from 'react';
// import PropTypes from 'prop-types'  ;
import "./Info.css";


class Info extends Component {

    //Obligatorio si se usan defaultProps
    constructor(props){  
        super(props)  
        }  


    render() {
        return (
            // <div style={{backgroundColor:'blue'}}>

            <div className={this.props.estilo}>                

                {/* 
                    <div class="top-left">
                        <span> Help 018000-123-1234 </span>
                    </div> 
                */}

                <div class="top-right">

                    {
                        this.props.msg !='' ?
                        <ul>
                            <li>{this.props.msg}</li>
                        </ul>
                        :
                        <ul>
                            <li><a href="login.html">Inicia session</a></li>
                            <li><a href="registered.html"> Crea tu cuenta </a></li>
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
    msg:''
} 

export default Info