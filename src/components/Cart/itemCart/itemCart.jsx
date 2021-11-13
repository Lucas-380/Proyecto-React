import React from 'react'
import { useCartContext } from "../../../context/cartContext";
import './itemCart.css'

const ItemCart = ({id, price, image, title, cantidad, category}) => {

    const { delProd } = useCartContext()

    return (
        <div>
            <div className="item">
                <div className="buttons">
                    <span className="delete-btn" onClick={() => delProd(id)}></span>
                </div>
                <div className="image">
                    <img src={image} style={{width:"110px"}} alt="" />
                </div>
                <div className="descriptionCart">
                    <span>{title}</span>
                    <span>{category}</span>
                </div>
                <div className="quantity mx-5">
                        <h4 className="cantidad">{cantidad}</h4>
                </div>

                <div className="total-price">$ {price}</div>
            </div>
            <hr className=" mt-5"/>
        </div>
    )
}

export default ItemCart