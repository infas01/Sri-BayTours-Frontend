'use client';

import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendar,
  FaClock,
  FaCheckCircle,
} from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

// Separate component that uses useSearchParams
function ReserveForm() {
  const searchParams = useSearchParams();
  const destinationParam = searchParams.get('destination');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: destinationParam ? `Trip to ${destinationParam}` : '',
    pickupLocation: '',
    dropoffLocation: destinationParam || '',
    pickupDate: '',
    pickupTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/book-ride', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          contactNumber: '',
          subject: '',
          pickupLocation: '',
          dropoffLocation: '',
          pickupDate: '',
          pickupTime: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg flex items-start"
          >
            <FaCheckCircle className="text-green-500 text-2xl mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-green-800 font-semibold text-lg mb-2">
                Booking Successful!
              </h3>
              <p className="text-green-700">
                Thank you for your booking. We've received your request and will
                contact you shortly to confirm your reservation.
              </p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg"
          >
            <h3 className="text-red-800 font-semibold text-lg mb-2">Error</h3>
            <p className="text-red-700">
              Sorry, there was an error processing your booking. Please try
              again or contact us directly.
            </p>
          </motion.div>
        )}

        <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
          Fill in Your Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="label">
              <FaUser className="inline mr-2 text-primary-ocean" />
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="label">
              <FaEnvelope className="inline mr-2 text-primary-ocean" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="label">
              <FaPhone className="inline mr-2 text-primary-ocean" />
              Contact Number *
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="+94 XXX XXX XXX"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="label">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="e.g., Airport Transfer, Day Trip, etc."
            />
          </div>

          {/* Pickup Location */}
          <div>
            <label htmlFor="pickupLocation" className="label">
              <FaMapMarkerAlt className="inline mr-2 text-primary-ocean" />
              Pickup Location *
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter pickup address or location"
            />
          </div>

          {/* Dropoff Location */}
          <div>
            <label htmlFor="dropoffLocation" className="label">
              <FaMapMarkerAlt className="inline mr-2 text-primary-ocean" />
              Dropoff Location *
            </label>
            <input
              type="text"
              id="dropoffLocation"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter dropoff address or location"
            />
          </div>

          {/* Pickup Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="pickupDate" className="label">
                <FaCalendar className="inline mr-2 text-primary-ocean" />
                Pickup Date *
              </label>
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                required
                className="input-field"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label htmlFor="pickupTime" className="label">
                <FaClock className="inline mr-2 text-primary-ocean" />
                Pickup Time *
              </label>
              <input
                type="time"
                id="pickupTime"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn-primary text-lg py-4 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? 'Submitting...' : 'Reserve Now'}
          </motion.button>
        </form>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center text-gray-600">
        <p className="mb-4">
          Need immediate assistance? Call us at{' '}
          <a
            href="tel:+94756877595"
            className="text-primary-ocean font-semibold hover:underline"
          >
            +94 76 272 6459
          </a>
        </p>
        <p className="text-sm">
          We typically respond within 1-2 hours during business hours (8 AM - 8
          PM)
        </p>
      </div>
    </div>
  );
}

// Main component with Suspense wrapper
export default function ReserveARide() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-navy to-primary-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Reserve a Ride
            </h1>
            <p className="text-xl md:text-2xl">
              Book your comfortable journey across Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form with Suspense */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Suspense
            fallback={
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-ocean mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading form...</p>
                  </div>
                </div>
              </div>
            }
          >
            <ReserveForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
