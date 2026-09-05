import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const BrandBanner = () => {
  const { lang } = useLang();

  return (
    <section className="max-w-[95%] mx-auto py-10" data-aos="zoom-in">
      <div className="relative overflow-hidden rounded-3xl min-h-[260px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=85"
          alt="Fashion store"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(21,93,252,0.92) 0%, rgba(30,64,175,0.80) 60%, rgba(0,0,0,0.3) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[80%] mx-auto text-center text-white py-12">
          <p className="dmsans text-sm font-semibold uppercase tracking-widest mb-3 text-blue-200">
            {tr('brand_label', lang)}
          </p>
          <h2 className="arbutus-slab text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {tr('brand_title1', lang)}{' '}
            <span className="text-yellow-300">
              40% {tr('brand_title2', lang)}
            </span>{' '}
            <br className="hidden md:block" />
            {tr('brand_title3', lang)}
          </h2>
          <p className="dmsans text-blue-100 text-base md:text-lg mb-8 max-w-lg mx-auto">
            {tr('brand_sub', lang)}
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#155dfc] font-bold rounded-2xl hover:bg-blue-50 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer dmsans"
          >
            {tr('brand_cta', lang)} <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandBanner;
