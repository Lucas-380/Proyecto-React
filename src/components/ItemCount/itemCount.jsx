import React, { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock , onAdd  }) => {

    const [amount , setAmount] = useState(1)

    const addFn = () => {
        if (amount < stock ) {
            setAmount(amount+1)
        }
        else{
            alert('Ha alcanzado el limite de stock.')
        }
    }

    const removeFn = () => {
        if (amount > 1) {
            setAmount(amount-1)
        }
    }
    const addCart=()=>{
        onAdd(amount)
    }

    return (
        <div className="container">
            <div className="my-1 div-counter">
                <button onClick={ ()=>addFn() } className="btn-count" >+</button>
                <p className="card-text num-count" style={{display: "inline", marginTop: "1.5rem"}}>{amount}</p>
                <button onClick={()=>removeFn()} className="btn-count">-</button>
            </div>
            <button onClick={ addCart } className="btn-carrito" >Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
