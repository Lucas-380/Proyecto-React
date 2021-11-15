import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import Cart from "./components/Cart/cart";
import CartContextProvider from "./context/cartContext";
import Category from "./components/category/category";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
    <>
        <CartContextProvider>
            <BrowserRouter>
            <Layout>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' >
                        <ItemListContainer
                            greeting="JoyPlay"/>
                    </Route>

                    <Route exact path='/cart'>
                        <Cart/>
                    </Route>

                    <Route exact path='/:category/'>
                        <Category/>
                    </Route>

                    <Route exact path='/:category/:id'>
                        <ItemDetailContainer/>
                    </Route>

                </Switch>
            </Layout>
        </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
