'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart, FaUsers, FaAward, FaLeaf } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion for Service',
      description:
        'We are passionate about showcasing the beauty of Sri Lanka and ensuring every guest has an unforgettable experience.',
    },
    {
      icon: <FaUsers />,
      title: 'Customer-Centric',
      description:
        'Your satisfaction is our priority. We go above and beyond to meet your needs and exceed your expectations.',
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description:
        'We maintain the highest standards in service quality, vehicle maintenance, and professional conduct.',
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainability',
      description:
        "We are committed to responsible tourism and preserving Sri Lanka's natural beauty for future generations.",
    },
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-us-1.png"
          alt="About Sri'BayTours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-navy/30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">
            Your Gateway to Sri Lankan Adventures
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary-navy mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Sri'BayTours was born from a deep love for Sri Lanka and a
                passion for sharing its wonders with the world. Founded in the
                beautiful coastal town of Pottuvil, we started with a simple
                mission: to provide travelers with authentic, comfortable, and
                memorable experiences across this magnificent island nation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                What began as a small taxi service has evolved into a
                comprehensive tour operation, offering everything from airport
                transfers to multi-day cultural expeditions. Our team of
                experienced drivers and guides are not just professionals –
                they're passionate locals who know every hidden beach, ancient
                temple, and scenic viewpoint across Sri Lanka.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we're proud to be one of the most trusted tour operators
                in the Eastern Province, having served thousands of happy
                customers from around the globe. Every journey we facilitate is
                an opportunity to showcase Sri Lankan hospitality and create
                lasting memories.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <Image
                src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80"
                alt="Sri Lanka Beach"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Sri Lanka Temple"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
                alt="Sri Lanka Nature"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1719807633728-7ff13f7f2b61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="Sri Lanka Wildlife"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-5xl text-primary-ocean mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card p-10"
            >
              <h3 className="text-3xl font-bold text-primary-navy mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide exceptional transportation and tour services that
                showcase the authentic beauty of Sri Lanka, while delivering
                comfort, safety, and unforgettable experiences to every
                traveler. We strive to be the bridge between curious explorers
                and the hidden gems of our beloved island.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card p-10"
            >
              <h3 className="text-3xl font-bold text-primary-navy mb-6">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become Sri Lanka's most trusted and beloved tour operator,
                recognized for our commitment to excellence, sustainable
                tourism, and authentic cultural experiences. We envision a
                future where every visitor leaves with not just photographs, but
                cherished memories and a deep appreciation for Sri Lankan
                culture and nature.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let's Create Memories Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have explored Sri Lanka
              with us
            </p>
            <a href="/reserve-a-ride">
              <button className="btn-primary text-lg px-10 py-4">
                Start Your Journey
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
