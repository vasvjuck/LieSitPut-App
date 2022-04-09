import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='logo'>Logo</div>
            <nav>
                <a className='link' ><span>Home</span></a>
                <a className='link' ><span>Cart</span></a>
            </nav>
        </header>
    )
}

export default Header