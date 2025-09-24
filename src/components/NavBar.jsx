import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative px-3 py-2 text-lg font-medium transition-all duration-300 
    ${isActive ? "font-semibold" : "text-gray-700"}
    after:content-[''] after:block after:w-0 after:h-[2px] 
    after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 font-sans" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo / Brand */}
          <div className="flex items-center">
            <NavLink
              to="/"
             className="text-3xl font-extrabold italic hover:scale-105 transform transition duration-300"
             style={{ color: '#2b6777' }}
 >
              🌸 Sri Venkateshwara Florist
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              style={{ color: '#2b6777' }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)} style={{ color: '#2b6777' }}>
              Home
            </NavLink>
            <NavLink to="/contact" className={linkClasses} onClick={() => setIsOpen(false)} style={{ color: '#2b6777' }}>
              Contact Us
            </NavLink>
            <NavLink to="/gallery" className={linkClasses} onClick={() => setIsOpen(false)} style={{ color: '#2b6777' }}>
              Gallery
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
