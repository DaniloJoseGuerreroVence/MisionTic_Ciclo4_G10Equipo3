import { useState } from 'react';
import HeaderInfo from './Components/HeaderInfo/';
// import "./components/HeaderInfo/Header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Nav, Navbar, Container, NavDropdown, Form, FormControl, Card, Modal } from 'react-bootstrap';

// import im1 from '../../public/b1.jpg';
import im1 from '../src/assets/img/b1.jpg';
import im2 from '../src/assets/img/b2.jpg';
import im3 from '../src/assets/img/b3.jpg';


// const App = () =>{
//   return (
//   <div>
//   <header>
//     <HeaderInfo msg="Hola mundo props"/>
//   </header>
// </div>
//   );
// }

function App() {
  return (
    <div>
      <header>
        <HeaderInfo estilo="cabezera" msg=" " />


        <Navbar style={{ background: '#0d59af', }} variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand ><span style={{ fontSize: 50, marginLeft: 185 }}>Badminton Play</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

                <Nav.Link style={{ marginLeft: 50 }} href="#action1">Home</Nav.Link>

                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}

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


      <h1>Eventos disponibles para apostar</h1>


      <Card style={{ width: '18rem' }}>
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

      {/* <Example /> */}

      <div className="row" style={{ background: '#1565c0', color: 'white', height: 300 }}>
        <div className="col-3">
          <div className="fs-4 " > About </div>
          <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
        </div>
        <div className="col-3">
          <div className="fs-4 " > My Account </div>
          <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
        </div>
        <div className="col-3">
          <div className="fs-4 " > Information </div>
          <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
        </div>
        <div className="col-3">
          <div className="fs-4 " > Contacts </div>
          <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
        </div>
      </div>


      {/* <div className="container">
<div className="row">
  <div className="col">
    Column
  </div>
  <div className="col">
    Column
  </div>
  <div className="col">
    Column
  </div>
</div>
</div> */}

<HeaderInfo estilo="pie" msg="© 2016 New Shop . All rights reserved | Design by W3layouts" />

    </div>

  );
}


function Example() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  // render(<Example />);
}

export default App;