import { useEffect, useState, useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { HiArrowRight } from 'react-icons/hi2';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  description: string;
}

const colorMap: Record<string, string> = {
  white: '#f3f4f6',
  navy: '#1e3a5f',
  'sky blue': '#7dd3fc',
  khaki: '#c3b091',
  olive: '#6b7c3f',
  silver: '#c0c0c0',
  gray: '#9ca3af',
  black: '#1f2937',
  blue: '#3b82f6',
  red: '#ef4444',
  green: '#22c55e',
  brown: '#92400e',
};
const resolveColor = (c: string) =>
  colorMap[c.toLowerCase()] ?? c.toLowerCase();

const ProductSugation = () => {
  const current = useLoaderData() as Product;
  const [products, setProducts] = useState<Product[]>([]);
  const [active, setActive] = useState<'related' | 'all'>('related');
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    fetch('/data/products.json')
      .then((r) => r.json())
      .then((data: Product[]) => {
        const others = data.filter((p) => p.id !== current.id);
        // same category first, then rest, shuffle within groups
        const same = others.filter((p) => p.category === current.category);
        const rest = others.filter((p) => p.category !== current.category);
        setProducts([...same, ...rest]);
      });
  }, [current.id, current.category]);

  const related = products.filter((p) => p.category === current.category);
  const displayed =
    active === 'related' ? related.slice(0, 8) : products.slice(0, 12);

  const scroll = (dir: 'l' | 'r') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'r' ? 320 : -320,
        behavior: 'smooth',
      });
    }
  };

  if (products.length === 0) return null;

  return (
    <section className="mt-16 mb-4">
      {/* Header */}
      <div className="text-center mb-8" data-aos="fade-up">
        <p className="dmsans text-sm font-semibold uppercase tracking-widest text-[#155dfc] mb-2">
          {tr('suggest_label', lang)}
        </p>
        <h2 className="arbutus-slab text-3xl text-gray-900 dark:text-white">
          {tr('suggest_title', lang)}
        </h2>
        <p className="dmsans text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto text-sm">
          {tr('suggest_sub', lang)}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-7" data-aos="fade-up">
        <button
          onClick={() => setActive('related')}
          className={`cursor-pointer dmsans text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
            active === 'related'
              ? 'bg-[#155dfc] text-white shadow-md'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {current.category}
        </button>
        <button
          onClick={() => setActive('all')}
          className={`cursor-pointer dmsans text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
            active === 'all'
              ? 'bg-[#155dfc] text-white shadow-md'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {tr('products_all', lang)}
        </button>
      </div>

      {/* Scroll Wrapper */}
      <div className="relative" data-aos="fade-up">
        {/* Left arrow */}
        <button
          onClick={() => scroll('l')}
          aria-label="Scroll left"
          className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg items-center justify-center text-gray-700 dark:text-white hover:bg-[#155dfc] hover:text-white hover:border-[#155dfc] transition-all duration-300 cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Cards track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-3 px-1 snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {displayed.map((product, i) => (
            <div
              key={product.id}
              className="snap-start shrink-0 w-[200px] sm:w-[220px] group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52 bg-gray-100 dark:bg-gray-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 rounded-full bg-[#155dfc] px-2.5 py-0.5 text-[10px] font-semibold text-white shadow truncate max-w-[80%]">
                  {product.category}
                </span>
                <span className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-white/90 dark:bg-gray-900/90 px-2 py-0.5 text-[10px] font-bold text-gray-800 dark:text-white shadow">
                  <FaStar className="text-yellow-400 text-[9px]" />
                  {product.rating}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-3 gap-1.5">
                <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1 arbutus-slab text-sm">
                  {product.name}
                </h3>

                {/* Color swatches */}
                {product.colors && (
                  <div className="flex items-center gap-1 mt-0.5">
                    {product.colors.slice(0, 4).map((c, idx) => (
                      <span
                        key={idx}
                        title={c}
                        className="w-3 h-3 rounded-full border border-white dark:border-gray-600 shadow-sm"
                        style={{ background: resolveColor(c) }}
                      />
                    ))}
                    {product.colors.length > 4 && (
                      <span className="text-[10px] text-gray-400 dmsans">
                        +{product.colors.length - 4}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700 mt-auto">
                  <div className="flex items-center font-bold text-gray-900 dark:text-white text-sm">
                    <TbCurrencyTaka className="text-base" />
                    {product.price.toLocaleString()}
                  </div>
                  <Link
                    to={`/products/${product.id}`}
                    className="flex items-center gap-1 rounded-lg bg-[#155dfc] px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 active:scale-95 transition-all duration-200 cursor-pointer shadow"
                  >
                    {tr('card_details', lang)}{' '}
                    <HiArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('r')}
          aria-label="Scroll right"
          className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg items-center justify-center text-gray-700 dark:text-white hover:bg-[#155dfc] hover:text-white hover:border-[#155dfc] transition-all duration-300 cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* View all CTA */}
      <div className="text-center mt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 dmsans text-sm font-semibold text-[#155dfc] hover:text-blue-700 transition-colors"
        >
          {tr('home_view_all', lang)} <HiArrowRight className="text-sm" />
        </Link>
      </div>
    </section>
  );
};

export default ProductSugation;
