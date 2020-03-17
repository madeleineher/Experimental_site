import React from 'react';
import Page3_in from './e-shop_pics/page3_in.jpg';
import Page3_out from './e-shop_pics/page3_out.jpg';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop__items shop__left'>
        <img src={Page3_in} alt=''/>
      </div>
      <div className='shop__items shop__right'>
        <div className='shop__objectTitle'>
          <h1>THE KNOT BAG</h1>
        </div>
        <div className='shop__comp'>
          <h3>Composition</h3>
          <p>Inner-Lining:</p>
          <p className='shop__mat'>Rayon: 100%</p>
          <p>Outer-Lining</p>
          <p className='shop__mat'>Cotton (raw denim): 100%</p>
        </div>
        <div className='shop__color'>
          <h3>Colors</h3>
          <form className='shop__form'>
            <div className='shop__colorForm'>
              <label className='shop__colorFormLabel colorbeige'>
                <input
                  type='radio'
                  name='react-tips'
                  value='option1'
                  className='shop__colorFormInput'
                />
              </label>
            </div>
            <div className='shop__colorForm colorgreen'>
              <label className='shop__colorFormLabel '>
                <input
                  type='radio'
                  name='react-tips'
                  value='option2'
                  className='shop__colorFormInput'
                />
              </label>
            </div>
            <div className='shop__colorForm'>
              <label className='shop__colorFormLabel colorblack'>
                <input
                  type='radio'
                  name='react-tips'
                  value='option3'
                  className='shop__colorFormInput'
                />
              </label>
            </div>
          </form>
        </div>
        <div className='shop__button'>
          <button>ADD TO BAG</button>
        </div>
        <div className='shop__right_img'>
          <img src={Page3_out} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Shop;
