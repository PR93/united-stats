import React from 'react';
import CR7Img from '../images/cr7.jpg';
import HM5Img from '../images/hm5.jpg';
import SMCT39Img from '../images/smct39.jpg';

const Content = () => {
  return (
  <div>
    <div className='hero-player'>
        <img src={CR7Img} alt='cr7' className='hero-player-img'></img>
        <div className='hero-player-info'>
        <h2 className='hero-player-h2'>Cristiano Ronaldo [7]</h2>
        </div>
    </div>
    <div className='hero-player'>
        <img src={HM5Img} alt='hm5' className='hero-player-img'></img>
        <div className='hero-player-info'>
        <h2 className='hero-player-h2'>Harry Maguire [5]</h2>
        </div>
    </div>
    <div className='hero-player'>
        <img src={SMCT39Img} alt='smct39' className='hero-player-img'></img>
        <div className='hero-player-info'>
        <h2 className='hero-player-h2'>Scott McTominay [39]</h2>
        </div>
    </div>
  </div>
  );
};

export default Content;
