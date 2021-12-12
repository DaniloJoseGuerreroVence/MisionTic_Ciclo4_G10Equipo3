import React from 'react';
import { Button, Nav, Navbar, Container, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import BarraNavegaccion from '../BarraNavegaccion/';


export default function Menu(props) {

    return (

        <Navbar style={{ background: '#0d59af', }} variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand className="fs-1 col-lg-2 offset-1">PlayBadminton

                    {/* <span className="fs-1 col-lg-4 offset-4" > PlayBadminton</span> */}

                    {/* <span style={{ fontSize: 50, marginLeft: 185 }} >Badminton Play</span> */}

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        {

                            props.tipo === 'Externo' ? (
                                <>
                                    <Link className="nav-link" to="/">Home</Link>
                                    {/* <Nav.Link href="#action1">Home</Nav.Link> */}

                                    <NavDropdown title="Gestionar Cuenta" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/" disabled>
                                            APUESTAS
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <Link className="dropdown-item" to="/">Adicionar saldo</Link>
                                        <Link className="dropdown-item" to="/">Ver dashboard</Link>

                                    </NavDropdown>
                                </>

                            )
                                : props.tipo === 'Interno' ? (

                                    <>
                                        <Link className="nav-link" to="/">Home</Link>
                                        {/* <Nav.Link href="#action1">Home</Nav.Link> */}

                                        <NavDropdown title="Gestionar Cuenta" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="/" disabled>
                                                EVENTOS
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <Link className="dropdown-item" to="/">Configurar evento</Link>
                                            <Link className="dropdown-item" to="/">Reportes</Link>

                                        </NavDropdown>
                                    </>

                                ) :
                                    props.tipo === 'Admin' ? (
                                        <>
                                            <Link className="nav-link" to="/">Home</Link>
                                            {/* <Nav.Link href="#action1">Home</Nav.Link> */}

                                            <NavDropdown title="Gestionar Cuenta" id="navbarScrollingDropdown">
                                                <NavDropdown.Item href="/" disabled>
                                                    EVENTOS
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <Link className="dropdown-item" to="/">Configurar evento</Link>
                                                <Link className="dropdown-item" to="/">Reportes</Link>

                                            </NavDropdown>

                                            <NavDropdown title="Gestionar Cuenta" id="navbarScrollingDropdown">
                                                <NavDropdown.Item href="/" disabled>
                                                    GESTIONAR USUARIOS
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <Link className="dropdown-item" to="/">Ver usuarios internos</Link>
                                                <Link className="dropdown-item" to="/">Ver usuarios externos</Link>

                                            </NavDropdown>
                                        </>

                                    )
                                        : (

                                            <Link className="nav-link" to="/">Home</Link>

                                        )

                        }


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
            </Container >
        </Navbar >

    );
}

Menu.defaultProps = {
    login: { login: "false" }

}