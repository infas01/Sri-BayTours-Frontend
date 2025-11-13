'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // NEW: Track if component is mounted
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true); // Set to true after mount

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore Sri Lanka', href: '/explore-sri-lanka' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            {isMounted ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Sri'BayTours Logo"
                  width={60}
                  height={60}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <span className="ml-3 text-2xl font-bold text-primary-navy hidden sm:block">
                  Sri'BayTours
                </span>
              </motion.div>
            ) : (
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Sri'BayTours Logo"
                  width={60}
                  height={60}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <span className="ml-3 text-2xl font-bold text-primary-navy hidden sm:block">
                  Sri'BayTours
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) =>
              isMounted ? (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors duration-300 relative group ${
                      isActive(link.href)
                        ? 'text-primary-ocean'
                        : 'text-gray-700 hover:text-primary-ocean'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary-ocean transition-all duration-300 ${
                        isActive(link.href)
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                </motion.div>
              ) : (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors duration-300 relative group ${
                      isActive(link.href)
                        ? 'text-primary-ocean'
                        : 'text-gray-700 hover:text-primary-ocean'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary-ocean transition-all duration-300 ${
                        isActive(link.href)
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                </div>
              )
            )}
            {isMounted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/reserve-a-ride">
                  <button
                    className={`transition-all duration-300 font-semibold py-3 px-6 rounded-lg shadow-lg ${
                      isActive('/reserve-a-ride')
                        ? 'bg-primary-gold/90 text-white scale-105'
                        : 'btn-primary'
                    }`}
                  >
                    Reserve a Ride
                  </button>
                </Link>
              </motion.div>
            ) : (
              <Link href="/reserve-a-ride">
                <button
                  className={`transition-all duration-300 font-semibold py-3 px-6 rounded-lg shadow-lg ${
                    isActive('/reserve-a-ride')
                      ? 'bg-primary-gold/90 text-white scale-105'
                      : 'btn-primary'
                  }`}
                >
                  Reserve a Ride
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-navy p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-primary-ocean rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-3 px-4 font-medium transition-colors duration-300 border-b border-gray-200 ${
                    isActive(link.href)
                      ? 'text-primary-ocean bg-primary-ocean/5 rounded-lg border-l-4 border-primary-ocean'
                      : 'text-gray-700 hover:text-primary-ocean hover:bg-gray-50 rounded-lg'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/reserve-a-ride" onClick={() => setIsOpen(false)}>
                <button
                  className={`w-full mt-4 transition-all duration-300 font-semibold py-3 px-6 rounded-lg shadow-lg ${
                    isActive('/reserve-a-ride')
                      ? 'bg-primary-gold/90 text-white'
                      : 'btn-primary'
                  }`}
                >
                  Reserve a Ride
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
