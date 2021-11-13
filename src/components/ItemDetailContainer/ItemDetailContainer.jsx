import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {getFirestore} from '../../services/Firebase'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        db.collection('Items')
            .doc( `${id}` )
            .get()
            .then( (r) => 
                setProducto( { id: r.id, ...r.data() } ) )
            .catch(err => console.log(err))
            .finally( ()=> setLoading(false))
    }, [id])

    return (
        <>
            {loading ?  <Loader/>
             : 
            <div className="body">
                <div className="main">
                    <ItemDetail
                        producto={producto}/>
                </div>
            </div>
            }
        </>
    )
}

export default ItemDetailContainer
