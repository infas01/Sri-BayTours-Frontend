import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Beauty of Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100">
            Explore breathtaking destinations with trusted local drivers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/places" className="btn-secondary">
              Explore Places
            </Link>
            <Link href="/drivers" className="bg-white text-sky-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Find Drivers
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}