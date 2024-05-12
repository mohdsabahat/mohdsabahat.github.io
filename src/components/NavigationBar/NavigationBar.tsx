import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink as ReactRouterNavLink, NavLinkProps } from "react-router-dom";

import './NavigationBar.css';
import React from "react";

interface CustomNavLinkProps extends NavLinkProps {
    activeClassName?: string
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({to, className, children, ...rest}) =>{
    return (
        <Nav.Link as={ReactRouterNavLink} to={to} {...rest}
            style={{}}>
            {children as React.ReactNode}
        </Nav.Link>
    )
}

const NavigationBar = () => {
        return (
        <Navbar expand="md" fixed="top">
            <Container fluid={true}>
                {/* <Navbar.Brand as={Link} to="/">Sabahat</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <CustomNavLink to="/">Home</CustomNavLink>
                        <CustomNavLink to="/about">About</CustomNavLink>
                        <CustomNavLink to="/resume">Resume</CustomNavLink>
                        <CustomNavLink to="/skills">Skills</CustomNavLink>
                        <CustomNavLink to="/contact">Contact</CustomNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;