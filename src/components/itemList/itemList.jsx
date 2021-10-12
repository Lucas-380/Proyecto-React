import React, { useState, useEffect } from 'react'
import Item from '../Item/item'

const ItemList = ({items, setItems}) => {

    const [result, setResult] = useState(null)

    const productos = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 0 , nombre:'producto 1' , precio:5000 , stock:10 , img:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" },
                { id: 1 , nombre:'producto 2' , precio:8000 , stock:20 , img:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"},
                { id: 2 , nombre:'producto 3' , precio:1000 , stock:30 ,  img:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"},
            ])
        }, 2000);
    }) 

    useEffect(() => {
        if(!result){
            productos.then((res, err) => {
                if (res) console.log(res)
                setResult(res)
            }).catch((error) => {
                console.log(error)
            }).finally(()=>console.log('operacion finalizada'))
        }
        console.log(result);
    }, [result])

    return (
        <div className="row">
            
            {result && result.map((producto =>
                    ( <Item
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        stock={producto.stock}
                        img={producto.img}
                        items={items}
                        setItems={setItems}
                    />)
                ))
            }
        </div>
    )
}

export default ItemList
