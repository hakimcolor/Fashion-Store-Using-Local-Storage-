import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaQuestionCircle } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { lang } = useLang();

  const faqs = [
    { qKey: 'faq_q1', aKey: 'faq_a1' },
    { qKey: 'faq_q2', aKey: 'faq_a2' },
    { qKey: 'faq_q3', aKey: 'faq_a3' },
    { qKey: 'faq_q4', aKey: 'faq_a4' },
    { qKey: 'faq_q5', aKey: 'faq_a5' },
    { qKey: 'faq_q6', aKey: 'faq_a6' },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="max-w-[95%] mx-auto py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#C8A96B]">
          {tr('faq_label', lang)}
        </p>
        <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
          {tr('faq_title', lang)}
        </h2>
        <p className="dmsans text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
          {tr('faq_sub', lang)}
        </p>
      </div>

      <div
        className="max-w-3xl mx-auto space-y-3"
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
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-3 cursor-pointer bg-white dark:bg-gray-800 hover:bg-[#F7F4ED] dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <FaQuestionCircle
                  className={`text-lg shrink-0 transition-colors duration-200 ${openIndex === i ? 'text-[#C8A96B]' : 'text-gray-400 dark:text-gray-500'}`}
                />
                <span className="arbutus-slab text-base font-bold text-gray-800 dark:text-white">
                  {tr(faq.qKey, lang)}
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
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-4 pt-1 bg-[#F7F4ED]/40 dark:bg-[#8FA28A]/10 border-t border-gray-100 dark:border-gray-700">
                <p className="dmsans text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {tr(faq.aKey, lang)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="max-w-3xl mx-auto mt-10 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="dmsans text-gray-500 dark:text-gray-400 mb-3">
          Still have questions?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-2.5 rounded-full border border-[#C8A96B] text-[#C8A96B] dmsans font-semibold hover:bg-[#C8A96B] hover:text-white transition-colors duration-200"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default FAQ;
