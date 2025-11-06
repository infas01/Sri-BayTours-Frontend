'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import placesData from '@/data/places.json';
import { FaStar, FaMapMarkerAlt, FaClock, FaTicketAlt, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PlaceDetailPage() {
  const params = useParams();
  const place = placesData.find(p => p.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Place not found</h2>
          <Link href="/places" className="btn-primary">
            Back to Places
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % place.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + place.images.length) % place.images.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/places"
          className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6 font-medium"
        >
          <FaArrowLeft /> Back to Places
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={place.images[currentImageIndex]}
                alt={place.name}
                fill
                className="object-cover"
              />
              
              {/* Navigation Arrows */}
              {place.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
                  >
                    <FaChevronLeft className="text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
                  >
                    <FaChevronRight className="text-gray-800" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {place.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {place.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-4 ring-sky-500' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${place.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {place.category}
              </span>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">{place.rating}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {place.name}
            </h1>

            <div className="flex items-center text-gray-600 mb-6">
              <FaMapMarkerAlt className="mr-2 text-orange-500" />
              <span>{place.location}</span>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {place.description}
            </p>

            {/* Key Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-lg">
                <FaTicketAlt className="text-sky-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-600">Entry Fee</p>
                  <p className="font-semibold text-gray-800">{place.entryFee}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <FaClock className="text-orange-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-600">Best Time to Visit</p>
                  <p className="font-semibold text-gray-800">{place.bestTimeToVisit}</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Highlights</h3>
              <div className="grid grid-cols-2 gap-3">
                {place.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Link
              href="/drivers"
              className="w-full btn-primary text-center block"
            >
              Find a Driver to Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}