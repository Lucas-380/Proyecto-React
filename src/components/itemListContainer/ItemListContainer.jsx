import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./itemList/itemList";
import { getFirestore } from '../../services/Firebase'
import Loader from "../Loader/Loader";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [prod, setProd] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const db = getFirestore()
      db.collection('Items')
        .get()
        .then(r => setProd(r.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally( ()=> setLoading(false) )
      db.collection('categories')
        .get()
        .then(r => setCategories(r.docs.map(cat => ({ id: cat.id, ...cat.data() }))))
        .catch(err => console.log(err))
       .finally( ()=> setLoading(false) )
  },[])

  return (
          <div>
            {loading ?  <Loader/>
            :
            <>
              <h1 className="titleContainer">{greeting}</h1>
                  <ItemList
                    prod={prod}
                    categories={categories}/>
            </>}
          </div>
  );
};

export default ItemListContainer;
