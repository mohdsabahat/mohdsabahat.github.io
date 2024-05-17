import { useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink as ReactRouterNavLink, NavLinkProps } from "react-router-dom";

import { NAVBAR_LINKS } from "../../utils/constants";

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

    const [isActive, setIsActive] = useState(false);

    const toggleNavbarCollapsedState = (isExpanded: boolean) => {
        setIsActive(isExpanded);
    }
    return (
        <Navbar expand="md" fixed="top"
            collapseOnSelect={true}
            onToggle={toggleNavbarCollapsedState}
        >
            <Container fluid={true}>
                {/* <Navbar.Brand as={Link} to="/">Sabahat</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto">
                    <div className={`toggle-btn ${isActive ? 'active' : 'not-active'}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {NAVBAR_LINKS && NAVBAR_LINKS.map((link, index) => (
                            <CustomNavLink to={link.to} eventKey={(index + 1).toString()} key={index}>{link.text}</CustomNavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;