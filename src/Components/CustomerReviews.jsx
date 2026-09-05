import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const reviews = [
  {
    name: 'Rahim Uddin',
    role: { en: 'Regular Customer', bn: 'নিয়মিত গ্রাহক' },
    rating: 5,
    text: {
      en: 'Amazing quality products and super fast delivery. I have been shopping here for months and never disappointed!',
      bn: 'অসাধারণ মানের পণ্য এবং অত্যন্ত দ্রুত ডেলিভারি। আমি মাসের পর মাস এখানে কেনাকাটা করছি এবং কখনো হতাশ হইনি!',
    },
    avatar: 'R',
    color: '#155dfc',
  },
  {
    name: 'Sadia Islam',
    role: { en: 'Verified Buyer', bn: 'যাচাইকৃত ক্রেতা' },
    rating: 5,
    text: {
      en: 'The return process was so easy and the customer support team was very helpful. Highly recommend OXISTYLE!',
      bn: 'রিটার্ন প্রক্রিয়া অত্যন্ত সহজ ছিল এবং কাস্টমার সাপোর্ট টিম খুবই সহায়ক ছিল। OXISTYLE কে দৃঢ়ভাবে সুপারিশ করছি!',
    },
    avatar: 'S',
    color: '#16a34a',
  },
  {
    name: 'Arif Hossain',
    role: { en: 'Fashion Enthusiast', bn: 'ফ্যাশন উৎসাহী' },
    rating: 4,
    text: {
      en: 'Great selection of Bangladeshi clothes at very reasonable prices. The size guide is accurate and packaging is premium.',
      bn: 'যুক্তিসঙ্গত মূল্যে বাংলাদেশি পোশাকের দারুণ সংগ্রহ। সাইজ গাইড নির্ভুল এবং প্যাকেজিং প্রিমিয়াম।',
    },
    avatar: 'A',
    color: '#d97706',
  },
];

const CustomerReviews = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 bg-[#f8faff] dark:bg-gray-900">
      <div className="max-w-[95%] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="dmsans text-sm font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
            {tr('review_label', lang)}
          </p>
          <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
            {tr('review_title', lang)}
          </h2>
          <p className="dmsans text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            {tr('review_sub', lang)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex flex-col gap-4"
            >
              <FaQuoteLeft className="text-2xl text-[#155dfc] opacity-30" />
              <p className="dmsans text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                {r.text[lang]}
              </p>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className="text-sm"
                    style={{ color: idx < r.rating ? '#f59e0b' : '#e5e7eb' }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold arbutus-slab text-base shrink-0"
                  style={{ background: r.color }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="arbutus-slab text-sm text-gray-800 dark:text-white">
                    {r.name}
                  </p>
                  <p className="dmsans text-sm text-gray-400">{r.role[lang]}</p>
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
