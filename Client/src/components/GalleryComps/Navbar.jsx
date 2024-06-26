import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-start items-center py-2 px-4 lg:px-10'>
      <NavLink to="/">
        <img className='h-auto max-h-[70%] w-auto max-w-[13vw]' src="src/assets/acrilc logo-09.png" alt="Logo" />
      </NavLink>
    </div>
  );
};

export default Navbar;

