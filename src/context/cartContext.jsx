import React, { createContext , useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){

    const [cartList, setCartList] = useState( [] )


    const addProd =({producto, cantidad})=>{
        const prevCartItem = cartList.find((e) => e.producto.id === producto.id);
        let newCart;
        let qty;
        if (prevCartItem){
            newCart = cartList.filter((e) => e.producto.id !== producto.id);
            qty = prevCartItem.cantidad + cantidad;
        }else{
            newCart = [...cartList];
            qty = cantidad;
        }
        setCartList([...newCart, {producto: producto, cantidad:qty}])
    }

    const removeCart =()=>{
        setCartList([])
    }
    
    const delProd = (id) => {
        const prod = cartList.filter((prod) => prod.producto.id !== id)
        setCartList(prod)
    }

    let subtotales = cartList && cartList.map((prod) => prod.producto.price * prod.cantidad)
    let total = subtotales.reduce((a, b) => a + b, 0)

    let cant = cartList && cartList.map((c) => c.cantidad + 0)
    let cantCart = cant.reduce((a, b) => a + b, 0)

    return(
        <CartContext.Provider value= {{
            cartList,
            addProd,
            removeCart,
            delProd,
            total,
            cantCart
        }}>
            {children}

        </CartContext.Provider>
    )
};

export default CartContextProvider 