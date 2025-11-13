'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaComments,
  FaTimes,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      href: `https://wa.me/94762726459`,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      href: 'mailto:infas1002@gmail.com',
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      href: 'tel:+94762726459',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 flex flex-col space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.label === 'WhatsApp' ? '_blank' : '_self'}
                rel={option.label === 'WhatsApp' ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className={`${option.color} text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
                title={option.label}
              >
                <span className="text-2xl">{option.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-primary-ocean hover:bg-primary-blue'
        } text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl"
        >
          {isOpen ? <FaTimes /> : <FaComments />}
        </motion.span>
      </motion.button>
    </div>
  );
}
