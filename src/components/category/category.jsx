import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../services/Firebase'
import Item from '../Item/item'

const Category = () => {
    const [categoria, setCategoria] = useState([])
    const { category } = useParams()

    useEffect(() => {
        const db = getFirestore()
        db.collection('Items').where('category', '==', category).get().then(r => setCategoria(r.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
    }, [])
    console.log(categoria);

    return (
        <>
            {categoria && categoria.map((prods => 
                (<Item
                    key={prods.id}
                    id={prods.id}
                    category={prods.category}
                    nombre={prods.title}
                    precio={prods.price}
                    img={prods.image}
                    />)
            ))}
        </>
    )
}

export default Category
