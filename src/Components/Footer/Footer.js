import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="row" style={this.props.estilos.join(",border:'1px solid Black'")}>

                {
                    this.props.datos.map(
                        (dato) => (
                            //style={{border: '1px solid Black',}}
                            <div className="col-3"  > 
                                <div className="fs-4 " > {dato.titulo}  </div>
                                <div > {dato.descripccion}</div>
                            </div>
                        )
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

export default Footer;


