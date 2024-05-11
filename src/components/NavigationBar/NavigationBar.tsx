import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import './NavigationBar.css';


const NavigationBar = () => {
    return (
        <Navbar expand="md" fixed="top">
            <Container fluid={true}>
                {/* <Navbar.Brand as={Link} to="/">Sabahat</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;