import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../Stateless/Icons/CartWidget";
import { Button, Navbar, Nav, Container, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Link to="/" style={{textDecoration: "none"}}><Navbar.Brand>Logo</Navbar.Brand></Link>
          
            
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "200px" }}
                >
                    <Link to="/" style={{textDecoration: "none"}}><Nav.Link>Home</Nav.Link></Link>
                    <Nav.Link>About us</Nav.Link>
                    <NavDropdown title="Redes" id="navbarScrollingDropdown">
                    <NavDropdown.Item >Instagram</NavDropdown.Item>
                    <NavDropdown.Item >Twitter</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget cart={faShoppingCart}/>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
            
            
            
            
            <Navbar.Toggle aria-controls="navbarScroll" />
            
        </Container>
        </Navbar>
    </nav>
  );
};

export default Header;
