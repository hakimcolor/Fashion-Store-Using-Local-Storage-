import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';

const looks = [
  {
    id: 1,
    tag: 'Traditional Wear',
    title: 'Elegant Kurti with Dupatta',
    desc: 'The Kurti is the heartbeat of Bangladeshi fashion. Crafted from soft cotton and adorned with intricate embroidery, this look blends tradition with modern elegance. Perfect for Eid mornings, family gatherings, and everyday grace.',
    price: 2190,
    rating: 4.8,
    badge: 'Best Seller',
    badgeColor: '#155dfc',
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=85',
    accent: '#155dfc',
    tags: ['Kurti', 'Cotton', 'Embroidery', 'Traditional'],
  },
  {
    id: 2,
    tag: 'Festive Collection',
    title: 'Vibrant Festival Saree',
    desc: 'Celebrate every festival draped in colour and culture. Our handpicked Saree collection features rich silk blends, vivid prints, and timeless motifs that honour the spirit of Bangladeshi heritage. Stand out at every occasion.',
    price: 3490,
    rating: 4.9,
    badge: 'New Arrival',
    badgeColor: '#9333ea',
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4b3b4c?w=900&q=85',
    accent: '#9333ea',
    tags: ['Saree', 'Silk', 'Festival', 'Wedding'],
  },
  {
    id: 3,
    tag: "Men's Traditional",
    title: 'Classic Panjabi for Men',
    desc: 'Nothing defines Bangladeshi menswear quite like the Panjabi. Our premium cotton collection offers a clean silhouette, subtle embroidery at the collar, and breathable fabric — ideal for prayers, Eid, or formal occasions.',
    price: 1490,
    rating: 4.7,
    badge: 'Top Rated',
    badgeColor: '#16a34a',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&q=85',
    accent: '#16a34a',
    tags: ['Panjabi', 'Cotton', 'Eid', 'Formal'],
  },
  {
    id: 4,
    tag: 'Casual Street Style',
    title: 'Modern Casual Fashion',
    desc: "A fusion of comfort and street-ready style. Whether it's a polo shirt, chinos, or a lightweight jacket — our casual range keeps you looking sharp without trying too hard. Made for the everyday Bangladeshi who values both comfort and class.",
    price: 990,
    rating: 4.6,
    badge: 'Trending',
    badgeColor: '#d97706',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&q=85',
    accent: '#d97706',
    tags: ['Casual', 'Street Style', 'Polo', 'Modern'],
  },
  {
    id: 5,
    tag: 'Bridal & Formal',
    title: 'Elegant Bridal Wear',
    desc: 'For the most important days of your life, only the finest will do. Our bridal and formal collection is crafted with luxurious fabrics, hand-finished details, and silhouettes that make every woman feel extraordinary on her special day.',
    price: 5990,
    rating: 5.0,
    badge: 'Exclusive',
    badgeColor: '#e11d48',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85',
    accent: '#e11d48',
    tags: ['Bridal', 'Formal', 'Luxury', 'Wedding'],
  },
  {
    id: 6,
    tag: 'Winter Collection',
    title: 'Cozy Hoodie & Jacket',
    desc: 'When the temperature drops, style should not. Our winter essentials — from plush hoodies to slim-fit denim jackets — are built for warmth without compromising on look. Layer up and stay fashionable all season long.',
    price: 2890,
    rating: 4.5,
    badge: 'Seasonal',
    badgeColor: '#0891b2',
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=85',
    accent: '#0891b2',
    tags: ['Hoodie', 'Jacket', 'Winter', 'Casual'],
  },
];

const Styles = () => (
  <div>
    {/* Hero */}
    <section
      className="relative py-24 overflow-hidden text-white text-center"
      style={{
        background: 'linear-gradient(135deg, #155dfc 0%, #7c3aed 100%)',
      }}
    >
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
      <div className="max-w-[95%] mx-auto relative z-10" data-aos="fade-up">
        <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 dmsans border border-white/20">
          Style Guide
        </span>
        <h1 className="arbutus-slab text-4xl md:text-6xl font-bold mb-5 leading-tight">
          Discover Your <span className="text-yellow-300">Style</span>
        </h1>
        <p className="dmsans text-lg text-blue-100 max-w-2xl mx-auto">
          From traditional Bangladeshi attire to modern street fashion — explore
          curated looks styled for every occasion.
        </p>
      </div>
    </section>

    {/* Alternating Looks */}
    <div className="max-w-[95%] mx-auto py-16 space-y-24">
      {looks.map((look, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={look.id}
            data-aos={isEven ? 'fade-right' : 'fade-left'}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
          >
            {/* Image side */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[420px] md:h-[520px]">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badge */}
                <span
                  className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-white text-xs font-bold dmsans shadow-lg"
                  style={{ background: look.badgeColor }}
                >
                  {look.badge}
                </span>

                {/* Rating */}
                <span className="absolute top-5 right-5 flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 dark:text-white shadow">
                  <FaStar className="text-yellow-400" /> {look.rating}
                </span>
              </div>
            </div>

            {/* Text side */}
            <div className="w-full lg:w-1/2 space-y-5">
              {/* Category */}
              <p
                className="dmsans text-sm font-bold uppercase tracking-widest"
                style={{ color: look.accent }}
              >
                {look.tag}
              </p>

              {/* Title */}
              <h2 className="arbutus-slab text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                {look.title}
              </h2>

              {/* Accent line */}
              <div
                className="w-14 h-1 rounded-full"
                style={{ background: look.accent }}
              />

              {/* Description */}
              <p className="dmsans text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                {look.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {look.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-semibold dmsans border"
                    style={{
                      color: look.accent,
                      borderColor: `${look.accent}55`,
                      background: `${look.accent}11`,
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <p className="dmsans text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                    Starting from
                  </p>
                  <div className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    <TbCurrencyTaka className="text-2xl" />
                    {look.price.toLocaleString()}
                  </div>
                </div>

                <Link
                  to="/products"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer dmsans"
                  style={{ background: look.accent }}
                >
                  Shop This Look <HiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* CTA Banner */}
    <section
      className="py-20 text-white text-center"
      style={{
        background: 'linear-gradient(135deg, #155dfc 0%, #1e40af 100%)',
      }}
      data-aos="zoom-in"
    >
      <div className="max-w-[95%] mx-auto">
        <h2 className="arbutus-slab text-3xl md:text-5xl font-bold mb-4">
          Ready to Find Your Perfect Look?
        </h2>
        <p className="dmsans text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          Browse our full collection of authentic Bangladeshi fashion and dress
          the way you feel.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-10 py-4 bg-white font-bold rounded-2xl hover:bg-blue-50 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer dmsans"
          style={{ color: '#155dfc' }}
        >
          Browse All Products <HiArrowRight />
        </Link>
      </div>
    </section>
  </div>
);

export default Styles;
