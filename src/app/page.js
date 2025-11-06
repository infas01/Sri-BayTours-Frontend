import Hero from '@/components/Hero';
import PlaceCard from '@/components/PlaceCard';
import DriverCard from '@/components/DriverCard';
import Link from 'next/link';
import placesData from '@/data/places.json';
import driversData from '@/data/drivers.json';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  // Get featured places (top 3 by rating)
  const featuredPlaces = placesData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Get featured drivers (top 3 by rating)
  const featuredDrivers = driversData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Places Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Tourist Places</h2>
            <p className="section-subtitle">
              Discover the most popular destinations in Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/places"
              className="inline-flex items-center gap-2 btn-primary"
            >
              View All Places
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Drivers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Top Rated Drivers</h2>
            <p className="section-subtitle">
              Travel with experienced and trusted local drivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredDrivers.map((driver) => (
              <DriverCard key={driver.id} driver={driver} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/drivers"
              className="inline-flex items-center gap-2 btn-secondary"
            >
              View All Drivers
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Sri'BayTours?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏝️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Amazing Destinations</h3>
              <p className="text-sky-100">
                Explore UNESCO heritage sites, pristine beaches, and cultural landmarks
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Drivers</h3>
              <p className="text-sky-100">
                Experienced, licensed drivers with excellent local knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
              <p className="text-sky-100">
                Quick WhatsApp booking with instant confirmation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}