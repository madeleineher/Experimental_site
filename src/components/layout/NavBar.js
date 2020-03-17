import React from 'react';

const NavBar = (props) => {
  return (
    <div className='nav'>
      <button className='nav__toggle' onClick={props.toggleClickHandler}>
        <span className='hamburger'></span>
      </button>
    </div>
  );
};

export default NavBar;
