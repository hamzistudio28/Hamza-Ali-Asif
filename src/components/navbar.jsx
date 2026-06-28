import React, { useState } from 'react'; // 1. Imported useState
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();
  
  // 2. Added state to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false); 
  
  const isActive = (path) => {
    return location.pathname === path 
      ? "text-cyan-400 font-bold" 
      : "text-gray-300 hover:text-cyan-400";
  };

  // Helper function to close the menu when a user clicks a link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0b1320]/90 backdrop-blur-md border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center w-full">
        
        {/* LOGO (Left) */}
        <div className="flex-1 flex justify-start">
          <Link to="/" onClick={closeMenu} className="cursor-pointer hover:opacity-80 transition-opacity relative">
            <img 
              src={Logo} 
              alt="Hamza Ali Asif Logo" 
              className="h-20 md:h-28 w-auto object-contain -my-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] relative z-10" 
            />
          </Link>
        </div>

        {/* DESKTOP LINKS (Center) - Hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link to="/" className={`transition-colors ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/about" className={`transition-colors ${isActive('/about')}`}>About me</Link></li>
          <li><Link to="/projects" className={`transition-colors ${isActive('/projects')}`}>Projects</Link></li>
          <li><Link to="/reviews" className={`transition-colors ${isActive('/reviews')}`}>Reviews</Link></li>
          <li><Link to="/contact" className={`transition-colors ${isActive('/contact')}`}>Contact me</Link></li>
          <li><Link to="/resume" className={`transition-colors ${isActive('/resume')}`}>Resume</Link></li>
        </ul>

        {/* DESKTOP BUTTON (Right) - Hidden on mobile */}
        <div className="flex-1 flex justify-end hidden md:flex">
          <a 
            href="/my-resume.pdf" 
            download 
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transform hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="flex-1 flex justify-end md:hidden">
          {/* 3. Toggles the isOpen state on click */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none"
          >
            {/* Dynamically swaps between Hamburger and X icon */}
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* 4. MOBILE DROPDOWN MENU */}
      {/* This section ONLY renders if isOpen is true! */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1320] border-t border-white/10 px-6 py-6 flex flex-col gap-5 shadow-2xl absolute w-full">
          <Link to="/" onClick={closeMenu} className={`block text-lg ${isActive('/')}`}>Home</Link>
          <Link to="/about" onClick={closeMenu} className={`block text-lg ${isActive('/about')}`}>About me</Link>
          <Link to="/projects" onClick={closeMenu} className={`block text-lg ${isActive('/projects')}`}>Projects</Link>
          <Link to="/reviews" onClick={closeMenu} className={`block text-lg ${isActive('/reviews')}`}>Reviews</Link>
          <Link to="/contact" onClick={closeMenu} className={`block text-lg ${isActive('/contact')}`}>Contact me</Link>
          <Link to="/resume" onClick={closeMenu} className={`block text-lg ${isActive('/resume')}`}>Resume</Link>
          
          <a 
            href="/my-resume.pdf" 
            download 
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-7 rounded-full transition-all duration-300 w-full text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}