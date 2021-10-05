import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../Stateless/Icons/CartWidget';
import { Button, Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap';

export default function navbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About us</Nav.Link>
                <NavDropdown title="Redes" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Instagram</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Twitter
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
		<CartWidget 
                    cart={faShoppingCart}/>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
