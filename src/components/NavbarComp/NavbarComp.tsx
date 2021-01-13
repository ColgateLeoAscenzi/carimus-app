import React from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const NavbarComp:React.FunctionComponent = () => {
    return(
        <>

    <Navbar expand="lg">
    <img id = "CarimusLogo" src={process.env.PUBLIC_URL+"/logo-header.png"} alt="Logo" /><Navbar.Brand id = "Arimus">ARIMUS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="/about" className = "navElem">About</Nav.Link>
        <Nav.Link href="/work" className = "navElem">Work</Nav.Link>
        <NavDropdown title="Services" id="dropdown-nav" className = "navElem" style={{color:"white!important"}}>
            <NavDropdown.Item >Strategy</NavDropdown.Item>
            <NavDropdown.Item >Creative</NavDropdown.Item>
            <NavDropdown.Item >Development</NavDropdown.Item>
            <NavDropdown.Item >Maintenance</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/careers" className = "navElem">Careers</Nav.Link>
        <Nav.Link href="/news" className = "navElem">News</Nav.Link>
        <Nav.Link href="/contact" className = "navElem">Contact</Nav.Link>
        </Nav>
        <Form inline>
        <Button variant=""><FontAwesomeIcon icon={faSearch} color = "#78E690" /></Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>

        </>
    );
}

export default NavbarComp;