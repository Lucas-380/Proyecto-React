import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../services/Firebase'
import Item from '../itemListContainer/Item/item'
import Loader from '../Loader/Loader'

const Category = () => {
    const [categoria, setCategoria] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        const db = getFirestore()
        db.collection('Items')
            .where('category', '==', category)
            .get()
            .then(r => 
                setCategoria(r.docs.map( prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally( () => setLoading(false) )
    }, [category])

    return (
        <>{ loading ? <Loader/>
            :
            <div className="container">
                <div className="row center">
                    <h1 className="titleContainer">{category}</h1>
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
                </div>
            </div>
            }
        </>
    )
}

export default Category
