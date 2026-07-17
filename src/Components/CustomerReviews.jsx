import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// customer reviews — social proof section
const reviews = [
  {
    name: 'Rahim Uddin',
    role: 'Regular Customer',
    rating: 5,
    text: 'Amazing quality products and super fast delivery. I have been shopping here for months and never disappointed!',
    avatar: 'R',
    color: '#155dfc',
  },
  {
    name: 'Sadia Islam',
    role: 'Verified Buyer',
    rating: 5,
    text: 'The return process was so easy and the customer support team was very helpful. Highly recommend OXISTYLE!',
    avatar: 'S',
    color: '#16a34a',
  },
  {
    name: 'Arif Hossain',
    role: 'Fashion Enthusiast',
    rating: 4,
    text: 'Great selection of clothes at very reasonable prices. The size guide is accurate and the packaging is premium.',
    avatar: 'A',
    color: '#d97706',
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16" style={{ background: '#f8faff' }}>
      <div className="max-w-[90%] mx-auto">
        {/* section heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p
            className="dmsans text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#155dfc' }}
          >
            what people say
          </p>
          <h2 className="arbutus-slab text-4xl text-gray-900">
            Customer Reviews
          </h2>
          <p className="dmsans text-lg text-gray-500 mt-3 max-w-xl mx-auto">
            real words from real customers who love shopping with us.
          </p>
        </div>

        {/* review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col gap-4"
            >
              {/* quote icon */}
              <FaQuoteLeft
                className="text-2xl"
                style={{ color: '#155dfc', opacity: 0.3 }}
              />

              {/* review text */}
              <p className="dmsans  text-lg text-gray-600 leading-relaxed flex-1 ">
                {r.text}
              </p>

              {/* star rating */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-sm"
                    style={{ color: i < r.rating ? '#f59e0b' : '#e5e7eb' }}
                  />
                ))}
              </div>

              {/* reviewer info */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold arbutus-slab text-base shrink-0"
                  style={{ background: r.color }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="arbutus-slab text-sm text-gray-800">{r.name}</p>
                  <p className="dmsans text-sm text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
