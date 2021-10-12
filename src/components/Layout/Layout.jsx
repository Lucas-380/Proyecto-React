import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Layout = ({children, items}) => {
    return (
        <>
            <Header items={items}/>
  
                { children }

            <Footer/>
        </>
    )
}

export default Layout
