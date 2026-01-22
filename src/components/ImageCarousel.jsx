'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: '/images/carousel-1.png',
      title: "Welcome to Sri'BayTours",
      subtitle: 'Explore the Pearl of the Indian Ocean',
    },
    {
      image:
        'https://images.unsplash.com/photo-1721462893612-2e65493f28fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWRhbXMlMjBwZWFrfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
      title: 'Discover Paradise',
      subtitle: 'Experience the beauty of Sri Lanka',
    },
    {
      image: '/images/carousel-3.png',
      title: 'Your Journey Begins',
      subtitle: 'Premium taxi and tour services',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4">
          <motion.div
            key={`title-${currentIndex}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
              {slides[currentIndex].title}
            </h1>
          </motion.div>
          <motion.div
            key={`subtitle-${currentIndex}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
          >
            <p className="text-l sm:text-3xl mb-8 drop-shadow-lg">
              {slides[currentIndex].subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
          >
            <Link href="/reserve-a-ride">
              <button className="btn-primary text-lg px-8 py-4">
                Book Your Journey
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <FaChevronLeft className="text-sm md:text-lg" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <FaChevronRight className="text-sm md:text-lg" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
