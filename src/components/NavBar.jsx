import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative px-3 py-2 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 
    ${isActive ? "font-semibold" : "text-gray-700"}
    after:content-[''] after:block after:w-0 after:h-[2px] 
    after:transition-all after:duration-300 hover:after:w-full`;

  const mobileLinkClasses = ({ isActive }) =>
    `block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg mx-2
    ${isActive ? "font-semibold bg-gray-50" : "text-gray-700 hover:bg-gray-50"}`;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 font-sans sticky top-0 z-50" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Left side - Logo / Brand */}
          <div className="flex items-center flex-shrink-0">
            <NavLink
              to="/"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold italic hover:scale-105 transform transition duration-300 truncate"
              style={{ color: '#2b6777' }}
            >
              <span className="hidden sm:inline">🌸 Sri Venkateshwara Florist</span>
              <span className="sm:hidden">🌸 SVF</span>
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <NavLink to="/" className={linkClasses} style={{ color: '#2b6777' }}>
              Home
            </NavLink>
            <NavLink to="/contact" className={linkClasses} style={{ color: '#2b6777' }}>
              Contact Us
            </NavLink>
            <NavLink to="/gallery" className={linkClasses} style={{ color: '#2b6777' }}>
              Gallery
            </NavLink>
          </div>

          {/* Tablet Links */}
          <div className="hidden md:flex lg:hidden space-x-4">
            <NavLink to="/" className={linkClasses} style={{ color: '#2b6777' }}>
              Home
            </NavLink>
            <NavLink to="/contact" className={linkClasses} style={{ color: '#2b6777' }}>
              Contact
            </NavLink>
            <NavLink to="/gallery" className={linkClasses} style={{ color: '#2b6777' }}>
              Gallery
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ color: '#2b6777' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
          <div className="px-3 pt-2 pb-4 space-y-1">
            <NavLink 
              to="/" 
              className={mobileLinkClasses} 
              onClick={() => setIsOpen(false)} 
              style={{ color: '#2b6777' }}
            >
              Home
            </NavLink>
            <NavLink 
              to="/contact" 
              className={mobileLinkClasses} 
              onClick={() => setIsOpen(false)} 
              style={{ color: '#2b6777' }}
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={mobileLinkClasses} 
              onClick={() => setIsOpen(false)} 
              style={{ color: '#2b6777' }}
            >
              Gallery
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
