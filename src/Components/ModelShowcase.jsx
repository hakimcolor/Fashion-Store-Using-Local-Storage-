import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { TbCurrencyTaka } from 'react-icons/tb';

// Bangladeshi fashion models with clothing
const looks = [
  {
    image:
      'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&q=85',
    tag: 'Eid Special',
    title: 'Panjabi for Men',
    price: 1490,
    color: '#155dfc',
  },
  {
    image:
      'https://images.unsplash.com/photo-1614251056216-f748f76cd228?w=800&q=85',
    tag: 'Trendy',
    title: 'Designer Kurti',
    price: 2190,
    color: '#9333ea',
  },
  {
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85',
    tag: 'New Arrival',
    title: 'Festival Wear',
    price: 3290,
    color: '#d97706',
  },
  {
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85',
    tag: 'Best Seller',
    title: 'Elegant Dress',
    price: 3490,
    color: '#e11d48',
  },
];

const ModelShowcase = () => (
  <section className="bg-gray-50 dark:bg-gray-900 py-16">
    <div className="max-w-[90%] mx-auto">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
          style inspirations
        </p>
        <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
          Dress to Impress
        </h2>
        <p className="dmsans text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
          Curated looks from our latest Bangladeshi fashion collection — worn by
          real people, made for you.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {looks.map((look, i) => (
          <div
            key={look.title}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="group relative overflow-hidden rounded-3xl cursor-pointer"
          >
            <div className="h-72 sm:h-96 overflow-hidden rounded-3xl">
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-3xl" />

            {/* tag */}
            <span
              className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: look.color }}
            >
              {look.tag}
            </span>

            {/* info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="arbutus-slab text-base md:text-lg font-bold">
                {look.title}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="dmsans text-sm flex items-center gap-0.5 font-bold">
                  <TbCurrencyTaka /> {look.price.toLocaleString()}
                </span>
                <Link
                  to="/products"
                  className="flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full transition-all duration-200"
                >
                  Shop <HiArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ModelShowcase;
