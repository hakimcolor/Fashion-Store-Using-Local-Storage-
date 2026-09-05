import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { TbCurrencyTaka } from 'react-icons/tb';
import { HiArrowRight } from 'react-icons/hi2';

const CartStyle = ({ products }) => {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 80}
            key={product.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2"
          >
            {/* Image container */}
            <div className="relative overflow-hidden h-64 bg-gray-100 dark:bg-gray-700">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-110"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category badge */}
              <span className="absolute top-3 left-3 rounded-full bg-[#155dfc] px-3 py-1 text-xs font-semibold text-white shadow">
                {product.category}
              </span>

              {/* Rating badge */}
              <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 dark:bg-gray-900/90 px-2.5 py-1 text-xs font-bold text-gray-800 dark:text-white shadow">
                <FaStar className="text-yellow-400 text-xs" />
                {product.rating}
              </span>

              {/* Hover CTA overlay */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                <Link
                  to={`/products/${product.id}`}
                  className="flex items-center gap-2 bg-white text-[#155dfc] font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg hover:bg-[#155dfc] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  Quick View <HiArrowRight />
                </Link>
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-4 gap-2">
              <h2 className="font-bold text-gray-900 dark:text-white line-clamp-1 arbutus-slab text-lg">
                {product.name}
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 dmsans leading-relaxed flex-1">
                {product.description}
              </p>

              {/* Colors preview */}
              {product.colors && (
                <div className="flex items-center gap-1.5 mt-1">
                  {product.colors.slice(0, 4).map((c, idx) => (
                    <span
                      key={idx}
                      title={c}
                      className="w-4 h-4 rounded-full border-2 border-white dark:border-gray-600 shadow-sm"
                      style={{
                        background:
                          c.toLowerCase() === 'white'
                            ? '#f3f4f6'
                            : c.toLowerCase() === 'navy'
                              ? '#1e3a5f'
                              : c.toLowerCase() === 'sky blue'
                                ? '#7dd3fc'
                                : c.toLowerCase() === 'khaki'
                                  ? '#c3b091'
                                  : c.toLowerCase() === 'olive'
                                    ? '#6b7c3f'
                                    : c.toLowerCase() === 'silver'
                                      ? '#c0c0c0'
                                      : c.toLowerCase(),
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <div>
                  <div className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
                    <TbCurrencyTaka className="text-xl" />
                    {product.price.toLocaleString()}
                  </div>
                  <span
                    className={`text-xs font-semibold dmsans ${product.inStock ? 'text-green-600' : 'text-red-500'}`}
                  >
                    {product.inStock ? '● In Stock' : '● Out of Stock'}
                  </span>
                </div>

                <Link
                  to={`/products/${product.id}`}
                  className="flex items-center gap-1.5 rounded-xl bg-[#155dfc] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 active:scale-95 transition-all duration-200 cursor-pointer shadow"
                >
                  Details <HiArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartStyle;
