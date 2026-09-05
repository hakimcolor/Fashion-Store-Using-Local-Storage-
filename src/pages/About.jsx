import { Link } from 'react-router-dom';
import {
  FaGlobe,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';
import { FaTruck, FaLock, FaStar, FaHeart } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const teamLinks = [
  {
    icon: <FaGlobe />,
    label: 'Portfolio',
    url: 'https://hakimcolorportfolio.vercel.app/',
    color: '#155dfc',
  },
  {
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hakimcolor',
    color: '#0a66c2',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/hakimcolor',
    color: '#6e40c9',
  },
  {
    icon: <FaFacebookF />,
    label: 'Facebook',
    url: 'https://www.facebook.com/hakimcolorofficial',
    color: '#1877f2',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    url: 'https://wa.me/8801818777856',
    color: '#25d366',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    url: 'mailto:hakimcolor777@gmail.com',
    color: '#ea4335',
  },
];

const About = () => {
  const { lang } = useLang();

  const values = [
    {
      icon: <FaHeart className="text-2xl" />,
      titleKey: 'about_val_passion',
      descKey: 'about_val_passion_desc',
      color: '#e11d48',
      bg: '#fff1f2',
    },
    {
      icon: <FaStar className="text-2xl" />,
      titleKey: 'about_val_quality',
      descKey: 'about_val_quality_desc',
      color: '#d97706',
      bg: '#fffbeb',
    },
    {
      icon: <FaTruck className="text-2xl" />,
      titleKey: 'about_val_delivery',
      descKey: 'about_val_delivery_desc',
      color: '#155dfc',
      bg: '#eff6ff',
    },
    {
      icon: <FaLock className="text-2xl" />,
      titleKey: 'about_val_trust',
      descKey: 'about_val_trust_desc',
      color: '#16a34a',
      bg: '#f0fdf4',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #155dfc 0%, #1e40af 100%)',
        }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
        <div
          className="max-w-[95%] mx-auto text-center text-white relative z-10"
          data-aos="fade-up"
        >
          <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 dmsans border border-white/20">
            {tr('about_badge', lang)}
          </span>
          <h1 className="arbutus-slab text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {tr('about_hero_title1', lang)}{' '}
            <span className="text-yellow-300">
              {tr('about_hero_title2', lang)}
            </span>
          </h1>
          <p className="dmsans text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {tr('about_hero_sub', lang)}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[95%] mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden h-80 md:h-[450px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85"
                alt="OXISTYLE store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#155dfc]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="arbutus-slab text-2xl font-bold">
                  {tr('about_story_since', lang)}
                </p>
                <p className="dmsans text-sm text-blue-100">
                  {tr('about_story_serving', lang)}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <p className="dmsans text-lg font-semibold uppercase tracking-widest text-[#155dfc]">
              {tr('about_story_label', lang)}
            </p>
            <h2 className="arbutus-slab text-3xl md:text-4xl text-gray-900 dark:text-white leading-tight">
              {tr('about_story_title', lang)}
            </h2>
            <p className="dmsans text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              {tr('about_story_p1', lang)}
            </p>
            <p className="dmsans text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              {tr('about_story_p2', lang)}
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                ['500+', 'about_stat_products'],
                ['10K+', 'about_stat_customers'],
                ['4.8★', 'about_stat_rating'],
              ].map(([val, labelKey]) => (
                <div
                  key={labelKey}
                  className="text-center p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800"
                >
                  <p className="arbutus-slab text-2xl font-bold text-[#155dfc]">
                    {val}
                  </p>
                  <p className="dmsans text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {tr(labelKey, lang)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-[95%] mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
              {tr('about_values_label', lang)}
            </p>
            <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
              {tr('about_values_title', lang)}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.titleKey}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: v.bg, color: v.color }}
                >
                  {v.icon}
                </div>
                <h3 className="arbutus-slab text-lg font-bold text-gray-800 dark:text-white">
                  {tr(v.titleKey, lang)}
                </h3>
                <p className="dmsans text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {tr(v.descKey, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="max-w-[95%] mx-auto py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
            {tr('about_team_label', lang)}
          </p>
          <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
            {tr('about_team_title', lang)}
          </h2>
        </div>

        <div
          data-aos="zoom-in"
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 text-center"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#155dfc] to-[#1e40af] flex items-center justify-center text-white text-4xl font-bold arbutus-slab mx-auto mb-4 shadow-lg">
            H
          </div>
          <h3 className="arbutus-slab text-2xl font-bold text-gray-900 dark:text-white">
            Hakim Color
          </h3>
          <p className="dmsans text-[#155dfc] font-medium mt-1">
            {tr('about_dev_role', lang)}
          </p>
          <p className="dmsans text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">
            {tr('about_dev_desc', lang)}
          </p>
          <div className="flex justify-center gap-3 mt-5 flex-wrap">
            {teamLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                title={link.label}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
                style={{ background: link.color }}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a
            href="https://hakimcolorportfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#155dfc] text-white rounded-xl font-semibold dmsans text-sm hover:bg-blue-700 active:scale-95 transition-all duration-200 cursor-pointer shadow"
          >
            {tr('about_portfolio', lang)} <HiArrowRight />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-[#155dfc] dark:bg-blue-900 py-16 text-white text-center"
        data-aos="zoom-in"
      >
        <div className="max-w-[95%] mx-auto">
          <h2 className="arbutus-slab text-3xl md:text-4xl font-bold mb-4">
            {tr('about_cta_title', lang)}
          </h2>
          <p className="dmsans text-blue-100 text-lg mb-8 max-w-lg mx-auto">
            {tr('about_cta_sub', lang)}
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#155dfc] font-bold rounded-2xl hover:bg-blue-50 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer dmsans"
          >
            {tr('about_cta_btn', lang)} <HiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
