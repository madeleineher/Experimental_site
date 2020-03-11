import React from 'react';
import Page1 from './e-shop_pics/page1.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__green'>white</div>
      <div className='home__white'>green</div>
      <div className='home__sloagan'>THE KNOT BAG</div>
      <div className='home__img'>
        <img src={Page1} />
      </div>
      <div className='home__blurb'>
        <h3>THE ESSENTIAL BAG YOU NEVER KNEW YOU NEEDED</h3>
      </div>
    </div>
  );
};

export default Home;
