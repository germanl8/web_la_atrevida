import React from "react";
import Logo from "../img/logo_laatrevida.png";
import Portada from "../img/portada.webp";
import $ from 'jquery';
import { Navbar, Container, Nav, NavDropdown, Form, Offcanvas, FormControl, Button } from "react-bootstrap";


const Barrasup = () => {

    /*

    $(window).scroll(function () {
        if ($("#nav_menu").offset().top > 56) {
            $("#menu").addClass("bg-inverse");
        } else {
            $("#menu").removeClass("bg-inverse");
        }
    });

    */

    return (

        <div>




            <Navbar collapseOnSelect expand="lg" fixed="top" id="nav_menu">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} width="172" height="64" className="mx-auto" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className="colors_letters">Home</Nav.Link>
                            <NavDropdown title="Room & Rates" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Room 1 - Master Suite Atrevida</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Room 2 - Standard Double</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Room 3 - Standard Single</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Room 4 - American Tipi</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link" className="colors_letters">Our Property</Nav.Link>
                            <Nav.Link href="#link" className="colors_letters">Contact</Nav.Link>
                            <Nav.Link href="#link" className="colors_letters">Location</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div id="contenido_web1" className="mx-auto">
                <img src={Portada} alt="" width="100%" height="100%" />
            </div>
            <div id="contenido_web2" className="mx-auto"></div>
            <div id="contenido_web3" className="mx-auto"></div>

        

        </div>






    )



}
export default Barrasup;