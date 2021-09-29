import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './iconStyle.css';

const CartWidget = ( {cart} ) => {
    return (
        <span className="icons">
            <FontAwesomeIcon icon={cart} />4
        </span>
    )
}
export default CartWidget
