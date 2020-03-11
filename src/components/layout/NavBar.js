import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <button className='nav-toggle'>
        <span className='hamburger'></span>
      </button>
      <nav className='navbar'>
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
    </div>
  );
};

export default NavBar;
