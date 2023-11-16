import React, { useContext } from 'react';
import './Header.css'
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthProvider';


const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <>
            <Navbar collapseOnSelect bg='dark' expand="lg" className="bg-body-tertiary">
                <Container>
                    <div>
                        <Navbar.Brand>
                            <Image ps-2 rounded style={{ height: "30px", width: "30px" }} src='/logo-5.svg'></Image>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            E-School
                        </Navbar.Brand>
                    </div>

                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link><h6>Courses</h6></Nav.Link>
                                <Nav.Link >
                                    <h6>FAQ</h6>
                                </Nav.Link>
                                <Nav.Link><h6>Blog</h6></Nav.Link>
                                <Nav.Link as={Link} >
                                    <h6>Theme</h6>
                                </Nav.Link>


                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <span>{user?.displayName}</span>
                                            </>
                                            :
                                            <>
                                                <Nav.Link as={Link} to="/login" >
                                                    <h6>Login</h6>
                                                </Nav.Link>
                                            </>
                                    }
                                </>

                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;