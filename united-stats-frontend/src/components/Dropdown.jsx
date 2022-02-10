import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
  return (
  <div className={isOpen ? 'grid grid-rows-5 text-center items-center bg-united-graphite-500 text-white' : 'hidden'}
  onClick={toggle}>
    <Link className='p-4' to='/'>Home</Link>
    <Link className='p-4' to='/about'>About</Link>
    <Link className='p-4' to='/tables'>Tables</Link>
    <Link className='p-4' to='/players'>Players</Link>
    <Link className='p-4' to='/matches'>Matches</Link>
  </div>
  );
};

export default Dropdown;
