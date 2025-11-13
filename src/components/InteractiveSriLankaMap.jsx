'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import Leaflet CSS and fix icon issue
if (typeof window !== 'undefined') {
  import('leaflet/dist/leaflet.css');

  // Fix for default marker icons in production
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

export default function InteractiveSriLankaMap() {
  const [isClient, setIsClient] = useState(false);
  const [filter, setFilter] = useState('all');
  const [L, setL] = useState(null);

  useEffect(() => {
    setIsClient(true);
    import('leaflet').then((leaflet) => {
      setL(leaflet.default);
    });
  }, []);

  if (!isClient || !L) {
    return (
      <div className="w-full h-[600px] bg-gray-200 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-ocean mx-auto mb-4"></div>
          <p className="text-gray-600">Loading interactive map...</p>
        </div>
      </div>
    );
  }

  // Sri Lanka center coordinates
  const sriLankaCenter = [7.8731, 80.7718];

  // Your base location - Pottuvil
  const pottuvil = {
    name: 'Pottuvil - Our Home Base',
    position: [6.8706, 81.8364],
    type: 'base',
    description: "Sri'BayTours headquarters",
  };

  // All 12 destinations with coordinates
  const destinations = [
    {
      name: 'Sigiriya Rock Fortress',
      position: [7.957, 80.7603],
      type: 'cultural',
      description:
        'Ancient rock fortress with stunning frescoes and panoramic views',
      image:
        'https://images.unsplash.com/photo-1612862862126-865765df2ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      province: 'Central Province',
      distance: '180 km',
      duration: '3.5 hours',
    },
    {
      name: 'Ella',
      position: [6.8667, 81.0467],
      type: 'nature',
      description:
        'Charming mountain village with tea plantations and Nine Arch Bridge',
      image:
        'https://images.unsplash.com/photo-1566766189268-ecac9118f2b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      province: 'Uva Province',
      distance: '45 km',
      duration: '1.5 hours',
    },
    {
      name: 'Galle Fort',
      position: [6.0269, 80.217],
      type: 'cultural',
      description: 'Colonial fortress with cobblestone streets and ocean views',
      image:
        'https://images.unsplash.com/photo-1654561773591-57b9413c45c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      province: 'Southern Province',
      distance: '210 km',
      duration: '4 hours',
    },
    {
      name: 'Mirissa Beach',
      position: [5.9467, 80.4686],
      type: 'beach',
      description: 'Tropical paradise perfect for whale watching and surfing',
      image:
        'https://images.unsplash.com/photo-1580910527739-556eb89f9d65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      province: 'Southern Province',
      distance: '230 km',
      duration: '4.5 hours',
    },
    {
      name: 'Yala National Park',
      position: [6.3725, 81.5103],
      type: 'nature',
      description:
        "Sri Lanka's most visited wildlife sanctuary, home to leopards, elephants, sloth bears, and diverse bird species in stunning natural landscapes.",
      image:
        'https://images.unsplash.com/photo-1578193661550-c7d0b7b3aa55?w=400&q=80',
      province: 'Southern Province',
      distance: '90 km',
      duration: '2 hours',
    },
    {
      name: 'Temple of the Tooth',
      position: [7.2936, 80.6407],
      type: 'cultural',
      description: "Sacred Buddhist temple housing a relic of Buddha's tooth",
      image:
        'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      province: 'Kandy',
      distance: '150 km',
      duration: '3 hours',
    },
    {
      name: 'Arugam Bay',
      position: [6.8414, 81.8361],
      type: 'beach',
      description: 'World-renowned surfing destination with perfect waves',
      image:
        'https://images.unsplash.com/photo-1552055568-f8c4fb8c6320?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      province: 'Eastern Province',
      distance: '5 km',
      duration: '15 minutes',
    },
    {
      name: 'Nuwara Eliya',
      position: [6.9497, 80.7891],
      type: 'nature',
      description:
        'Hill station with cool climate, tea estates, and colonial architecture',
      image:
        'https://images.unsplash.com/photo-1708338914870-797de586672d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
      province: 'Central Province',
      distance: '120 km',
      duration: '3 hours',
    },
    {
      name: 'Polonnaruwa',
      position: [7.9403, 81.0188],
      type: 'cultural',
      description:
        'Ancient capital city featuring well-preserved ruins of palaces, temples, and massive stone Buddha statues from the 11th century.',
      image:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80',
      province: 'North Central Province',
      distance: '140 km',
      duration: '3 hours',
    },
    {
      name: 'Dambulla Cave Temple',
      position: [7.8567, 80.6483],
      type: 'cultural',
      description:
        'Cave temples with 150 Buddha statues and extensive paintings',
      image:
        'https://images.unsplash.com/photo-1704798690646-92524b61ce03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      province: 'Central Province',
      distance: '160 km',
      duration: '3.5 hours',
    },
    {
      name: 'Unawatuna Beach',
      position: [6.0103, 80.2503],
      type: 'beach',
      description:
        'Crescent-shaped beach with calm waters for swimming and snorkeling',
      image:
        'https://images.unsplash.com/photo-1665765415963-28b2fa36df8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      province: 'Southern Province',
      distance: '215 km',
      duration: '4 hours',
    },
    {
      name: "Adam's Peak",
      position: [6.8095, 80.4989],
      type: 'nature',
      description: 'Sacred mountain pilgrimage with spectacular sunrise views',
      image:
        'https://images.unsplash.com/photo-1593983913587-361576add259?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      province: 'Sabaragamuwa Province',
      distance: '165 km',
      duration: '3.5 hours',
    },
  ];

  // Custom marker icons using divIcon
  const createIcon = (type) => {
    const colors = {
      beach: '#5eb3d6',
      cultural: '#d4a574',
      nature: '#22c55e',
      base: '#dc2626',
    };

    const iconHtml = `
      <div style="
        background-color: ${colors[type]};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <span style="
          transform: rotate(45deg);
          color: white;
          font-size: 16px;
          font-weight: bold;
        ">${type === 'base' ? '⭐' : '📍'}</span>
      </div>
    `;

    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  // Filter destinations
  const filteredDestinations =
    filter === 'all'
      ? destinations
      : destinations.filter((d) => d.type === filter);

  return (
    <div className="w-full map-wrapper">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-5">
        {[
          { value: 'all', label: 'All Destinations', icon: '🗺️' },
          { value: 'beach', label: 'Beaches', icon: '🏖️' },
          { value: 'cultural', label: 'Cultural Sites', icon: '🏛️' },
          { value: 'nature', label: 'Nature & Wildlife', icon: '🌿' },
        ].map((btn) => (
          <motion.button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filter === btn.value
                ? 'bg-primary-ocean text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{btn.icon}</span>
            {btn.label}
          </motion.button>
        ))}
      </div>

      {/* Map Container */}
      <div className="rounded-2xl overflow-hidden border-4 border-primary-gold/30 relative z-1">
        <MapContainer
          center={sriLankaCenter}
          zoom={7}
          style={{ height: '450px', width: '100%' }}
          scrollWheelZoom={false}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Home Base - Pottuvil */}
          <Marker position={pottuvil.position} icon={createIcon('base')}>
            <Popup className="custom-popup">
              <div className="p-4 min-w-[280px]">
                <h3 className="text-xl font-bold text-primary-navy mb-2 flex items-center">
                  <span className="text-2xl mr-2">⭐</span>
                  {pottuvil.name}
                </h3>
                <p className="text-gray-600 mb-4">{pottuvil.description}</p>
                <Link href="/contact">
                  <button className="w-full bg-primary-gold hover:bg-primary-gold/90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
              </div>
            </Popup>
          </Marker>

          {/* Service Coverage Circle around Pottuvil */}
          {/* <Circle
            center={pottuvil.position}
            radius={400000}
            pathOptions={{
              color: '#d4a574',
              fillColor: '#d4a574',
              fillOpacity: 0.1,
              weight: 2,
              dashArray: '10, 10',
            }}
          /> */}

          {/* Destination Markers */}
          {filteredDestinations.map((destination, index) => (
            <Marker
              key={index}
              position={destination.position}
              icon={createIcon(destination.type)}
            >
              <Popup className="custom-popup" maxWidth={320}>
                <div className="p-2">
                  <div className="relative h-40 mb-3 rounded-lg overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {destination.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                    <div className="bg-gray-100 p-2 rounded">
                      <span className="font-semibold">📍 Distance:</span>
                      <br />
                      {destination.distance}
                    </div>
                    <div className="bg-gray-100 p-2 rounded">
                      <span className="font-semibold">⏱️ Duration:</span>
                      <br />
                      {destination.duration}
                    </div>
                  </div>
                  <Link
                    href={`/reserve-a-ride?destination=${encodeURIComponent(
                      destination.name
                    )}`}
                  >
                    <button className="w-full bg-primary-ocean hover:bg-primary-blue text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Reserve Ride to Here
                    </button>
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {/* Legend */}
      <div className="mt-2 flex flex-wrap justify-center">
        {/* <h3 className="text-xl font-bold text-primary-navy mb-4">Map Legend</h3> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-600 mr-3 flex items-center justify-center text-white">
              ⭐
            </div>
            <span className="text-sm font-medium">Our Home Base</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#5eb3d6] mr-3 flex items-center justify-center text-white">
              🏖️
            </div>
            <span className="text-sm font-medium">Beaches</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#d4a574] mr-3 flex items-center justify-center text-white">
              🏛️
            </div>
            <span className="text-sm font-medium">Cultural Sites</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 mr-3 flex items-center justify-center text-white">
              🌿
            </div>
            <span className="text-sm font-medium">Nature & Wildlife</span>
          </div>
        </div>
        <p className="flex items-center text-sm mt-2 text-gray-600 gap-2">
          💡 <strong>Tip:</strong> Click on any marker to see details and book a
          ride directly!
        </p>
      </div>
    </div>
  );
}
