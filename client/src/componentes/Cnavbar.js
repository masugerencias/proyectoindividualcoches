import React from 'react'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Form, Navbar, Container, Nav, NavLink, NavDropdown } from 'react-bootstrap'


/**
 * 
 * @returns Navbar
 */
const Cnavbar = () => {
return (


  <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rentacar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/vercoches">Vehículos</Nav.Link>

            {sessionStorage.getItem('userLogin') ? <li>{ <Nav.Link href="/bienvenido">Perfil</Nav.Link>}</li> : <li>{<Nav.Link href="/perfil">Identifícate</Nav.Link>}</li>}
            
             {/* Si esta lopgueado que se cambie por bienvenido! */}
            <Nav.Link href="/dondebarcelona">Dónde estamos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>





)

}

export default Cnavbar;