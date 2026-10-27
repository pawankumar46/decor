import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--sage-light), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <h3 className="font-display text-3xl font-semibold leading-tight">
              Sri Venkateshwara
              <span className="mt-1 block text-sm font-sans font-medium uppercase tracking-[0.28em] text-[var(--champagne-soft)]">
                Florist
              </span>
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Floral décor crafted for sacred ceremonies and joyous celebrations across Bengaluru.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--champagne-soft)]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--champagne-soft)]">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>Wedding &amp; reception décor</li>
              <li>Engagement &amp; sangeet</li>
              <li>Naming &amp; baby shower</li>
              <li>Gruhapravesha setups</li>
              <li>Birthday &amp; anniversary</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--champagne-soft)]">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sage-light)]" aria-hidden="true" />
                <span>#510, 14th Main Road, 4th Block, Nandini Layout, Bengaluru-560096</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sage-light)]" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917338046069" className="transition-colors hover:text-white">
                    +91 73380 46069
                  </a>
                  <a href="tel:+919845496940" className="transition-colors hover:text-white">
                    +91 98454 96940
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[var(--sage-light)]" aria-hidden="true" />
                <a href="mailto:narensadan510@gmail.com" className="transition-colors hover:text-white">
                  narensadan510@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Sri Venkateshwara Florist. All rights reserved.</p>
          <p className="tracking-wide">Crafted with care in Bengaluru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
