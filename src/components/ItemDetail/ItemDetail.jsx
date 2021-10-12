// Card para la API

import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ img, nombre, precio }) => {
  return (
    <div className="container page-wrapper col-lg-4">
      <div className="page-inner">
        <div className="">
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src={img} alt="" Style="width: 10rem;" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{nombre}</span>
                  <span className="p-company">...</span>
                </div>
                <div className="a-size">PS4 - PS5</div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$ {precio}</span>
                <span className="add-to-cart">
                  <span className="txt">Añadir al carrito</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
