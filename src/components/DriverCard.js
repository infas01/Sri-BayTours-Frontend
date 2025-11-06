import Link from 'next/link';
import { FaStar, FaMapMarkerAlt, FaUsers, FaCar } from 'react-icons/fa';
import Image from 'next/image';

export default function DriverCard({ driver }) {
  return (
    <Link href={`/drivers/${driver.id}`}>
      <div className="card group cursor-pointer h-full">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-sky-100 to-cyan-100">
          <Image
            src={driver.photo}
            alt={driver.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{driver.rating}</span>
          </div>
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {driver.vehicleType}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sky-500 transition-colors">
            {driver.name}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600 text-sm">
              <FaCar className="mr-2 text-sky-500" />
              <span>{driver.vehicleModel}</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm">
              <FaMapMarkerAlt className="mr-2 text-orange-500" />
              <span>{driver.location}</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm">
              <FaUsers className="mr-2 text-cyan-500" />
              <span>Capacity: {driver.capacity} passengers</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {driver.languages.slice(0, 3).map((lang, index) => (
              <span
                key={index}
                className="bg-sky-50 text-sky-700 text-xs px-2 py-1 rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-sky-500 font-bold text-lg">
              {driver.pricePerDay}/day
            </span>
            <span className="text-sm text-gray-500">
              {driver.experience} exp
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
