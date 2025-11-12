'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';
import GoogleReviews from '@/components/GoogleReviews';
import {
  FaCheckCircle,
  FaUserTie,
  FaCar,
  FaMapMarkedAlt,
  FaClock,
  FaShieldAlt,
} from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      icon: <FaUserTie />,
      title: 'Professional Drivers',
      description:
        'Experienced and licensed drivers who know Sri Lanka like the back of their hand',
    },
    {
      icon: <FaCar />,
      title: 'Comfortable Vehicles',
      description: 'Well-maintained, air-conditioned vehicles for your comfort',
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Custom Routes',
      description:
        'Flexible itineraries tailored to your preferences and schedule',
    },
    {
      icon: <FaClock />,
      title: '24/7 Service',
      description:
        'Round-the-clock availability for all your transportation needs',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Secure',
      description:
        'Your safety is our top priority with fully insured vehicles',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Best Prices',
      description: 'Competitive rates with no hidden charges or surprises',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sri Lanka Beach"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary-navy mb-6">
                Welcome to Sri'BayTours
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Discover the enchanting beauty of Sri Lanka with Sri'BayTours,
                your trusted travel companion in the Pearl of the Indian Ocean.
                Based in the stunning coastal town of Pottuvil, we specialize in
                providing premium taxi services and unforgettable guided tours
                across Sri Lanka's most breathtaking destinations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're seeking pristine beaches, ancient cultural sites,
                lush tea plantations, or thrilling wildlife encounters, our
                experienced team is dedicated to creating personalized
                experiences that showcase the very best of Sri Lankan
                hospitality and natural wonder.
              </p>
              <Link href="/about">
                <button className="btn-secondary">Read More About Us</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose Sri'BayTours?</h2>
            <p className="section-subtitle">
              We're committed to providing exceptional service and unforgettable
              experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-5xl text-primary-ocean mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Explore Sri Lanka?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Book your ride today and experience the beauty of Sri Lanka with
              our professional drivers
            </p>
            <Link href="/reserve-a-ride">
              <button className="btn-primary text-lg px-10 py-4">
                Reserve Your Ride Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
