import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './iconStyle.css';

const CartWidget = ( {cart, items} ) => {

    return (
        <span className="icons">
            <FontAwesomeIcon icon={cart} />
            {items}
        </span>
    )
}
export default CartWidget
