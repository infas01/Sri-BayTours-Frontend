'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function GoogleReviews() {
  // Sample reviews - Replace with actual Google Reviews when available
  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment:
        "Absolutely fantastic service! The driver was punctual, professional, and very knowledgeable about the local attractions. Highly recommend Sri'BayTours!",
      date: '2 weeks ago',
      avatar:
        'https://ui-avatars.com/api/?name=Sarah+Johnson&background=4a90e2&color=fff',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment:
        'Best tour experience in Sri Lanka! The vehicle was clean and comfortable. Our guide showed us hidden gems we would never have found on our own.',
      date: '1 month ago',
      avatar:
        'https://ui-avatars.com/api/?name=Michael+Chen&background=d4a574&color=fff',
    },
    {
      name: 'Emma Williams',
      rating: 5,
      comment:
        'Exceptional service from start to finish. The booking process was easy, and the tour exceeded all our expectations. Will definitely use again!',
      date: '3 weeks ago',
      avatar:
        'https://ui-avatars.com/api/?name=Emma+Williams&background=5eb3d6&color=fff',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Read reviews from our satisfied customers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder for Google Reviews Embed */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-white rounded-xl shadow-lg text-center"
        >
          <p className="text-gray-600 mb-4">
            Connected to Google Reviews - Add your Place ID in the component to display live reviews
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
            <p className="text-gray-500">Google Reviews Widget Placeholder</p>
            <p className="text-sm text-gray-400 mt-2">
              To enable: Add your Google Business Place ID
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
