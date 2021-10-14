import React, { useState, useEffect } from 'react'
import Item from '../Item/item'
import { Api } from '../Stateless/Api/Api'
import './itemList.css'

const ItemList = ({greeting, text}) => {

    const endpoint = '?limit=6'
    const [prod, setProd] = useState([])

    useEffect(() => {
            Api.get(endpoint)
                .then(res => {
                    // console.log(res)
                    const { data } = res
                    setProd(data)
                })
    }, [endpoint])

    return (
        <div className="container ">
            <div className="row center">
                <h1 className="titleDetailContainer">{greeting}</h1>
                <p className="textDetailContainer">{text}</p>

                { prod && prod.map((prods => 
                    (<Item
                        key={prods.id}
                        id={prods.id}
                        category={prods.category}
                        nombre={prods.title}
                        precio={prods.price}
                        img={prods.image}
                        />) 
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList
