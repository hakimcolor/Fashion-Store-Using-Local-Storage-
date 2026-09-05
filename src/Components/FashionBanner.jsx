import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const FashionBanner = () => {
  const { lang } = useLang();

  return (
    <section className="max-w-[95%] mx-auto py-12" data-aos="fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-3xl overflow-hidden">
        {/* Left — large image */}
        <div className="relative overflow-hidden rounded-3xl group h-[420px] lg:h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=1000&q=85"
            alt="Traditional fashion"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <span className="bg-[#155dfc] text-xs font-bold px-3 py-1 rounded-full dmsans mb-3 inline-block">
              {tr('fashion_badge1', lang)}
            </span>
            <h3 className="arbutus-slab text-2xl md:text-3xl font-bold mb-3 leading-tight whitespace-pre-line">
              {tr('fashion_title1', lang)}
            </h3>
            <Link
              to="/styles"
              className="inline-flex items-center gap-2 bg-white text-[#155dfc] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#155dfc] hover:text-white transition-all duration-300 cursor-pointer dmsans shadow-lg"
            >
              {tr('fashion_cta1', lang)} <HiArrowRight />
            </Link>
          </div>
        </div>

        {/* Right — two stacked images */}
        <div className="flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-3xl group h-[245px]">
            <img
              src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=85"
              alt="Kurti fashion"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-[#9333ea] text-xs font-bold px-3 py-1 rounded-full dmsans mb-2 inline-block">
                {tr('fashion_badge2', lang)}
              </span>
              <h3 className="arbutus-slab text-xl font-bold">
                {tr('fashion_sub_title1', lang)}
              </h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl group h-[245px]">
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=85"
              alt="Casual fashion"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-[#16a34a] text-xs font-bold px-3 py-1 rounded-full dmsans mb-2 inline-block">
                {tr('fashion_badge3', lang)}
              </span>
              <h3 className="arbutus-slab text-xl font-bold">
                {tr('fashion_sub_title2', lang)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionBanner;
