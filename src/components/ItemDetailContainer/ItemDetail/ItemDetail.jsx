import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../../ItemCount/itemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext"

const ItemDetail = ({ producto }) => {
    const {image, title, price, description, rating, id, category, stock } = producto

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
    <div className="card">
        <div className="card__title">
            <div className="icon"></div>
            <h3>⭐{rating}</h3>
        </div>
        <div className="card__body">
            <div className="half">
                <div className="featured_text">
                    <h4>{title}</h4>
                    <p className="sub">{category}</p>
                    <p className="price">${price}</p>
                </div>
                <div className="image">
                    <img src={image} alt="" style={{width:"20rem"}}/>
                </div>
            </div>
            <div className="half">
                <span className="stock">Stocks disponible</span>
                <div className="reviews">
                    <span>({stock} stocks)</span>
                </div>
                {visible ?
                    <ItemCount
                        stock={stock}
                        id={id}
                        producto={producto && producto}
                        onAdd={onAdd}
                        setVisible={setVisible}/>
                        :
                        <div className="mt-4" style={{position:"inline"}}>
                            <button onClick={ ()=> contador() } className="btn-carrito" >Seguir agregando productos</button>
                        </div>
                    }
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
        <div className="card__footer">
            <div className="recommend">
            <p>Recomendado por</p>
            <h3>JoyPlay 😜</h3>
        </div>
            <div className="action">
                <Link to ="/"><button type="button">Volver al catalogo ↩</button></Link>
            </div>
        </div>
    </div>
  );
};

export default ItemDetail;
