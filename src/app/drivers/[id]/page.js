'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import driversData from '@/data/drivers.json';
import config from '@/data/config.json';
import { FaStar, FaMapMarkerAlt, FaCar, FaUsers, FaLanguage, FaCheckCircle, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

export default function DriverDetailPage() {
  const params = useParams();
  const driver = driversData.find(d => d.id === params.id);

  if (!driver) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Driver not found</h2>
          <Link href="/drivers" className="btn-primary">
            Back to Drivers
          </Link>
        </div>
      </div>
    );
  }

  // Create WhatsApp message
  const whatsappMessage = `Hello! I'm interested in booking a ride with *${driver.name}*

*Driver Details:*
- Vehicle: ${driver.vehicleModel} (${driver.vehicleType})
- Capacity: ${driver.capacity} passengers
- Location: ${driver.location}
- Rate: ${driver.pricePerDay}/day
- Rating: ${driver.rating}⭐

Please help me arrange this booking. Thank you!`;

  const whatsappLink = `https://wa.me/${config.adminWhatsApp.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/drivers"
          className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6 font-medium"
        >
          <FaArrowLeft /> Back to Drivers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Driver Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
              <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-sky-100 to-cyan-100">
                <Image
                  src={driver.photo}
                  alt={driver.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">{driver.rating}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {driver.name}
              </h2>

              <p className="text-gray-600 mb-4">{driver.experience} of experience</p>

              <div className="text-3xl font-bold text-sky-500 mb-6">
                {driver.pricePerDay}
                <span className="text-lg text-gray-500 font-normal">/day</span>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={24} />
                Book via WhatsApp
              </a>

              <p className="text-xs text-gray-500 text-center mt-3">
                Click to contact admin for booking
              </p>
            </div>
          </div>

          {/* Driver Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">About</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {driver.description}
              </p>

              {/* Vehicle Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-sky-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaCar className="text-sky-500 text-xl" />
                    <p className="text-sm text-gray-600">Vehicle</p>
                  </div>
                  <p className="font-semibold text-gray-800">{driver.vehicleModel}</p>
                  <p className="text-sm text-gray-600">{driver.vehicleType} • {driver.vehicleNumber}</p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaUsers className="text-orange-500 text-xl" />
                    <p className="text-sm text-gray-600">Capacity</p>
                  </div>
                  <p className="font-semibold text-gray-800">{driver.capacity} Passengers</p>
                  <p className="text-sm text-gray-600">Comfortable seating</p>
                </div>

                <div className="p-4 bg-cyan-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="text-cyan-500 text-xl" />
                    <p className="text-sm text-gray-600">Location</p>
                  </div>
                  <p className="font-semibold text-gray-800">{driver.location}</p>
                  <p className="text-sm text-gray-600">Available for pickup</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaLanguage className="text-purple-500 text-xl" />
                    <p className="text-sm text-gray-600">Languages</p>
                  </div>
                  <p className="font-semibold text-gray-800">
                    {driver.languages.join(', ')}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Vehicle Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {driver.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="mb-6 text-sky-100">
                Contact us via WhatsApp to arrange your ride with {driver.name}. 
                Our admin team will confirm availability and finalize your booking details.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-sky-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <FaWhatsapp size={20} />
                Contact Admin Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}