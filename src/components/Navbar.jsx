'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
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

  // Check if the current path matches the link
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
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/logo-dark-1.png"
                alt="Sri'BayTours Logo"
                width={80}
                height={80}
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
              />
              <span className="ml-3 text-2xl font-bold text-primary-navy block">
                Sri&apos;BayTours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
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
                  {/* Underline only shows on hover for non-active links */}
                  {!isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-primary-ocean transition-all duration-300 w-0 group-hover:w-full"></span>
                  )}
                </Link>
              </div>
            ))}

            <div>
              <Link href="/reserve-a-ride">
                <button
                  className={`transition-all duration-300 font-semibold py-3 px-6 rounded-lg shadow-lg ${
                    isActive('/reserve-a-ride')
                      ? 'bg-primary-navy/90 text-white scale-105'
                      : 'btn-secondary'
                  }`}
                >
                  Reserve a Ride
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-primary-navy mr-5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pb-4"
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
                    ? 'bg-primary-navy/90 text-white'
                    : 'btn-secondary'
                }`}
              >
                Reserve a Ride
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
