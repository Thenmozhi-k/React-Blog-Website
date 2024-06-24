import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook , FaDribbbleSquare, FaTwitterSquare  } from "react-icons/fa";


const Nav = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "service" },
    { name: "About", path: "about" },
    { name: "Blogs", path: "blog" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <header className='bg-black'>
      <nav className='px-4 py-4'>
        <a href="/">
          <img src="src/assets/logo.png" alt="logo" className='w-28' />
        </a>

        <ul className='md:flex gap-12 text-lg hidden'>
          {navItems.map(({ path, name }, index) => (
            <li key={index} className='text-white'>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>

        <div className='lg:flex text-white gap-4 items-center hidden'>
          <a href="" className='hover:text-orange-500'><FaFacebook /></a>
          <a href="" className='hover:text-orange-500'><FaDribbbleSquare /></a>
          <a href="" className='hover:text-orange-500'><FaTwitterSquare /></a>
          <button className='bg-orange-500 px-6 py-2 font-medium rounded hover-bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
    