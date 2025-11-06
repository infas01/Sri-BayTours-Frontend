import Link from 'next/link';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function PlaceCard({ place }) {
  return (
    <Link href={`/places/${place.id}`}>
      <div className="card group cursor-pointer h-full">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={place.images[0]}
            alt={place.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{place.rating}</span>
          </div>
          <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {place.category}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sky-500 transition-colors">
            {place.name}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-3">
            <FaMapMarkerAlt className="mr-2 text-orange-500" />
            <span className="text-sm">{place.location}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {place.description}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-sky-500 font-semibold">{place.entryFee}</span>
            <span className="text-sm text-gray-500">Best: {place.bestTimeToVisit}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}