import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {getFirestore} from '../../services/Firebase'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    const getProducto = async () => {
        try{
            const db = getFirestore()
            db.collection('Items').doc( `${id}` ).get().then(r => setProducto( { id: r.id, ...r.data() } ) )
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        getProducto()
    }, [])

    return (
        <>
            {loading ? <div className="container-preloader">
                                <div className="preloader"></div>
                            </div>
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
