import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './iconStyle.css';
import { Link } from 'react-router-dom';

const CartWidget = ( {cart} ) => {

    return (
        <Link to="/cart">
            <span className="icons">
                <FontAwesomeIcon icon={cart} />
            </span>
        </Link>
    )
}
export default CartWidget
