import React from 'react';
import './Header.css'
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
        <Navbar collapseOnSelect bg="primary" data-bs-theme="light" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                            
                    </div>

                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link>More deets</Nav.Link>
                                <Nav.Link >
                                    Dank memes
                                </Nav.Link>
                                <Nav.Link>More deets</Nav.Link>
                                <Nav.Link>
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            </div>
    );
};

export default Header;