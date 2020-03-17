import React from 'react';

const NavBar = (props) => {
  let toggleClasses = "nav__toggle";

  if (props.isNavBar) {
    toggleClasses = "nav__toggle nav__open";
    console.log (props.testing);
  }

  // console.log ('hello', props.testing);
  return (
    <div className='nav'>
      <button className={toggleClasses} onClick={props.toggleClickHandler}>
        <span className='hamburger'></span>
      </button>
    </div>
  );
};

export default NavBar;
