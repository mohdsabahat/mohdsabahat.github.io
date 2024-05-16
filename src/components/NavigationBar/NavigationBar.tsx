import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink as ReactRouterNavLink, NavLinkProps } from "react-router-dom";

import './NavigationBar.css';
import React from "react";

interface CustomNavLinkProps extends NavLinkProps {
    eventKey?: string
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({to, className, children, eventKey, ...rest}) =>{
    return (
        <Nav.Link as={ReactRouterNavLink} to={to} {...rest} eventKey={eventKey}
            style={{}}>
            {children as React.ReactNode}
        </Nav.Link>
    )
}

const NavigationBar = () => {
        return (
        <Navbar expand="md" fixed="top"
            collapseOnSelect={true}
        >
            <Container fluid={true}>
                {/* <Navbar.Brand as={Link} to="/">Sabahat</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <CustomNavLink to="/" eventKey="1">Home</CustomNavLink>
                        <CustomNavLink to="/about" eventKey="2">About</CustomNavLink>
                        <CustomNavLink to="/resume" eventKey="3">Resume</CustomNavLink>
                        <CustomNavLink to="/projects" eventKey="4">Projects</CustomNavLink>
                        <CustomNavLink to="/contact" eventKey="5">Contact</CustomNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;