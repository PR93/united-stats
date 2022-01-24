import React from 'react';
import { Link } from 'react-router-dom'
import LogoSvg from '../images/manchester-united.svg'

const Navbar = ({ toggle }) => {
  return (
      <nav className='flex justify-between items-center h-24 bg-white text-united-graphite relative shadow-sm shadow-united-graphite font-mono' role='navigation'>
          <Link to='/' className='pl-8 text-united-red2 font-bold'> 
            <div className='flex justify-center items-center'>
              <img src={LogoSvg} className="flex items-center h-20 cursor-pointer p-0 mr-1 ml-1" alt="Logo"/>
            </div>
          </Link>
          <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
           <div className='pr-8 md:block hidden'>
               <Link className='p-4' to='/'>Home</Link>
               <Link className='p-4' to='/about'>About</Link>
               <Link className='p-4' to='/tables'>Tables</Link>
               <Link className='p-4' to='/players'>Players</Link>
               <Link className='p-4' to='/matches'>Matches</Link>
           </div>
      </nav>
  );
};

export default Navbar;
