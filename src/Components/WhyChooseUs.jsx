import { FaTruck, FaLock, FaStar, FaUndo } from 'react-icons/fa';

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

const WhyChooseUs = () => (
  <section className="max-w-[95%] mx-auto py-16">
    <div className="text-center mb-12" data-aos="fade-up">
      <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
        our promise
      </p>
      <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
        Why Choose Us
      </h2>
      <p className="dmsans text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
        We are committed to giving you the best shopping experience every single
        time.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <div
          key={f.title}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          className="group rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: f.bg, color: f.accent }}
          >
            {f.icon}
          </div>
          <h3 className="arbutus-slab text-lg text-gray-800 dark:text-white font-bold">
            {f.title}
          </h3>
          <p className="dmsans text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
