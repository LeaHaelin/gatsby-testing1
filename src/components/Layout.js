import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

function Layout({ children }) {
    return (
        <div className='Layout'>
            <Navbar />
            <main className='contents'>
                {children}
            </main>
        </div>
    )
}

export default Layout