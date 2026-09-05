import { useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const product = useLoaderData();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const totalAmount = product.price * quantity;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
      totalAmount,
    });
    toast.success('Added to cart successfully!');
  };

  return (
    <div className="w-full max-w-[95%] mx-auto py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm dmsans mb-8">
        <Link
          to="/"
          className="text-gray-500 dark:text-gray-400 hover:text-[#155dfc] transition-colors"
        >
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <Link
          to="/products"
          className="text-gray-500 dark:text-gray-400 hover:text-[#155dfc] transition-colors"
        >
          Products
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-[#155dfc]">Detail</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div
          data-aos="fade-right"
          className="overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-xl h-72 sm:h-96 lg:h-[520px]"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details */}
        <div className="space-y-5" data-aos="fade-left">
          {/* Category + rating */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#155dfc] text-white px-4 py-1.5 rounded-full text-sm dmsans font-semibold">
              {product.category}
            </span>
            <div className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1.5 rounded-full">
              <FaStar className="text-yellow-500 text-sm" />
              <span className="text-sm font-bold text-gray-800 dark:text-yellow-300">
                {product.rating}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold arbutus-slab leading-tight text-gray-900 dark:text-white">
            {product.name}
          </h1>

          <div className="flex items-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            <TbCurrencyTaka className="text-2xl" />
            {product.price.toLocaleString()}
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed dmsans text-sm sm:text-base">
            {product.description}
          </p>

          <p className="dmsans text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Stock:{' '}
            </span>
            <span
              className={`font-bold ${product.inStock ? 'text-green-600' : 'text-red-500'}`}
            >
              {product.inStock ? '● In Stock' : '● Out of Stock'}
            </span>
          </p>

          {/* Color / Size / Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mb-2 dmsans">
                Colors
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-9 h-9 rounded-full border-[3px] transition-all cursor-pointer hover:scale-110 ${
                      selectedColor === color
                        ? 'border-[#155dfc] scale-110 ring-2 ring-[#155dfc]/30'
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
                {selectedColor}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mb-2 dmsans">
                Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-xl border font-semibold transition-all cursor-pointer text-sm hover:scale-105 ${
                      selectedSize === size
                        ? 'bg-[#155dfc] text-white border-[#155dfc] shadow-md'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-[#155dfc] hover:text-white hover:border-[#155dfc]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mb-2 dmsans">
                Quantity
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

          {/* Total */}
          <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-blue-50/50 dark:bg-blue-900/10 px-5 py-4">
            <p className="dmsans text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
              Total Amount
            </p>
            <h2 className="text-2xl font-bold flex items-center text-[#155dfc]">
              <TbCurrencyTaka className="text-2xl" />
              {totalAmount.toLocaleString()}
            </h2>
            <p className="dmsans text-xs text-gray-500 dark:text-gray-400 mt-1">
              {quantity} × {product.price.toLocaleString()} Tk
            </p>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#155dfc] hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer disabled:bg-gray-400 dmsans active:scale-[.98] shadow-lg"
          >
            <FaShoppingCart />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
