import React, {useState} from "react";
import { useCartContext } from "../../context/cartContext";
import ItemCart from './itemCart/itemCart'
import { getFirestore } from '../../services/Firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import FormCart from './formCart/formCart'

const Cart = () => {
    const { cartList, removeCart, total, cantCart } = useCartContext();

    const dataForm = { name:'', phone:'', email:'' }

    const [ form, setForm ] = useState(dataForm)

    const generateOrder = (e) => {
        e.preventDefault()

        let order = {}
        order.buyer = form
        order.total= total
        order.items = cartList.map(prodCart => {
            const id = prodCart.producto.id;
            const title = prodCart.producto.title;
            const amount = prodCart.cantidad;
            const price = prodCart.producto.price * prodCart.cantidad;
            return {id, title, price, amount}
        })
        const dbQuery = getFirestore()
        const orderQuery = dbQuery.collection('orders')
        orderQuery.add(order)
        .then( r => alert('El id de la compra es: '+r.id) )
        .catch(err => console.log( err) )

        // Actualiza los productos
        const prodsToUpdate = dbQuery.collection('Items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.producto.id)
        )
        const batch = dbQuery.batch()
        //restar stock al finalizar la compra
        prodsToUpdate.get()
        .then( collection => {
            collection.docs.forEach(prodCart =>{
                batch.update(prodCart.ref, {
                    stock: prodCart.data().stock - cartList.find( i => i.producto.id === prodCart.id ).cantidad
                })
            }) 
            batch.commit().then(result => {
                console.log('resultado batch: ' + result);
                removeCart()
                setForm(dataForm)
            })
        }).catch(err => console.log( err) )

        console.log(order);
    }
    const handleOnChange=(e)=>{
        setForm({
            ...form, [e.target.name] : e.target.value
        })
    }

    return (
        <>
            <div>
                <div className="shopping-cart">
        
                {cartList.length > 0 ? (
                        <>                  
                            <div className="title Header">
                                Carrito de compra
                            <h5 className="Action" onClick={()=> removeCart()}>Remove all</h5>
                            </div>
                                {cartList.map((e) =>(
                                    <ItemCart
                                        id={e.producto.id}
                                        title={e.producto.title}
                                        image={e.producto.image}
                                        price={e.producto.price}
                                        category={e.producto.category}
                                        cantidad={e.cantidad}
                                        />
                                        ))}
                            <div className="checkout">
                                <div className="total">
                                    <div>
                                        <div className="Subtotal">Total</div>
                                        <div className="items">Productos: {cantCart} </div>
                                    </div>
                                    <div className="total-amount">$ {total}</div>
                                    <FormCart
                                    generateOrder={generateOrder}
                                    handleOnChange={handleOnChange}
                                    form={form}
                                    />
                                </div>
                            </div>
                        </>
                    ) : 
                    <h1>CARRITO VACIO</h1>
                }
                </div>
        </div>
        </>
    );
};

export default Cart;
