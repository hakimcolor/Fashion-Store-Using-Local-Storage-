import { useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';
import ProductSugation from '../Components/ProductSugation';

const ProductDetails = () => {
  const product = useLoaderData();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { lang } = useLang();

  const totalAmount = product.price * quantity;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
      totalAmount,
    });
    toast.success(
      lang === 'bn' ? 'কার্টে যোগ হয়েছে!' : 'Added to cart successfully!'
    );
  };

  return (
    <div className="w-full max-w-[95%] mx-auto py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm dmsans mb-8">
        <Link
          to="/"
          className="text-gray-500 dark:text-gray-400 hover:text-[#3F4F44] transition-colors"
        >
          {tr('detail_breadcrumb_home', lang)}
        </Link>
        <span className="text-gray-400">/</span>
        <Link
          to="/products"
          className="text-gray-500 dark:text-gray-400 hover:text-[#3F4F44] transition-colors"
        >
          {tr('detail_breadcrumb_products', lang)}
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-[#3F4F44]">
          {tr('detail_breadcrumb_detail', lang)}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div
          data-aos="fade-right"
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#F8F3D9] to-gray-100 dark:from-gray-700 dark:to-gray-900 shadow-xl h-[90%] sm:h-96 lg:h-[720px]"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full  object-cover h-full  hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details */}
        <div className="space-y-5" data-aos="fade-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#3F4F44] text-white px-4 py-1.5 rounded-full text-sm dmsans font-semibold">
              {product.category}
            </span>
            <div className="flex items-center gap-2 bg-[#EBE5C2] dark:bg-[#B9B28A]/20 px-3 py-1.5 rounded-full">
              <FaStar className="text-[#B9B28A] text-sm" />
              <span className="text-sm font-bold text-gray-800 dark:text-[#B9B28A]">
                {product.rating}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold arbutus-slab leading-tight text-gray-900 dark:text-white">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              <TbCurrencyTaka className="text-2xl" />
              {product.price.toLocaleString()}
            </div>
            <span className="text-xs font-semibold bg-[#EBE5C2] dark:bg-[#3F4F44]/20 text-green-700 dark:text-[#3F4F44] px-3 py-1 rounded-full dmsans">
              🚚 Free Delivery
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed dmsans text-sm sm:text-base">
            {product.description}
          </p>

          <p className="dmsans text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {tr('detail_stock_label', lang)}{' '}
            </span>
            <span
              className={`font-bold ${product.inStock ? 'text-[#3F4F44]' : 'text-[#B9B28A]'}`}
            >
              {product.inStock
                ? tr('detail_instock', lang)
                : tr('detail_outstock', lang)}
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mb-2 dmsans">
                {tr('detail_colors', lang)}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-9 h-9 rounded-full border-[3px] transition-all cursor-pointer hover:scale-110 ${
                      selectedColor === color
                        ? 'border-[#3F4F44] scale-110 ring-2 ring-[#3F4F44]/30'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    style={{
                      backgroundColor:
                        color.toLowerCase() === 'white'
                          ? '#f9fafb'
                          : color.toLowerCase() === 'sky blue'
                            ? '#7dd3fc'
                            : color.toLowerCase() === 'navy'
                              ? '#1e3a5f'
                              : color.toLowerCase() === 'khaki'
                                ? '#c3b091'
                                : color.toLowerCase() === 'olive'
                                  ? '#6b7c3f'
                                  : color.toLowerCase() === 'silver'
                                    ? '#c0c0c0'
                                    : color.toLowerCase(),
                    }}
                    title={color}
                  />
                ))}
              </div>
              <p className="dmsans text-xs text-gray-400 mt-1">
                Selected:{' '}
                <span className="font-semibold text-[#3F4F44]">
                  {selectedColor}
                </span>
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mb-2 dmsans flex items-center gap-1">
                {tr('detail_sizes', lang)}
                <span
                  title="S=36, M=38, L=40, XL=42, XXL=44 inches"
                  className="cursor-help text-[#3F4F44] text-xs border border-[#3F4F44] rounded-full w-4 h-4 inline-flex items-center justify-center leading-none"
                >
                  ?
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-xl border font-semibold transition-all cursor-pointer text-sm hover:scale-105 ${
                      selectedSize === size
                        ? 'bg-[#3F4F44] text-white border-[#3F4F44] shadow-md'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-[#3F4F44] hover:text-white hover:border-[#3F4F44]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="dmsans text-xs text-gray-400 mt-1">
                Selected:{' '}
                <span className="font-semibold text-[#3F4F44]">
                  {selectedSize}
                </span>
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mb-2 dmsans">
                {tr('detail_quantity', lang)}
              </p>
              <div className="flex items-center rounded-xl border border-gray-200 dark:border-gray-600 w-fit overflow-hidden bg-white dark:bg-gray-800">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-300"
                >
                  <FaMinus className="text-xs" />
                </button>
                <span className="px-5 font-bold text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-300"
                >
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-[#F8F3D9]/50 dark:bg-[#3F4F44]/10 px-5 py-4">
            <p className="dmsans text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
              {tr('detail_total', lang)}
            </p>
            <h2 className="text-2xl font-bold flex items-center text-[#3F4F44]">
              <TbCurrencyTaka className="text-2xl" />
              {totalAmount.toLocaleString()}
            </h2>
            <p className="dmsans text-xs text-gray-500 dark:text-gray-400 mt-1">
              {quantity} × {product.price.toLocaleString()} Tk
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#3F4F44] hover:bg-[#2e3b32] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer disabled:bg-gray-400 dmsans active:scale-[.98] shadow-lg"
          >
            <FaShoppingCart />
            {product.inStock
              ? tr('detail_add_cart', lang)
              : tr('detail_outstock', lang)}
          </button>
        </div>
      </div>

      <ProductSugation></ProductSugation>

      {/* Mobile sticky add to cart */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white dark:bg-[#1e2922] border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3 shadow-2xl">
        <div className="flex-1">
          <p className="dmsans text-xs text-gray-500 dark:text-gray-400 truncate">
            {product.name}
          </p>
          <p className="font-bold text-[#3F4F44] flex items-center text-lg">
            <TbCurrencyTaka />
            {totalAmount.toLocaleString()}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="flex items-center gap-2 bg-[#3F4F44] hover:bg-[#2e3b32] text-white px-6 py-3 rounded-2xl font-semibold dmsans text-sm transition-all active:scale-95 disabled:bg-gray-400 shadow-lg cursor-pointer"
        >
          <FaShoppingCart />
          {product.inStock
            ? tr('detail_add_cart', lang)
            : tr('detail_outstock', lang)}
        </button>
      </div>
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default ProductDetails;
