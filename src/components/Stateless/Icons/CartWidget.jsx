import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './iconStyle.css';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../../context/cartContext";

const CartWidget = ( {cart} ) => {
    const {cantCart} = useCartContext()

    return (
                <Link to="/cart" style={{textDecoration:"none"}}>
                    {cantCart && cantCart ? (
                        <span className="icons">
                            {cantCart && cantCart}
                            <FontAwesomeIcon icon={cart} className="mx-1" />
                        </span>
                    ):  <></>
                    }         
                </Link>
    )
}
export default CartWidget
