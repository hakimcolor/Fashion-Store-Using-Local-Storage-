import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const looks = [
  {
    image:
      'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&q=85',
    tagKey: 'model_tag_eid',
    titleKey: 'model_title_panjabi',
    price: 1490,
    color: '#155dfc',
  },
  {
    image:
      'https://images.unsplash.com/photo-1614251056216-f748f76cd228?w=800&q=85',
    tagKey: 'model_tag_trendy',
    titleKey: 'model_title_kurti',
    price: 2190,
    color: '#9333ea',
  },
  {
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85',
    tagKey: 'model_tag_new',
    titleKey: 'model_title_festival',
    price: 3290,
    color: '#d97706',
  },
  {
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85',
    tagKey: 'model_tag_best',
    titleKey: 'model_title_dress',
    price: 3490,
    color: '#e11d48',
  },
];

const ModelShowcase = () => {
  const { lang } = useLang();

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-[95%] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
            {tr('model_label', lang)}
          </p>
          <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
            {tr('model_title', lang)}
          </h2>
          <p className="dmsans text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            {tr('model_sub', lang)}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {looks.map((look, i) => (
            <div
              key={look.titleKey}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <div className="h-72 sm:h-96 overflow-hidden rounded-3xl">
                <img
                  src={look.image}
                  alt={tr(look.titleKey, lang)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-3xl" />
              <span
                className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: look.color }}
              >
                {tr(look.tagKey, lang)}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="arbutus-slab text-base md:text-lg font-bold">
                  {tr(look.titleKey, lang)}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="dmsans text-sm flex items-center gap-0.5 font-bold">
                    <TbCurrencyTaka /> {look.price.toLocaleString()}
                  </span>
                  <Link
                    to="/products"
                    className="flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    {tr('model_shop', lang)}{' '}
                    <HiArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelShowcase;
