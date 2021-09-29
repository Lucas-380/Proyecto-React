import React from 'react'
import "./ItemListContainer.css";

const ItemListContainer = ({greeting, text}) => {
    return (
        <div>
            <h1 className="titleContainer">{greeting}</h1>
            <p className="textContainer">{text}</p>
        </div>
    )
}

export default ItemListContainer
