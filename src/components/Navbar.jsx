import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
   
  <header className="sticky inset-0 z-50 border-b border-slate-100 bg-blue-default backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex items-center">
          <Link to="/">
            <img src="/src/assets/CSD_Logo.png" loading="lazy" alt="Logo" className="w-8 h-8" />
          </Link>
        </div>
        <ul className="hidden items-center justify-center gap-6 md:flex">
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <a href="#">Funding Opportunities</a>
          </li>
        </ul>
        <div className="flex-grow"></div>
        <div className="hidden items-center justify-center gap-6 md:flex">
        <input className='' type='search'/>
          <Link to="/login" className="bg-gradient-to-br bg-blue-dark hover:bg-blue-  px-[40px] py-2 font-dm text-sm font-medium text-white shadow-md  transition-transform  hover:scale-[1.03]">Login</Link>
        </div>
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button">
            <FiMenu className="h-6 w-auto text-blue-light"/>
          </button>
        </div>
      </nav>
    </header>
    
  );
}

export default Navbar;
