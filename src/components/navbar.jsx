import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// 1. Import the logo image from your assets folder
import Logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path 
      ? "text-cyan-400 font-bold" 
      : "text-gray-300 hover:text-cyan-400";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0b1320]/90 backdrop-blur-md border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center w-full">
        
        {/* LOGO (Left) - Made significantly bigger with negative margins */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="cursor-pointer hover:opacity-80 transition-opacity relative">
            {/* The comment is safely up here now! */}
            <img 
              src={Logo} 
              alt="Hamza Ali Asif Logo" 
              className="h-20 md:h-28 w-auto object-contain -my-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] relative z-10" 
            />
          </Link>
        </div>

        {/* LINKS (Center) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link to="/" className={`transition-colors ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/about" className={`transition-colors ${isActive('/about')}`}>About me</Link></li>
          <li><Link to="/projects" className={`transition-colors ${isActive('/projects')}`}>Projects</Link></li>
          <li><Link to="/reviews" className={`transition-colors ${isActive('/reviews')}`}>Reviews</Link></li>
          <li><Link to="/contact" className={`transition-colors ${isActive('/contact')}`}>Contact me</Link></li>
          <li><Link to="/resume" className={`transition-colors ${isActive('/resume')}`}>Resume</Link></li>
        </ul>

        {/* BUTTON (Right) */}
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
          <button className="text-gray-300 hover:text-cyan-400 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}