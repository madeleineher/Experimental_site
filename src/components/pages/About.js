import React from 'react';
import Page2_open from './e-shop_pics/page2_open.jpg';
import Page2_closed from './e-shop_pics/page2_closed.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='about__background'>
        <div className='about__white'></div>
        <div className='about__beige'></div>
      </div>
      <div className='about__items'>
        <div className='about__blurb about__item'>
          <div>
            <h1>SMALL BATCH PRODUCTION</h1>
            <p>
              WE DO NOT OVERPRODUCE, IN FACT EACH PIECE IS ONLY MADE A HANDFUL OF
              TIMES AT ANY GIVEN TIME.
            </p>
          </div>
        </div>
        <div className='about__img1 about__item'>
          <img src={Page2_open} alt=''/>
        </div>
        <div className='about__title about__item'>
          <h3>THE KNOT BAG</h3>
        </div>
        <div className='about__img2 about__item'>
          <img src={Page2_closed} alt=''/>
        </div>
        <div className='about__blurb about__item'>
          <div>
            <h1>LOCALLY SOURCED MATERIALS</h1>
            <p>
              ALL MATERIALS ARE SOURCED LOCALLY IN THE PARISIAN REGION OR WITHIN
              FRANCE. THE MATERIALS USED ARE ALSO COMPOSED OF NATURAL FIBERS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
