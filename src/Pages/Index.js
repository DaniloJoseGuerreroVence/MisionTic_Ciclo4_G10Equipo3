import React from 'react';


import Info from '../Components/Info/';
import VisualizaccionDatos from '../Components/VisualizaccionDatos/';
import BarraNavegaccion from '../Components/BarraNavegaccion/';
//import VentanaModal from './Components/VentanaModal/';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Nav, Navbar, Container, Form, FormControl, Card } from 'react-bootstrap';
// import { FaBeer } from 'react-icons/fa'; //ejemplo uso de iconos 


import im1 from '../assets/img/b1.jpg';
import im2 from '../assets/img/b2.jpg';
import im3 from '../assets/img/b3.jpg';

//ejemplo uso de iconos

// class Icon extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer style={{color: 'blue',}} />? </h3>
//   }
// }


//ejemplo componente de funcion

// const App = () =>{
//   return (
//   <div>
//   <header>
//     <HeaderInfo msg="Hola mundo props"/>
//   </header>
// </div>
//   );
// }


const Index = (props) => {
    return (
        //  let csss ={background: '#1565c0', color: 'white', height: 300 };
        <div>
            <header>
                <BarraNavegaccion />
                {/*ejemplo  uso de iconos */}
                {/* <Icon/> */}

                {/*ejemplo uso de ventana modal */}
                {/* <VentanaModal textoBoton= "Presioname" titulo="Prueba" mensaje="I will not close if you click outside me"/>  */}

                <Info estilo="cabezera col-lg-12" />

                <Navbar style={{ background: '#0d59af', }} variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand >

                            <span className="fs-1 col-lg-4 offset-4" >Badminton Play</span>
                            {/* <span style={{ fontSize: 50, marginLeft: 185 }} >Badminton Play</span> */}

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">

                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link style={{ marginLeft: 150 }} href="#action1">Home</Nav.Link>

                            </Nav>

                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>


            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={im1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={im2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={im3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <h1 style={{ textAlign: 'center' }}>Eventos disponibles para apostar</h1>




            {/* <div class="col-3 offset-2" style={{ border: '1px solid #d0d0d0' }}>
        adasdasdasdad
      </div> */}

            {/* <span class="fs-1 col-md-4 offset-4" >Badminton Play</span> */}

            <VisualizaccionDatos
                //border: '1px solid #d0d0d0'
                // estilos={{ margin: '50px 250px 50px 250px' }}
                clases="col-lg-10 offset-lg-1"
                datos={
                    [
                        {
                            titulo: '',
                            descripccion:
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                        },
                        {

                            titulo: '',
                            descripccion:
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                        },
                        {

                            titulo: '',
                            descripccion:
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                        },
                        {

                            titulo: '',
                            descripccion:
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                        },

                        {

                            titulo: '',
                            descripccion:
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                        },
                        {

                            titulo: '',
                            descripccion:
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                        },
                        {

                            titulo: '',
                            descripccion:
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                        },
                        {

                            titulo: '',
                            descripccion:
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                        }

                    ]
                }
            />



            <VisualizaccionDatos
                clases="col-lg-12 offset-lg-0"               
                estilos={{ background: '#1565c0', color: 'white', padding: '20px 50px 200px 50px' }}
                datos={
                    [
                        {
                            titulo: 'About',
                            descripccion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
                        },
                        {
                            titulo: 'My Account',
                            descripccion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
                        },
                        {
                            titulo: 'Information',
                            descripccion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
                        },
                        {
                            titulo: 'Contacts',
                            descripccion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
                        },

                    ]
                }
            />



            <Info estilo="pie col-lg-12" msg="© 2021 Badminton Play. All rights reserved | Design by G17E3" />

        </div>

    );
}

export default Index;