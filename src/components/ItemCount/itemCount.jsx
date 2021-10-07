import React, { useState } from 'react'

const ItemCount = ({stock, items, setItems}) => {

    const [amount , setAmount] = useState(0)

    const addFn = () => {
        if (amount < stock ) {
            setAmount(amount+1)
            setItems(items+1)
        }
        else{
            alert('Ha alcanzado el limite de stock.')
        }
    }

    const removeFn = () => {
        if (amount > 0) {
            setAmount(amount-1)
            setItems(items-1)
        }
    }

    return (
        <div Style="text-align: center;">
            <buttom onClick={ () => addFn()} className="btn btn-success m-3">+</buttom>
            <p className="card-text m-3" Style="display: inline;">{amount}</p>
            <buttom onClick={()=>removeFn()} className="btn btn-danger m-3">-</buttom>
        </div>
    )
}

export default ItemCount
