import React from 'react';
import Page1 from './e-shop_pics/page1.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__background'>
        <span className='home__green'></span>
        <span className='home__white'></span>
      </div>
      <div className='home__overlay'>
        <div className='home__sloagan'>THE KNOT BAG</div>
        <div className='home__imgContainer'>
          <img className='home__img' src={Page1} alt='' />
        </div>
        <div className='home__blurb'>
          <h3>The essential bag you never knew you needed.</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
