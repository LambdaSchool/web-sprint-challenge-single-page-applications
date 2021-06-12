import React from 'react';

// Header

export default function Header() {
    return (
        <div>
            <nav className='ok-navbar-container ok-navbar'>
                <div className='ok-navbar-left'>
                    <a className="ok-navbar-item ok-logo" href="#">Lambda Eats</a>
                    <ul className='ok-navbar-nav'>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Order</a></li>
                    </ul>

                </div>
                <div className='ok-navbar-right'>

                    <ul className='ok-navbar-nav'>
                        <li>
                            <a href='#'>Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
} 