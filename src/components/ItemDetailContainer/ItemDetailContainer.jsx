import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import axios from "axios";
import './ItemDetailContainer.css'

const ItemDetailContainer = ({ greeting, text }) => {

    const [producto, setProducto] = useState("")
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    const getProducto = async () => {
        try{
            const  respuesta = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProducto(respuesta.data)
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
    },[])

    return (
        <>
            {loading ? <h1>Cargando...</h1> : 
            
            <div className="container ">
                <div className="row center">
                    <h1 className="titleDetailContainer">{greeting}</h1>
                    <p className="textDetailContainer">{text}</p>
                    <ItemDetail
                        producto={producto}/>
                </div>
            </div>
            }
        </>
    )
}

export default ItemDetailContainer
