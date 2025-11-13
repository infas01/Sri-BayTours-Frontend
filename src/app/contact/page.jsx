'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaGlobe,
  FaCheckCircle,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: '',
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
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-navy to-primary-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">
              We're here to help with your travel plans
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary-navy mb-8">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Have questions about our services or need assistance planning
                your trip? We're here to help! Reach out to us through any of
                the following channels, and our friendly team will get back to
                you promptly.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-primary-ocean/10 p-4 rounded-lg">
                    <FaMapMarkerAlt className="text-3xl text-primary-ocean" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">Pottuvil, Sri Lanka</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-primary-ocean/10 p-4 rounded-lg">
                    <FaEnvelope className="text-3xl text-primary-ocean" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:app@test.com"
                      className="text-gray-600 hover:text-primary-ocean transition-colors"
                    >
                      app@test.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-primary-ocean/10 p-4 rounded-lg">
                    <FaPhone className="text-3xl text-primary-ocean" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+94756877595"
                      className="text-gray-600 hover:text-primary-ocean transition-colors"
                    >
                      +94 76 272 6459
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-r from-primary-navy to-primary-blue text-white rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Sunday: 24/7 Service Available</p>
                  <p className="text-sm opacity-90">
                    We're always ready to serve you!
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
            >
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg flex items-start"
                >
                  <FaCheckCircle className="text-green-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-green-800 font-semibold text-lg mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you as soon
                      as possible.
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
                  <h3 className="text-red-800 font-semibold text-lg mb-2">
                    Error
                  </h3>
                  <p className="text-red-700">
                    Sorry, there was an error sending your message. Please try
                    again or contact us directly.
                  </p>
                </motion.div>
              )}

              <h2 className="text-3xl font-bold text-primary-navy mb-8">
                Support Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="label">
                    <FaUser className="inline mr-2 text-primary-ocean" />
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="label">
                    <FaEnvelope className="inline mr-2 text-primary-ocean" />
                    Email Address *
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

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="label">
                    <FaPhone className="inline mr-2 text-primary-ocean" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="+94 XXX XXX XXX"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="label">
                    <FaGlobe className="inline mr-2 text-primary-ocean" />
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your country"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="input-field resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
