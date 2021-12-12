import React from 'react';
import { Button,Nav, Navbar, Container, Form, FormControl } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import BarraNavegaccion from '../BarraNavegaccion/BarraNavegaccion';


export default function Menu (props) {

    return (

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
                        {/* <Nav.Link style={{ marginLeft: 150 }} href="/">Home</Nav.Link> */}

                        <BarraNavegaccion />

                        {/* <Link to="/">Home</Link> */}


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

    );
}