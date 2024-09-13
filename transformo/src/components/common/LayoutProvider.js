import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './header';
import Footer from './footer';

const LayoutProvider = ({ children }) => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/form' && <Header />}
            {children}
            {location.pathname !== '/form' && <Footer />}
        </>
    )
}

export default LayoutProvider