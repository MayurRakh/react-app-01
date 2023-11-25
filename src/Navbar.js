import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from './Auth';

const Navigation = () => {
    const { logout, isLogin } = useAuth();
    return (
        <>
                <Navbar fixed='top' expand='sm' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Brand href='#'><img width={50} height={50} src='https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_640.jpg' alt="Navbar"></img></Navbar.Brand>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
                            { (!isLogin) ?
                                <Nav.Link as={Link} to="/">Login</Nav.Link>
                             :""
                            }   
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/dash">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </Nav>
                            <Nav>
                               { (isLogin) ? <NavDropdown title="logout" >
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :""
                               } 
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            <br /><br /><br /><br />
            <Outlet />

        </>
    )
}

export default Navigation