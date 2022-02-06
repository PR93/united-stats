import React from 'react';
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
  <div className='bg-white h-screen flex flex-col justify-center items-center text-united-red2'>
    <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl mb-10'>
        Untied Footage
    </h1>
      <Link to='/menu' className=' py-6 px-10 bg-united-graphite-500 rounded-full text-united-red2 text-3xl hover:bg-united-red2 hover:text-united-graphite-500 transition duration-300 flex items-center hover:animate-bounce'>
        <svg className="w-12 h-12 ml-5 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
      </Link>
  </div>
  
  );
};

export default Hero;
