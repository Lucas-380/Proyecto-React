import React, {useState} from 'react'
import { useCartContext } from "../../../context/cartContext";
import { getFirestore } from '../../../services/Firebase'
import firebase from 'firebase/app'
import Input from './Input';


const FormCart = () => {
    const { cartList, removeCart, total } = useCartContext();

    const [nombre, setNombre] = useState({campo: '' , valido: null})
    const [telefono, setTelefono] = useState({campo: '' , valido: null})
    const [email, setEmail] = useState({campo: '' , valido: null})
    const [email2, setEmail2] = useState({campo: '' , valido: null})

    const [dataCliente, setDataCliente] = useState()

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validacionDeDatos = (e) =>{
        e.preventDefault()
        if (nombre.valido === 'true' &&
            telefono.valido === 'true' &&
            email.valido === 'true' &&
            email2.valido === 'true'
        ){
            setDataCliente({  name:nombre.campo, 
                                        phone:telefono.campo, 
                                        email:email.campo })
            generateOrder(dataCliente)
            console.log(dataCliente);
        } else{
            alert('ingrese los datos correctamente')
        }
    }

    const generateOrder = (dataCliente) => { 
        let order = {}
        order.buyer = dataCliente
        order.total= total()
        order.items = 
            cartList.map(prodCart => {
                const id = prodCart.producto.id;
                const title = prodCart.producto.title;
                const amount = prodCart.cantidad;
                const price = prodCart.producto.price * prodCart.cantidad;
                return {id, title, price, amount}
        })
        console.log(order);
        const dbQuery = getFirestore()
        const orderQuery = dbQuery.collection('orders')
        orderQuery.add(order)
        .then( r => alert('El id de la compra es: '+r.id) )
        .catch(err => console.log( err))

        const prodsToUpdate = dbQuery.collection('Items')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.producto.id)
        )
        const batch = dbQuery.batch()
        //restar stock al finalizar la compra
        prodsToUpdate
            .get()
            .then(collection => {
                        collection.docs.forEach(prodCart =>{
                            batch.update(prodCart.ref, {
                                stock: prodCart.data().stock - cartList.find( i => i.producto.id === prodCart.id ).cantidad
                            })
                        }) 
                        batch.commit().then(result => {
                            console.log('resultado batch: ' + result);
                            removeCart()
                        })
                    })
            .catch(err => console.log( err) )
            console.log(order);
    }

    const confirmacionEmail =()=>{
        if (email.campo.length > 0){
            if (email.campo !== email2.campo) {
                setEmail2( (estadoPrevio) => {
                    return {...estadoPrevio, valido: 'false'}
                })
            }else{
                setEmail2( (estadoPrevio) => {
                    return {...estadoPrevio, valido: 'true'}
                })
            }
        }
    }

    return (
        <form onSubmit={validacionDeDatos}>
            <Input
                estado={nombre}
                setEstado={setNombre}
                label="Nombre"
                tipo="text" 
                name="name"
                expresionRegular={expresiones.nombre} />
            <Input
                estado={telefono}
                setEstado={setTelefono}
                label="Telefono"
                tipo="number" 
                name="phone"
                expresionRegular={expresiones.telefono}  />
            <Input
                estado={email}
                setEstado={setEmail}
                label="Email"
                tipo="email"
                name="email"
                expresionRegular={expresiones.correo} />
            <Input 
                estado={email2}
                setEstado={setEmail2}
                label="Confirmar Email"
                tipo="email" 
                name="email2"
                funcion={confirmacionEmail} />
            <button className="btnFinalizarCompra">Finalizar Compra</button>
        </form>
    )
}

export default FormCart
