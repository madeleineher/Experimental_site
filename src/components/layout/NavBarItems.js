import React from 'react'
import { Link } from 'react-router-dom';

const NavBarItems = () => {
    return (
        <nav className='nav__conatiner'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <Link to='/' className='nav__link'>
                    HOME
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='/about' className='nav__link'>
                    ABOUT
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='/shop' className='nav__link'>
                    SHOP
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBarItems;
