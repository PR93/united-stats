import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './pages';
import './tailwind.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Matches from './pages/matches';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen)
      {
        setIsOpen(false)
        console.log("is resized!")
      } 
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/matches' element={<Matches />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
