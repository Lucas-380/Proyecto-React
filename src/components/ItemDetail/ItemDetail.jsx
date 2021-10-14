// Card para la API

import React, { useEffect, useState } from "react";
import "./ItemDetail.css";
import { useParams } from "react-router";
import axios from "axios";
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = () => {

    const {id} = useParams()
    console.log(id);

    const [producto, setProducto] = useState("")

    const getProducto = async () => {
        try{
            const  respuesta = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(respuesta.data);
            setProducto(respuesta.data)
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getProducto()
    },[])


  return (
    <div className="container page-wrapper col-lg-4">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src={producto && producto.image} alt="" style={{width: "10rem"}} />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{producto && producto.title}</span>
                  <span className="p-company">stock disponible = {producto && producto.rating.count}</span>
                </div>
                <div className="a-size" style={{fontSize:"0.7rem", color:"black"}}>
                    {producto && producto.description}
                    
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <div className="cart">
                <span className="price">${producto && producto.price}</span>
                <span className="add-to-cart">
                  <span className="txt">COMPRAR</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <ItemCount
            stock={producto && producto.rating.count}/>
      </div>
    </div>
  );
};

export default ItemDetail;
