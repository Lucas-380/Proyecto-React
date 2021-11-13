import React, { createContext , useContext, useEffect, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){
    const [cartList, setCartList] = useState( [] )

    useEffect(() => {
        if ("carrito" in localStorage) {
            let carrito = JSON.parse(localStorage.getItem("carrito"))
            setCartList(carrito)
        }else{
            localStorage.setItem("carrito", "[]" );
        }
    }, [])

    const addProd =({producto, cantidad})=>{
        const prevCartItem = cartList.find((e) => e.producto.id === producto.id);
        let newCart;
        let qty;
        if (prevCartItem){
            newCart = cartList.filter((e) => e.producto.id !== producto.id);
            qty = prevCartItem.cantidad + cantidad;
        }
        else{
            newCart = [...cartList];
            qty = cantidad;
        }
        setCartList([...newCart, {producto: producto, cantidad:qty}])
        AlmacenamientoLocal([...newCart, {producto: producto, cantidad:qty}])
    }

    const removeCart =()=>{
        setCartList([])
        localStorage.setItem("carrito", "[]" );
    }

    const delProd = (id) => {
        const prod = cartList.filter((prod) => prod.producto.id !== id)
        setCartList(prod)
        localStorage.setItem("carrito", JSON.stringify(prod))
    }

    const total = () => {
        let subtotales = cartList && cartList.map((prod) => prod.producto.price * prod.cantidad)
        return subtotales.reduce((a, b) => a + b, 0)
    }
    const cantCart = () => {
        let cant = cartList && cartList.map((c) => c.cantidad + 0)
        return cant.reduce((a, b) => a + b, 0)
    }

    function AlmacenamientoLocal(cart) {
        localStorage.setItem("carrito", JSON.stringify(cart))
    }

    
    
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