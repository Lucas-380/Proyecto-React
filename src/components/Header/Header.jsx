import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../Stateless/Icons/CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
        <Navbar className="personalizado" variant="dark" expand="lg">
            <Container fluid>
                    <Link to="/" style={{textDecoration: "none"}} className="styleNav">
                        <div className="logo"></div>
                    </Link>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: "200px"}} navbarScroll>
                        <Link  to="/" style={{textDecoration: "none"}} className="styleNav">Inicio</Link>
                        <Link  to="/" style={{textDecoration: "none"}} className="styleNav">Catalogo</Link>
                        <Nav.Link>Cuenta</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <CartWidget cart={faShoppingCart}/>
                <Navbar.Toggle aria-controls="navbarScroll" />
            </Container>
        </Navbar>
    </header>
  );
};

export default Header;
