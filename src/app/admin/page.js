'use client';

import Link from 'next/link';
import placesData from '@/data/places.json';
import driversData from '@/data/drivers.json';
import { FaMapMarkedAlt, FaCar, FaStar, FaChartLine } from 'react-icons/fa';

export default function AdminDashboard() {
  const totalPlaces = placesData.length;
  const totalDrivers = driversData.length;
  const avgPlaceRating = (
    placesData.reduce((sum, p) => sum + p.rating, 0) / totalPlaces
  ).toFixed(1);
  const avgDriverRating = (
    driversData.reduce((sum, d) => sum + d.rating, 0) / totalDrivers
  ).toFixed(1);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Places</p>
              <p className="text-3xl font-bold text-sky-500">{totalPlaces}</p>
            </div>
            <div className="bg-sky-100 p-4 rounded-full">
              <FaMapMarkedAlt className="text-sky-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Drivers</p>
              <p className="text-3xl font-bold text-orange-500">
                {totalDrivers}
              </p>
            </div>
            <div className="bg-orange-100 p-4 rounded-full">
              <FaCar className="text-orange-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Place Rating</p>
              <p className="text-3xl font-bold text-yellow-500">
                {avgPlaceRating}
              </p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-full">
              <FaStar className="text-yellow-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Driver Rating</p>
              <p className="text-3xl font-bold text-cyan-500">
                {avgDriverRating}
              </p>
            </div>
            <div className="bg-cyan-100 p-4 rounded-full">
              <FaChartLine className="text-cyan-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/places">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-sky-100 p-4 rounded-full">
                <FaMapMarkedAlt className="text-sky-500 text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Manage Tourist Places
              </h2>
            </div>
            <p className="text-gray-600">
              Add, edit, or remove tourist destinations and update their
              information
            </p>
          </div>
        </Link>

        <Link href="/admin/drivers">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <FaCar className="text-orange-500 text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Manage Drivers
              </h2>
            </div>
            <p className="text-gray-600">
              Add, edit, or remove drivers and update their vehicle information
            </p>
          </div>
        </Link>
      </div>

      {/* Note about JSON */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
        <h3 className="font-bold text-yellow-800 mb-2">
          📝 Note: Static Dummy Data
        </h3>
        <p className="text-yellow-700">
          Currently, this admin panel displays dummy data. Changes made here are
          for demonstration purposes only. To persist changes, you'll need to
          contact the developer to implement a complete website
        </p>
      </div>
    </div>
  );
}
