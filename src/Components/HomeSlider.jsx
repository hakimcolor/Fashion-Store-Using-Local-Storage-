import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { TbCurrencyTaka } from 'react-icons/tb';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const accents = ['#155dfc', '#9333ea', '#16a34a', '#d97706'];

const HomeSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((r) => r.json())
      .then((data) => {
        // use the latest 4 products (last 4 in the array)
        const last4 = data.slice(-4);
        setSlides(last4);
      });
  }, []);

  if (!slides.length) return null;

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        className="hero-swiper"
      >
        {slides.map((product, i) => (
          <SwiperSlide key={product.id}>
            <div
              className="relative h-[520px] md:h-[720px] w-full overflow-hidden"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              {/* Dark gradient — left heavy so text is always readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10 z-10" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-[90%] mx-auto w-full">
                  <div className="text-white max-w-2xl">
                    {/* Category badge */}
                    <span
                      className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold mb-5 border border-white/20 backdrop-blur-sm tracking-widest uppercase dmsans"
                      style={{ background: `${accents[i]}dd` }}
                    >
                      ✦ {product.category}
                    </span>

                    {/* Product name */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 arbutus-slab shimmer-text drop-shadow-lg">
                      {product.name}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 dmsans max-w-lg opacity-90 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price + CTAs */}
                    <div className="flex items-center gap-4 flex-wrap mb-2">
                      <span className="flex items-center text-2xl font-bold text-white dmsans">
                        <TbCurrencyTaka className="text-2xl" />
                        {product.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap mt-4">
                      <Link
                        to={`/products/${product.id}`}
                        className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer shadow-xl hover:scale-105 hover:shadow-2xl active:scale-95 dmsans"
                        style={{ background: accents[i], color: '#fff' }}
                      >
                        View Details <HiArrowRight />
                      </Link>
                      <Link
                        to="/products"
                        className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-sm border-2 border-white/50 hover:border-white hover:bg-white/15 backdrop-blur-sm transition-all duration-300 cursor-pointer dmsans"
                      >
                        All Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
