import React from 'react'
import { useCartContext } from "../../context/cartContext";
import './itemCart.css'

const ItemCart = ({id, price, image, title, cantidad, category}) => {

    const {delProd} = useCartContext()

    return (
        <div className="Cart-Items ">

                <div className="image-box">
                    <img src={image} alt="" style={{ height:"120px" }} />
                </div>
                <div className="about">
                    <h1 className="title mb-4">{title}</h1>
                    <h3 className="subtitle mb-4">{category}</h3>
                    {/* <img src="" style={{ height:"30px" }}/> */}
                </div>



                <div className="counter">
                    {/* <div className="btnCount">+</div> */}
                    <div className="count">{cantidad}</div>
                    {/* <div className="btnCount">-</div> */}
                </div>
                <div className="prices ">
                    <div className="amount">${price}</div>
                    <div className="save"><u>Save for later</u></div>
                    <div className="remove" onClick={() => delProd(id)}><u>Remove</u></div>
                </div>

        </div>
    )
}

export default ItemCart
