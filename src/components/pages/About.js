import React from 'react';
import Page2_open from './e-shop_pics/page2_open.jpg';
import Page2_closed from './e-shop_pics/page2_open.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='about__white'></div>
      <div className='about__beige'></div>
      <div className='about__blurbOne'>
        <h3>SMALL BATCH PRODUCTION</h3>
        <p>
          WE DO NOT OVERPRODUCE, IN FACT EACH PIECE IS ONLY MADE A HANDFUL OF
          TIMES AT ANY GIVEN TIME.
        </p>
      </div>
      <div className='about__title'>
        <h1>THE KNOT BAG</h1>
      </div>
      <div className='about__blurbTwo'>
        <h3>LOCALLY SOURCED MATERIALS</h3>
        <p>
          ALL MATERIALS ARE SOURCED LOCALLY IN THE PARISIAN REGION OR WITHIN
          FRANCE. THE MATERIALS USED ARE ALSO COMPOSED OF NATURAL FIBERS.
        </p>
      </div>
      <div className='about__img1'>
        <img src={Page2_open} alt=''/>
      </div>
      <div className='about__img2'>
        <img src={Page2_closed} alt=''/>
      </div>
    </div>
  );
};

export default About;
