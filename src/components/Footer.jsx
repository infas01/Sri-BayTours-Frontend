'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <Image
              src="/logo.png"
              alt="Sri'BayTours Logo"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Sri'BayTours</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Explore the Pearl of the Indian Ocean with our premium taxi and tour services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4 text-primary-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-ocean transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore-sri-lanka" className="text-gray-300 hover:text-primary-ocean transition-colors duration-300">
                  Explore Sri Lanka
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-ocean transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-ocean transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4 text-primary-gold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-ocean mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Pottuvil, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-ocean flex-shrink-0" />
                <a href="tel:+94762726459" className="text-gray-300 hover:text-primary-ocean transition-colors text-sm">
                  +94 76 272 6459
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-ocean flex-shrink-0" />
                <a href="mailto:infas1002@gmail.com" className="text-gray-300 hover:text-primary-ocean transition-colors text-sm">
                  infas1002@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4 text-primary-gold">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Airport Transfers</li>
              <li>• City Tours</li>
              <li>• Hotel Pickups</li>
              <li>• Custom Tour Packages</li>
              <li>• Day Trips</li>
              <li>• Multi-Day Tours</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-primary-ocean transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-primary-ocean transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-primary-ocean transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Sri'BayTours. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}