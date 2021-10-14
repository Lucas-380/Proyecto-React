import React, { useState } from 'react'

const ItemCount = ({stock}) => {

    const [amount , setAmount] = useState(0)

    const addFn = () => {
        if (amount < stock ) {
            setAmount(amount+1)
        }
        else{
            alert('Ha alcanzado el limite de stock.')
        }
    }

    const removeFn = () => {
        if (amount > 0) {
            setAmount(amount-1)
        }
    }

    return (
        <div style={{margin: "0 0 7rem 6rem"}}>
            <button onClick={ () => addFn()} className="btn btn-success" >+</button>
            <p className="card-text mx-5" style={{display: "inline"}}>{amount}</p>
            <button onClick={()=>removeFn()} className="btn btn-danger">-</button>
        </div>
    )
}

export default ItemCount
