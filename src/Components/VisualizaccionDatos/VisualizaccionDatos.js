import React, { Component } from 'react';
import Tarjetas from '../Tarjetas/';

class VisualizaccionDatos extends Component {
    state = { random: 0 }

    render() {
        // console.log(this.props.datos) ;
        // const min = 1;
        // const max = 1000000;
        // const rand = Math.round(min + Math.random() * (max - min));

        // this.setState({ random: this.state.random + rand }
        return (
            <div className={this.props.clases} style={this.props.estilos}>

                {/* {this.props.datos} */}
                {
                    this.props.datos.map(
                        (dato, index) => {

                            // col-lg-10 offset-md-1
                            return (
                                // <div>
                                <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ float: 'right', margin: '10px 0px 10px 0px' }}>

                                {
                                    this.props.componente === 'Tarjeta' ?
                                    <Tarjetas titulo={dato.titulo}  descripccion={dato.descripccion} equipo1={dato.equipo1} equipo2={dato.equipo2}/>                                 
                                    :
                                    <div>
                                        <div className="fs-4 " > {dato.titulo}  </div>
                                        <div>{dato.descripccion}</div>
                                    </div>
                                }

                                </div>
                            );
                        }
                    )
                }

            </div>


            // <div className="row" style={{ background: '#1565c0', color: 'white', height: 300 }}>
            //     <div className="col-3">
            //         <div className="fs-4 " > About </div>
            //         <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
            //     </div>
            //     <div className="col-3">
            //         <div className="fs-4 " > My Account </div>
            //         <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
            //     </div>
            //     <div className="col-3">
            //         <div className="fs-4 " > Information </div>
            //         <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
            //     </div>
            //     <div className="col-3">
            //         <div className="fs-4 " > Contacts </div>
            //         <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
            //     </div> 
            // </div>


        );
    }
}

export default VisualizaccionDatos;


