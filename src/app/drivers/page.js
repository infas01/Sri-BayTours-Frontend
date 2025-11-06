'use client';

import { useState, useMemo } from 'react';
import DriverCard from '@/components/DriverCard';
import driversData from '@/data/drivers.json';
import { FaSearch } from 'react-icons/fa';

export default function DriversPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Get unique vehicle types and locations
  const vehicleTypes = ['All', ...new Set(driversData.map(driver => driver.vehicleType))];
  const locations = ['All', ...new Set(driversData.map(driver => driver.location))];

  // Filter drivers
  const filteredDrivers = useMemo(() => {
    return driversData.filter(driver => {
      const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          driver.vehicleModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          driver.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesVehicleType = selectedVehicleType === 'All' || driver.vehicleType === selectedVehicleType;
      const matchesLocation = selectedLocation === 'All' || driver.location === selectedLocation;

      return matchesSearch && matchesVehicleType && matchesLocation;
    });
  }, [searchTerm, selectedVehicleType, selectedLocation]);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Available Drivers & Rides</h1>
          <p className="section-subtitle">
            Choose from {driversData.length}+ experienced local drivers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search drivers by name, vehicle model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vehicle Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <select
                value={selectedVehicleType}
                onChange={(e) => setSelectedVehicleType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                {vehicleTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredDrivers.length} {filteredDrivers.length === 1 ? 'driver' : 'drivers'}
          </div>
        </div>

        {/* Drivers Grid */}
        {filteredDrivers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDrivers.map((driver) => (
              <DriverCard key={driver.id} driver={driver} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No drivers found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedVehicleType('All');
                setSelectedLocation('All');
              }}
              className="mt-4 btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}