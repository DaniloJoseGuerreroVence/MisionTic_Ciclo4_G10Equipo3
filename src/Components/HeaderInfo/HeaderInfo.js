import React, { Component } from 'react';
import "./HeaderInfo.css"

class HeaderInfo extends Component{
    render(){
        return(
            // <div style={{backgroundColor:'blue'}}>

            <div className="cabezera">
              {/* <h2>{this.props.msg}</h2> */}

              <div class="top-left">
                    <a href="#"> Help 018000-123-1234 </a>
             </div>
             <div class="top-right">
                   <ul>                   
                       <li><a href="login.html">Inicia session</a></li>
                       <li><a href="registered.html"> Crea tu cuenta </a></li>
                   </ul>
              </div>

            </div>


            
             );
    }
}

export default HeaderInfo