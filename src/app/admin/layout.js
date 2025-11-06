'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import config from '@/data/config.json';
import Link from 'next/link';
import { FaSignOutAlt, FaMapMarkedAlt, FaCar } from 'react-icons/fa';

export default function AdminLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const auth = sessionStorage.getItem('adminAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === config.adminPassword) {
      sessionStorage.setItem('adminAuthenticated', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-sky-500">Sri'</span>
              <span className="text-orange-500">BayTours</span>
            </h1>
            <p className="text-gray-600">Admin Panel</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="input-field"
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sky-500 hover:text-sky-600 text-sm">
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/admin" className="font-bold text-xl">
                {/* <span className="text-sky-500">Sri'</span>
                <span className="text-orange-500">BayTours</span> */}
                <span className="text-gray-800 text-md ml-2">Admin</span>
              </Link>

              <div className="hidden md:flex gap-4">
                <Link
                  href="/admin/places"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    pathname.includes('/admin/places')
                      ? 'bg-sky-100 text-sky-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaMapMarkedAlt />
                  Manage Places
                </Link>

                <Link
                  href="/admin/drivers"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    pathname.includes('/admin/drivers')
                      ? 'bg-sky-100 text-sky-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaCar />
                  Manage Drivers
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-sky-500 text-sm"
              >
                View Website
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
