import React from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/itemList";

const ItemListContainer = ({ greeting, text,  items, setItems }) => {

  return (
    <div className="container p-2">
        <h1 className="titleContainer">{greeting}</h1>
        <p className="textContainer">{text}</p>
            <ItemList
                items={items}
                setItems={setItems}/>    
    </div>
  );
};

export default ItemListContainer;
