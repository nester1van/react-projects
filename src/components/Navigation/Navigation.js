import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer exact to="/">
                    <Navbar.Brand><span className="brand">React Projects</span></Navbar.Brand>
                </LinkContainer> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to="/">
                    <Button variant="dark" size="lg">Home</Button>
                </LinkContainer>
                <LinkContainer to="/randompictdog">
                    <Button variant="dark" size="lg">Random dog picture</Button>
                </LinkContainer>
                <LinkContainer to="/dogpictsbybreed">
                    <Button variant="dark" size="lg">Dog pictures by breed</Button>
                </LinkContainer>
                <LinkContainer to="/githubclient">
                    <Button variant="dark" size="lg">GitHub Client</Button>
                </LinkContainer>            
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;