import React, { useState } from 'react'
import "./ItemListContainer.css";
import ItemCount from '../ItemCount/itemCount';

const ItemListContainer = ({greeting, text}) => {

    const [amount , setAmount] = useState(0)

    const addFn = () => {
        if (amount < 10) {
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
        <div>
            <h1 className="titleContainer">{greeting}</h1>
            <p className="textContainer">{text}</p>
            <ItemCount 
                stock='10'
                add={addFn}
                remove={removeFn}
                initial={amount}
                />
        </div>
    )
}

export default ItemListContainer
