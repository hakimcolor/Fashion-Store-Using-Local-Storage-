import { FaTruck, FaLock, FaStar, FaUndo } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const WhyChooseUs = () => {
  const { lang } = useLang();

  const features = [
    {
      titleKey: 'why_f1_title',
      descKey: 'why_f1_desc',
      icon: <FaTruck className="text-3xl" />,
      bg: '#eff6ff',
      accent: '#155dfc',
    },
    {
      titleKey: 'why_f2_title',
      descKey: 'why_f2_desc',
      icon: <FaLock className="text-3xl" />,
      bg: '#f0fdf4',
      accent: '#16a34a',
    },
    {
      titleKey: 'why_f3_title',
      descKey: 'why_f3_desc',
      icon: <FaStar className="text-3xl" />,
      bg: '#fffbeb',
      accent: '#d97706',
    },
    {
      titleKey: 'why_f4_title',
      descKey: 'why_f4_desc',
      icon: <FaUndo className="text-3xl" />,
      bg: '#fdf4ff',
      accent: '#9333ea',
    },
  ];

  return (
    <section className="max-w-[95%] mx-auto py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
          {tr('why_label', lang)}
        </p>
        <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
          {tr('why_title', lang)}
        </h2>
        <p className="dmsans text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
          {tr('why_sub', lang)}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={f.titleKey}
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
              {tr(f.titleKey, lang)}
            </h3>
            <p className="dmsans text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              {tr(f.descKey, lang)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
