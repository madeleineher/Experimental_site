import React from 'react';
import Page3_in from './e-shop_pics/page3_in.jpg';
import Page3_out from './e-shop_pics/page3_out.jpg';

const Shop = props => {
  return (
    <div className='shop'>
      <div className='shop__left'>
        <img src={Page3_in} />
      </div>
      <div className='shop__right'>
        <div className='shop__objectTitle'>
          <h1>THE KNOT BAG</h1>
        </div>
        <div className='shop__comp'>
          <h3>Composition</h3>
          <p></p>
        </div>
        <div className='shop__color'>
          <h3>Color:</h3>
          <form>
            <div className='shop__colorForm'>
              <label>
                <input
                  type='radio'
                  name='react-tips'
                  value='option1'
                  className='shop__colorFormInput'
                />
                Option 1
              </label>
            </div>
            <div className='shop__colorForm'>
              <label>
                <input
                  type='radio'
                  name='react-tips'
                  value='option2'
                  className='shop__colorFormInput'
                />
                Option 1
              </label>
            </div>
            <div className='shop__colorForm'>
              <label>
                <input
                  type='radio'
                  name='react-tips'
                  value='option3'
                  className='shop__colorFormInput'
                />
                Option 1
              </label>
            </div>
          </form>
        </div>
        <div className='shop__button'>
          <button>ADD TO BAG</button>
        </div>
        <div className='shop__leftImg'>
          <img src={Page3_out} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
