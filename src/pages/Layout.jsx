import React from 'react'
import Header from '../comp/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../comp/Footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout