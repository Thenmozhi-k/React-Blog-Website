import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook , FaDribbbleSquare, FaTwitterSquare, FaBars  } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';
import Modal from '../Components/Modal';
import logo from '../assets/logo.png'


const Nav = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "service" },
    { name: "About", path: "about" },
    { name: "Blogs", path: "blog" },
    { name: "Contact", path: "contact" },
  ];

  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const [isModelOpen , setIsModelOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // modal 
  const openModal = () => {
    setIsModelOpen(true);
  }

  const closeModal = () => {
    setIsModelOpen(false);
  }

  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center '>
        <a href="/">
          <img src={logo} alt="logo" className='w-28' />
        </a>

        <ul className='md:flex gap-12 text-lg hidden'>
          {navItems.map(({ path, name }, index) => (
            <li key={index} className='text-white'>
              <NavLink 
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
          
          {/* menu icons */}
        <div className='lg:flex text-white gap-4 items-center hidden'>
          <a href="" className='hover:text-orange-500'><FaFacebook /></a>
          <a href="" className='hover:text-orange-500'><FaDribbbleSquare /></a>
          <a href="" className='hover:text-orange-500'><FaTwitterSquare /></a>
          <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
        </div>

        <Modal isOpen={isModelOpen} onClose={closeModal}/>
         
         {/* mobile menu mobile screen */}
        <div className='md:hidden'> 
          <button className='cursor-pointer' onClick={toggleMenu}>

            {
              isMenuOpen ? <FaXmark className='w-5 h-5'/> :<FaBars className='w-5 h-5' />
            }
            
            </button>
        </div>
      </nav>

      {/* =======menu item display in small screen============ */}

      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-24 text-black  bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden" }`}>
       {navItems.map(({path, name} , index) => (
        <li key={index}>
          <NavLink onClick={toggleMenu} to={path}>{name}</NavLink>
        </li>

       ))}
      </ul>
    </header>
  );
};

export default Nav;
    