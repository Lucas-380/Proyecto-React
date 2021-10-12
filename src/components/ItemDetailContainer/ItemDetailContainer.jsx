import React, { useState, useEffect } from 'react'
import { Api } from '../Stateless/Api/Api'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = ({ greeting, text }) => {

    const endpoint = '?limit=6'
    const [prod, setProd] = useState([])


    useEffect(() => {
        setTimeout(() => {
            Api.get(endpoint)
                .then(res => {
                    // console.log(res)
                    const { data } = res
                    setProd(data)
                })
        }, 2000);
    }, [endpoint])

    return (
        <div className="container ">
            <div className="row" Style="--bs-gutter-x: 0;">
                <h1 className="titleDetailContainer">{greeting}</h1>
                <p className="textDetailContainer">{text}</p>
                
                { prod && prod.map((prods => 
                    (<ItemDetail
                        key={prods.id}
                        nombre={prods.title}
                        precio={prods.price}
                        img={prods.image}
                        />) 
                    ))
                }

                {console.log(prod)}
            </div>
        </div>
    )
}

export default ItemDetailContainer
