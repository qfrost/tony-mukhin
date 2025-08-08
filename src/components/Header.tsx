import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Featured' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-gray-900 border-r border-gray-800 z-50"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-8 h-full flex flex-col">
          {/* Brand Name */}
          <Link to="/" className="mb-12">
            <h1 className="text-3xl font-bold text-white tracking-wider uppercase">
              Anton Muhin
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-lg font-medium tracking-wider uppercase transition-colors duration-200 ${
                      location.pathname === item.path 
                        ? 'text-green-400' 
                        : 'text-gray-300 hover:text-green-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mt-auto space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                Contact:
              </p>
              <a 
                href="mailto:hello@antonmuhin.com" 
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                hello@antonmuhin.com
              </a>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                Based in:
              </p>
              <p className="text-gray-300">LA California</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://instagram.com/antonmuhin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                📸
              </a>
              <a 
                href="https://behance.net/antonmuhin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                🎨
              </a>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Header */}
      <motion.header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-white">
              Anton Muhin
            </Link>

            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="w-6 h-0.5 bg-white mb-1"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white mb-1"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                className="mt-4 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block text-lg font-medium ${
                        location.pathname === item.path
                          ? 'text-green-400'
                          : 'text-gray-300 hover:text-green-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header; 