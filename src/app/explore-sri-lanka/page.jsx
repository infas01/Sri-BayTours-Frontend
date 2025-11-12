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
        'https://images.unsplash.com/photo-1591696331096-c6b0f0498c8f?w=800&q=80',
      location: 'Central Province',
    },
    {
      name: 'Ella',
      description:
        'A charming mountain village nestled in the highlands, famous for scenic train rides, tea plantations, hiking trails, and the iconic Nine Arch Bridge.',
      image:
        'https://images.unsplash.com/photo-1608054825597-5c2836b8c19d?w=800&q=80',
      location: 'Uva Province',
    },
    {
      name: 'Galle Fort',
      description:
        'A beautifully preserved colonial fortress with cobblestone streets, Dutch architecture, charming cafes, and stunning ocean views along the ramparts.',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      location: 'Southern Province',
    },
    {
      name: 'Mirissa Beach',
      description:
        'A pristine tropical paradise perfect for whale watching, surfing, and relaxation. Known for its golden sands, turquoise waters, and vibrant nightlife.',
      image:
        'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
      location: 'Southern Province',
    },
    {
      name: 'Yala National Park',
      description:
        "Sri Lanka's most visited wildlife sanctuary, home to leopards, elephants, sloth bears, and diverse bird species in stunning natural landscapes.",
      image:
        'https://images.unsplash.com/photo-1578193661550-c7d0b7b3aa55?w=800&q=80',
      location: 'Southern Province',
    },
    {
      name: 'Temple of the Tooth',
      description:
        "A sacred Buddhist temple in Kandy housing a relic of Buddha's tooth. This UNESCO site is a major pilgrimage destination with rich cultural significance.",
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      location: 'Kandy',
    },
    {
      name: 'Arugam Bay',
      description:
        'A world-renowned surfing destination on the east coast, offering perfect waves, laid-back atmosphere, and pristine beaches for all skill levels.',
      image:
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
      location: 'Eastern Province',
    },
    {
      name: 'Nuwara Eliya',
      description:
        'Known as "Little England," this hill station features cool climate, colonial architecture, sprawling tea estates, and beautiful botanical gardens.',
      image:
        'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
      location: 'Central Province',
    },
    {
      name: 'Polonnaruwa',
      description:
        'Ancient capital city featuring well-preserved ruins of palaces, temples, and massive stone Buddha statues from the 11th century.',
      image:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80',
      location: 'North Central Province',
    },
    {
      name: 'Dambulla Cave Temple',
      description:
        'A complex of five cave temples containing over 150 Buddha statues and extensive cave paintings, offering spiritual and historical insights.',
      image:
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
      location: 'Central Province',
    },
    {
      name: 'Unawatuna Beach',
      description:
        'A crescent-shaped beach with calm waters perfect for swimming and snorkeling. Lined with restaurants, bars, and water sports facilities.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      location: 'Southern Province',
    },
    {
      name: "Adam's Peak",
      description:
        'A sacred mountain pilgrimage site featuring a challenging night hike rewarded with spectacular sunrise views and spiritual significance for multiple religions.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
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
