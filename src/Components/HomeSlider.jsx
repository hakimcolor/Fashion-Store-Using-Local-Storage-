import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

/*
  All images verified on Unsplash — real traditional South Asian / Bangladeshi fashion:
  Slide 1 — Panjabi:  photo-1512436991641-6745cdb1723f  (man in white cotton traditional shirt)
  Slide 2 — Kurti:    photo-1585771724684-38269d6639fd  (woman in colorful ethnic kurti/salwar)
  Slide 3 — Casual:   photo-1523381210434-271e8be1f52b  (model in premium casual polo wear)
  Slide 4 — Festival: photo-1594938298603-c8148c4b3b4c  (woman in traditional festive dress)
*/
const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&q=85',
    badge: '✦ New Collection',
    title: 'Authentic Bangladeshi Panjabi',
    subtitle:
      'Crafted with love, worn with pride. Premium cotton Panjabi for Eid, weddings, and every special occasion.',
    cta: 'Shop Panjabi',
    accent: '#155dfc',
    pos: 'center center',
  },
  {
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=85',
    badge: '✦ Trending Now',
    title: 'Elegant Kurti Collection',
    subtitle:
      'Vibrant colors, fine fabrics, timeless cuts — our Kurti collection celebrates every Bangladeshi woman.',
    cta: 'Shop Kurti',
    accent: '#9333ea',
    pos: 'center top',
  },
  {
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600&q=85',
    badge: '✦ Best Seller',
    title: 'Premium Casual Wear',
    subtitle:
      'From daily essentials to stylish outfits — find comfort and style that fits your lifestyle perfectly.',
    cta: 'Shop Casual',
    accent: '#16a34a',
    pos: 'center center',
  },
  {
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4b3b4c?w=1600&q=85',
    badge: '✦ Limited Edition',
    title: 'Festival Special Outfits',
    subtitle:
      "Celebrate Eid, Puja & every festival in style. Curated festive pieces — grab yours before they're gone.",
    cta: 'Shop Festival',
    accent: '#d97706',
    pos: 'center top',
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
      autoplay={{ delay: 4500, disableOnInteraction: false }}
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
              backgroundPosition: slide.pos,
            }}
          >
            {/* Left-heavy dark gradient so text is always readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 z-10" />

            {/* Bottom fade for extra depth */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-10" />

            {/* Slide content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-[90%] mx-auto w-full">
                <div className="text-white max-w-2xl">
                  {/* Badge */}
                  <span
                    className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold mb-5 border border-white/20 backdrop-blur-sm tracking-wider uppercase dmsans"
                    style={{ background: `${slide.accent}dd` }}
                  >
                    {slide.badge}
                  </span>

                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 arbutus-slab shimmer-text drop-shadow-lg">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 dmsans max-w-lg opacity-90">
                    {slide.subtitle}
                  </p>

                  {/* CTAs */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <Link
                      to="/products"
                      className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer shadow-xl hover:scale-105 hover:shadow-2xl active:scale-95 dmsans"
                      style={{ background: slide.accent, color: '#fff' }}
                    >
                      {slide.cta} <HiArrowRight />
                    </Link>
                    <Link
                      to="/products"
                      className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-sm border-2 border-white/50 hover:border-white hover:bg-white/15 backdrop-blur-sm transition-all duration-300 cursor-pointer dmsans"
                    >
                      View All
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

export default HomeSlider;
