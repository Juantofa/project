import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export const NavbarTab = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/">Lux Project</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                        <Nav.Link><Link to="/proyectos">Proyectos</Link></Nav.Link>
                        <Nav.Link><Link to="/equipos">Equipos</Link></Nav.Link>
                        <Nav.Link><Link to="/ayuda">Ayuda</Link></Nav.Link>
                        <Nav.Link><Link to="/perfil">Perfil</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to="/login">Iniciar Sesión</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
