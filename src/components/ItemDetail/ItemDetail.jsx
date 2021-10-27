import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/itemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext"


const ItemDetail = ({ producto }) => {

    const [visible, setVisible] = useState(true)
    const { addProd } = useCartContext()

    const onAdd=(count)=>{
        setVisible(false)
        addProd( { producto: producto , cantidad: count } )
    }

    const contador = () => {
        setVisible(true)
    }

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

                    {visible ?
                    <ItemCount
                        stock={producto && producto.rating.count}
                        id={producto && producto.id}
                        producto={producto && producto}
                        onAdd={onAdd}
                        setVisible={setVisible}/>
                        :
                        <div style={{position:"inline"}}>
                            <button onClick={ ()=> contador() } className="btn btn-primary" >Seguir agregando productos</button>
                            <Link to="/" className="btn btn-primary my-1" >Seguir comprando</Link>
                        </div>
                    }

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
                    <Link to="/cart" style={{textDecoration: "none"}} className="txt">Finalizar Compra</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ItemDetail;
