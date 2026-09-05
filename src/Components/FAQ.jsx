import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'Usually 2–5 business days depending on your location. Express delivery options are also available at checkout.',
  },
  {
    q: 'Can I return a product?',
    a: 'Yes, absolutely. You can return any product within 7 days of delivery for a full refund or exchange — no questions asked.',
  },
  {
    q: 'Do you offer Cash on Delivery?',
    a: 'Yes, COD is available in selected areas. You can check availability at checkout by entering your delivery address.',
  },
  {
    q: 'How do I track my order?',
    a: 'Once your order is shipped, you will receive a tracking number via email or SMS so you can follow your package in real time.',
  },
  {
    q: 'Are the products authentic?',
    a: 'Every product on OXISTYLE is 100% authentic and sourced directly from verified suppliers and brands.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="max-w-[95%] mx-auto py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
          got questions?
        </p>
        <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="dmsans text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
          Everything you need to know before placing your order.
        </p>
      </div>

      <div
        className="max-w-2xl mx-auto space-y-3"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-3 cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <FaQuestionCircle className="text-lg shrink-0 text-[#155dfc]" />
                <span className="arbutus-slab text-base font-bold text-gray-800 dark:text-white">
                  {faq.q}
                </span>
              </div>
              <span className="shrink-0 text-gray-400 dark:text-gray-500">
                {openIndex === i ? (
                  <FiChevronUp className="text-lg" />
                ) : (
                  <FiChevronDown className="text-lg" />
                )}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 pt-1 bg-blue-50/40 dark:bg-blue-900/10 border-t border-gray-100 dark:border-gray-700">
                <p className="dmsans text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
