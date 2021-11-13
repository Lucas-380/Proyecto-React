import React from 'react'
import Item from '../Item/item'
import './itemList.css'
import { Link } from "react-router-dom";

const ItemList = ({prod, categories}) => {


    return (
        <div className="container">
            <div className="row center">
                <div className="catalogoNav">
                    {categories && categories.map((category =>(
                            <Link to={`${category.console}`} className="vinculoCategorias" key={category.id}>
                                <button className="catalogoNavText btn btn-primary">{category.console}</button>
                            </Link>
                            )
                        ))
                    }
                </div>
                    {prod && prod.map((prods => 
                        (<Item
                            key={prods.id}
                            id={prods.id}
                            category={prods.category}
                            nombre={prods.title}
                            precio={prods.price}
                            img={prods.image}
                            />) 
                        ))
                    }
            </div>
        </div>

    )
}

export default ItemList
