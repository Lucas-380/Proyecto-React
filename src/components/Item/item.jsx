import React from "react";
import "./item.css";
import { Link } from 'react-router-dom'

const Item = ({ img, nombre, precio, category, id }) => {
    return (
    <div className="container page-wrapper col-lg-4" key={id}>
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src={img} alt="" style={{ width: "14rem" }} />
              <div className="img-info">
                <div className="info-inner">
                    <span className="p-name">{nombre}</span>
                    <span className="p-company">{category}</span>
                </div>
                <div className="a-size">12 cuotas sin interés de ${(precio / 12).toFixed(2)}</div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <div className="cart">
                <span className="price">$ {precio}</span>
                <span className="add-to-cart">
                <Link to={`${category}/${id}`} className="txt" style={{textDecoration: "none"}}>+ info</Link>

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
