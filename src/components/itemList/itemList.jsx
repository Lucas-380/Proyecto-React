import React, { useState, useEffect } from 'react'
import Item from '../Item/item'
import './itemList.css'
import { getFirestore } from '../../services/Firebase'
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from 'react-bootstrap'

const ItemList = () => {

    const [prod, setProd] = useState([])

    useEffect(() => {
        const db = getFirestore()
        db.collection('Items').get()
        .then(r => setProd(r.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )

        // db.collection('Items').doc( 'lg7vbRReuTeyGYIVizeH').get()
        // .then(r => setProd( { id: r.id, ...r.data() } ) )
    },[])

    console.log(prod);

    return (
        <div className="container ">
            <div className="row center">
            <DropdownButton id="dropdown-basic-button" title="Juegos por Consolas">
                { prod && prod.map((prods => 
                        (
                            <Dropdown.Item>
                                <Link to={`${prods.category}`} className="vinculoCategorias" >{prods.category}</Link>
                            </Dropdown.Item>
                        ) 
                        ))
                    }
            </DropdownButton>

                { prod && prod.map((prods => 
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
