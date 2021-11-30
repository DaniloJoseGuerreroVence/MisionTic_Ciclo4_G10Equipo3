import React, { Component } from 'react';
import "./HeaderInfo.css"

class HeaderInfo extends Component{
    render(){
        return(
            // <div style={{backgroundColor:'blue'}}>

            <div className={this.props.estilo}>
              {/* <h2>{this.props.msg}</h2> */}

              {/* <div class="top-left">
                    <span> Help 018000-123-1234 </span>
             </div> */}
             <div class="top-right">               
                   

                   <ul>                   
                       <li><a href="login.html">Inicia session</a></li>
                       <li><a href="registered.html"> Crea tu cuenta </a></li>
                   </ul>
                 
                                  
                   <ul>                   
                       <li><a href="login.html">© 2016 New Shop . All rights reserved | Design by W3layouts</a></li>
                   </ul>                   
                   
                
              </div>

            </div>


            
             );
    }
}

export default HeaderInfo