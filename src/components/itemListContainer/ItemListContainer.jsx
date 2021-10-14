import React from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/itemList";

const ItemListContainer = ({ greeting, text}) => {

  return (
    <div className="container p-2">
        <h1 className="titleContainer">{greeting}</h1>
        <p className="textContainer">{text}</p>
            <ItemList/>    
    </div>
  );
};

export default ItemListContainer;
