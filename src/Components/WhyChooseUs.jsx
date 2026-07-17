import React from 'react';
import { FaTruck, FaLock, FaStar, FaUndo } from 'react-icons/fa';

// why choose us — marketing section showing store benefits
const features = [
  {
    icon: <FaTruck className="text-3xl" />,
    title: 'Free Shipping',
    desc: 'Free delivery on all eligible orders across the country.',
    bg: '#eff6ff',
    accent: '#155dfc',
  },
  {
    icon: <FaLock className="text-3xl" />,
    title: 'Secure Payment',
    desc: '100% safe and secure checkout powered by trusted gateways.',
    bg: '#f0fdf4',
    accent: '#16a34a',
  },
  {
    icon: <FaStar className="text-3xl" />,
    title: 'Premium Quality',
    desc: 'Every product is carefully selected to meet the highest standards.',
    bg: '#fffbeb',
    accent: '#d97706',
  },
  {
    icon: <FaUndo className="text-3xl" />,
    title: 'Easy Returns',
    desc: '7-day hassle-free return policy — no questions asked.',
    bg: '#fdf4ff',
    accent: '#9333ea',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-[90%] mx-auto py-16">
      {/* section heading */}
      <div className="text-center mb-12">
        <p
          className="dmsans text-sm font-semibold uppercase tracking-widest mb-2"
          style={{ color: '#155dfc' }}
        >
          our promise
        </p>
        <h2 className="arbutus-slab text-4xl text-gray-900">Why Choose Us</h2>
        <p className="dmsans text-base text-gray-500 mt-3 max-w-xl mx-auto">
          we are committed to giving you the best shopping experience every
          single time.
        </p>
      </div>

      {/* feature cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            {/* icon bubble */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: f.bg, color: f.accent }}
            >
              {f.icon}
            </div>

            {/* title */}
            <h3 className="arbutus-slab text-lg text-gray-800">{f.title}</h3>

            {/* description */}
            <p className="dmsans text-sm text-gray-500 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
