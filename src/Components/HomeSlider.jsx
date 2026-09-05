import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { HiArrowRight } from 'react-icons/hi2';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Hero slides with real Unsplash fashion/Bangladeshi clothing images
const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=1600&q=85',
    badge: 'New Collection',
    title: 'Authentic Bangladeshi Panjabi',
    subtitle:
      'Crafted with love, worn with pride. Explore our premium cotton Panjabi collection for every occasion.',
    cta: 'Shop Now',
    accent: '#155dfc',
  },
  {
    image:
      'https://images.unsplash.com/photo-1614251056216-f748f76cd228?w=1600&q=85',
    badge: 'Trending',
    title: 'Elegant Saree & Kurti',
    subtitle:
      'Timeless fashion that celebrates Bangladeshi heritage — available in vibrant colors and fine fabrics.',
    cta: 'Explore',
    accent: '#9333ea',
  },
  {
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&q=85',
    badge: 'Best Seller',
    title: 'Premium Casual Wear',
    subtitle:
      'From daily essentials to stylish outfits — find comfort and style that fits your lifestyle perfectly.',
    cta: 'View Collection',
    accent: '#16a34a',
  },
  {
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=85',
    badge: 'Limited Edition',
    title: 'Festival Special Outfits',
    subtitle:
      "Celebrate every festival in style. Our curated festive collection is here — grab yours before it's gone.",
    cta: 'Shop Festival',
    accent: '#d97706',
  },
];

const HomeSlider = () => (
  <div className="relative">
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="hero-swiper"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            className="relative h-[520px] md:h-[720px] w-full overflow-hidden"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-10" />

            {/* Content */}
            <div className="absolute inset-0 z-20 max-w-[90%] mx-auto flex items-center">
              <div className="text-white max-w-xl" data-aos="fade-right">
                {/* Badge */}
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/30 backdrop-blur-sm"
                  style={{ background: `${slide.accent}cc` }}
                >
                  ✦ {slide.badge}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 arbutus-slab shimmer-text">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-gray-200 text-base md:text-lg leading-7 mb-8 dmsans max-w-md">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    to="/products"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer shadow-lg hover:scale-105 active:scale-95 dmsans"
                    style={{ background: slide.accent, color: '#fff' }}
                  >
                    {slide.cta} <HiArrowRight />
                  </Link>
                  <Link
                    to="/products"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer dmsans"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default HomeSlider;
