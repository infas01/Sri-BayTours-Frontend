'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ExploreSriLanka() {
  const destinations = [
    {
      name: 'Sigiriya Rock Fortress',
      description:
        'An ancient rock fortress and palace ruins surrounded by lush gardens. This UNESCO World Heritage Site features remarkable frescoes and offers breathtaking panoramic views.',
      image:
        'https://images.unsplash.com/photo-1612862862126-865765df2ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      location: 'Central Province',
    },
    {
      name: 'Ella',
      description:
        'A charming mountain village nestled in the highlands, famous for scenic train rides, tea plantations, hiking trails, and the iconic Nine Arch Bridge.',
      image:
        'https://images.unsplash.com/photo-1566766189268-ecac9118f2b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      location: 'Uva Province',
    },
    {
      name: 'Galle Fort',
      description:
        'A beautifully preserved colonial fortress with cobblestone streets, Dutch architecture, charming cafes, and stunning ocean views along the ramparts.',
      image:
        'https://images.unsplash.com/photo-1654561773591-57b9413c45c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      location: 'Southern Province',
    },
    {
      name: 'Mirissa Beach',
      description:
        'A pristine tropical paradise perfect for whale watching, surfing, and relaxation. Known for its golden sands, turquoise waters, and vibrant nightlife.',
      image:
        'https://images.unsplash.com/photo-1580910527739-556eb89f9d65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      location: 'Southern Province',
    },
    {
      name: 'Yala National Park',
      description:
        "Sri Lanka's most visited wildlife sanctuary, home to leopards, elephants, sloth bears, and diverse bird species in stunning natural landscapes.",
      image:
        'https://images.unsplash.com/photo-1621847473222-d85c022cbf07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1325',
      location: 'Southern Province',
    },
    {
      name: 'Temple of the Tooth',
      description:
        "A sacred Buddhist temple in Kandy housing a relic of Buddha's tooth. This UNESCO site is a major pilgrimage destination with rich cultural significance.",
      image:
        'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Kandy',
    },
    {
      name: 'Arugam Bay',
      description:
        'A world-renowned surfing destination on the east coast, offering perfect waves, laid-back atmosphere, and pristine beaches for all skill levels.',
      image:
        'https://images.unsplash.com/photo-1552055568-f8c4fb8c6320?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Eastern Province',
    },
    {
      name: 'Nuwara Eliya',
      description:
        'Known as "Little England," this hill station features cool climate, colonial architecture, sprawling tea estates, and beautiful botanical gardens.',
      image:
        'https://images.unsplash.com/photo-1708338914870-797de586672d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
      location: 'Central Province',
    },
    {
      name: 'Polonnaruwa',
      description:
        'Ancient capital city featuring well-preserved ruins of palaces, temples, and massive stone Buddha statues from the 11th century.',
      image:
        'https://images.unsplash.com/photo-1709729519591-2fb2d25395df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765',
      location: 'North Central Province',
    },
    {
      name: 'Dambulla Cave Temple',
      description:
        'A complex of five cave temples containing over 150 Buddha statues and extensive cave paintings, offering spiritual and historical insights.',
      image:
        'https://images.unsplash.com/photo-1704798690646-92524b61ce03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Central Province',
    },
    {
      name: 'Unawatuna Beach',
      description:
        'A crescent-shaped beach with calm waters perfect for swimming and snorkeling. Lined with restaurants, bars, and water sports facilities.',
      image:
        'https://images.unsplash.com/photo-1665765415963-28b2fa36df8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      location: 'Southern Province',
    },
    {
      name: "Adam's Peak",
      description:
        'A sacred mountain pilgrimage site featuring a challenging night hike rewarded with spectacular sunrise views and spiritual significance for multiple religions.',
      image:
        'https://images.unsplash.com/photo-1593983913587-361576add259?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      location: 'Sabaragamuwa Province',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Explore Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-navy/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Explore Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl">
            Discover the Island's Most Beautiful Destinations
          </p>
        </motion.div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Must-Visit Destinations</h2>
            <p className="section-subtitle">
              Experience the diverse beauty and rich culture of Sri Lanka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-sm">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{destination.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-ocean to-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore These Destinations?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us take you on an unforgettable journey across Sri Lanka's
              most beautiful locations
            </p>
            <a href="/reserve-a-ride">
              <button className="btn-primary text-lg px-10 py-4">
                Book Your Tour Now
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
