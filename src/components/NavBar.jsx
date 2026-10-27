import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive ? 'text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
    } after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-[var(--sage)] after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--ink)]/8 bg-[var(--paper)]/90 shadow-sm backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link to="/" className="group flex min-w-0 flex-col">
          <span className="font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--sage)] sm:text-2xl">
            Sri Venkateshwara
          </span>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[var(--champagne)] sm:block">
            Florist
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-xs">
            Book consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-full p-2 text-[var(--ink)] transition-colors hover:bg-[var(--mist)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[var(--ink)]/8 bg-[var(--paper)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--mist)] text-[var(--ink)]'
                        : 'text-[var(--muted)] hover:bg-[var(--mist)] hover:text-[var(--ink)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Book consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
