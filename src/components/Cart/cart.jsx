import React from "react";
import { useCartContext } from "../../context/cartContext";
import ItemCart from './itemCart/itemCart'
import 'firebase/firestore'
import FormCart from './formCart/formCart'
import { Link } from "react-router-dom";
import './cart.css'

const Cart = () => {
    const { cartList, removeCart, total, cantCart } = useCartContext();

    return (
                <div className="shopping-cart">
                    {cartList.length > 0 ? (
                            <>                  
                                <div className="title Header">
                                    Carrito de compra
                                    <h5 className="Action" onClick={()=> removeCart()}>Remove all</h5>
                                </div>
                                    {cartList.map((e) =>(
                                        <ItemCart
                                        key={e.producto.id}
                                            id={e.producto.id}
                                            title={e.producto.title}
                                            image={e.producto.image}
                                            price={e.producto.price}
                                            category={e.producto.category}
                                            cantidad={e.cantidad}
                                            />
                                            ))}
                                <div className="checkout">
                                    <div className="total">
                                        <div>
                                            <div className="Subtotal">Total</div>
                                            <div className="items">Productos: {cantCart()} </div>
                                        </div>
                                        <div className="total-amount">$ {total()}</div>
                                        <FormCart/>
                                    </div>
                                </div>
                            </>
                        ) : 
                        <>
                            <h1 className="d-flex justify-content-center">Su carrito esta vacio</h1>
                            <div className="d-flex justify-content-center">
                                <Link to ="/"><button className="botonMain">Volver al catalogo ↩</button></Link>
                            </div>
                        </>
                    }
                </div>
    );
};

export default Cart;
