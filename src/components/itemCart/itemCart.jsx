import React from 'react'
import { Badge } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";


const ItemCart = ({id, price, image, title, cantidad, category}) => {

    const {delProd} = useCartContext()

    return (
            <div key={id} className="row col-lg" >
                <img src={image} className="img-thumbnail" style={{width: "10rem", height:"auto"}} alt=""/>
                <div className="col-lg-7 row">
                    <h3 className="col-lg-12">{title}</h3>
                    <span><Badge bg="dark" className="mx-1">Categoria</Badge>{category}</span>
                    <span><Badge bg="dark" className="mx-1">Cantidad</Badge>{cantidad}</span>
                    <span><Badge bg="dark" className="mx-1">Precio</Badge>$ {price}</span>
                    <span><Badge bg="dark" className="mx-1">Subtotal</Badge>$ {price * cantidad}</span>
                    <button className="btn btn-danger" style={{width:"2rem", marginLeft:"100%"}}
                    onClick={() => delProd(id)}
                        >X
                    </button>
                </div>
                <hr className="mt-2" style={{width:"75%"}}/>
            </div>
    )
}

export default ItemCart
