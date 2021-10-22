import React from "react";
import { useCartContext } from "../../context/cartContext";
import { Card, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, removeCart } = useCartContext();
  
    console.log(cartList);


  return (
    <div className="container">
        <button className="btn btn-danger m-3" onClick={()=> removeCart()}>Vaciar Carrito</button>
        <div className="row center">
        {cartList && cartList.map(prod => 
            <Card className="mx-3" id={prod.producto.id} style={{ width: "20rem" }}>
                <Card.Img variant="top" style={{ width: "10rem", margin:"auto"}} src={prod.producto.image} />
                <Card.Body>
                <Card.Title>{prod.producto.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Badge bg="dark" className="mx-1">Categoria</Badge>{prod.producto.category}</ListGroupItem>
                    <ListGroupItem><Badge bg="dark" className="mx-1">Precio</Badge>$ {prod.producto.price}</ListGroupItem>
                    <ListGroupItem><Badge bg="dark" className="mx-1">Cantidad</Badge>{prod.cantidad}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to="/"><Card.Link >Seguir Comprando</Card.Link></Link>
                </Card.Body>
            </Card> )}
        </div>
    </div>
    );
};

export default Cart;
