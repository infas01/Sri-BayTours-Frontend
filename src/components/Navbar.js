'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-sky-500">Sri'</span>
            <span className="text-2xl font-bold text-orange-500">BayTours</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/places" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
              Tourist Places
            </Link>
            <Link href="/drivers" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
              Drivers & Rides
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-sky-500 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/places"
              className="block px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-md"
              onClick={toggleMenu}
            >
              Tourist Places
            </Link>
            <Link
              href="/drivers"
              className="block px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-md"
              onClick={toggleMenu}
            >
              Drivers & Rides
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}