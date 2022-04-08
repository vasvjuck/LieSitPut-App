import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <div className='logo'>Logo</div>
            <nav>
                <a className='link' href="#"><span>Home</span></a>
                <a className='link' href='#'><span>Cart</span></a>
            </nav>
        </header>
    )
}

export default Header