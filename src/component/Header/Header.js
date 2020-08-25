import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">shop</a>
                <a href="/home">home</a>
                <a href="/manage">manage</a>
            </nav>
            <h1></h1>
        </div>
    );
};

export default Header;