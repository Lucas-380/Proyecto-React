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


    return(
        <CartContext.Provider value= {{
            cartList,
            addProd,
            removeCart
        }}>
            {children}

        </CartContext.Provider>
    )
};

export default CartContextProvider 