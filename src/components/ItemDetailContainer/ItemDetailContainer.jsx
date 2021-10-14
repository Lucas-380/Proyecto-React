import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'



const ItemDetailContainer = ({ greeting, text }) => {



    return (
        <div className="container ">
            <div className="row center">
                <h1 className="titleDetailContainer">{greeting}</h1>
                <p className="textDetailContainer">{text}</p>
                <ItemDetail/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
