import React from 'react'
import ItemCount from '../ItemCount/itemCount'

    const Item = ({nombre, precio, img, stock, items, setItems}) => {


    return (
        <div className="my-4 col-lg-4">
            <div className="card" Style="width: 18rem;">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">$ {precio}</p>
                    <p className="card-text">Cantidad disponible = {stock}</p>
                    <ItemCount
                        items={items}
                        setItems={setItems}
                        stock={stock}/>
                </div>
            </div>
        </div>
    )
}

export default Item
