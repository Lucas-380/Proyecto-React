import React from "react";
import { useCartContext } from "../../context/cartContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCart from '../itemCart/itemCart'

const Cart = () => {
    const { cartList, removeCart, total } = useCartContext();

    return (
        <>
            <div className="container m-5">
                <div className="">
                    {cartList.length > 0 ? (
                        <>
                        <button className="btn btn-danger mb-4 mx-2" onClick={()=> removeCart()}>Vaciar Carrito</button>
                        <h1>Total = {total} </h1>
                            {cartList.map((e) =>(
                                <ItemCart
                                    id={e.producto.id}
                                    title={e.producto.title}
                                    image={e.producto.image}
                                    price={e.producto.price}
                                    category={e.producto.category}
                                    cantidad={e.cantidad}
                                    />
                                    ))}
                            
                        </>
                    ) : 
                    <h1>CARRITO VACIO</h1>
                }
                <Link to="/"><Card.Link>Seguir Comprando</Card.Link></Link>
                </div>
            </div>
        </>
    );
};

export default Cart;
