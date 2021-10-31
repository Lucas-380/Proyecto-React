import React from "react";
import { useCartContext } from "../../context/cartContext";
import ItemCart from '../itemCart/itemCart'

const Cart = () => {
    const { cartList, removeCart, total } = useCartContext();

    return (
        <>
            <div className="container-flex bodyCart">
            <div className="CartContainer">
        
                 {cartList.length > 0 ? (
                        <>
                            <div className="Header">
                                <h3 className="Heading">Carrito de compra</h3>
                                <h5 className="Action" onClick={()=> removeCart()}>Remove all</h5>
                            </div>
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
                            <hr/> 
                            <div className="checkout">
                            <div className="total">
                                <div>
                                    <div className="Subtotal">Sub-Total</div>
                                    <div className="items">2 items</div>
                                </div>
                                <div className="total-amount">${total}</div>
                            </div>
                            <button className="button">Finalizar Compra</button></div>
                        </>
                    ) : 
                    <h1>CARRITO VACIO</h1>
                }
                </div>
        </div>
        </>
    );
};

export default Cart;
