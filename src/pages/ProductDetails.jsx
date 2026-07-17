

import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { TbCurrencyTaka } from 'react-icons/tb';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const product = useLoaderData();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const totalAmount = product.price * quantity;

  const increase = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
      totalAmount,
    };
    addToCart(cartItem);
    toast.success('Your cart added successfully');
  };

  return (
    <div className="w-full max-w-[90%] mx-auto ">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm dmsans mb-6 mt-5">
        <Link
          to="/"
          className="text-gray-500 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <Link
          to="/products"
          className="font-semibold text-gray-500 hover:text-blue-600"
        >
          Products
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-blue-600 cursor-pointer">Product Detail</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-lg h-72 sm:h-96 lg:h-[500px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold arbutus-slab leading-tight">
            {product.name}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-black text-white px-4 py-2 rounded-full text-sm dmsans">
              {product.category}
            </span>
            <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
              <FaStar className="text-yellow-500" />
              <span className="text-sm">{product.rating}</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold flex items-center">
            <TbCurrencyTaka className="text-2xl" />
            {product.price.toLocaleString()}
          </h2>

          <p className="text-gray-600 leading-relaxed dmsans text-sm sm:text-base">
            {product.description}
          </p>

          <div className="dmsans">
            <p>
              <span className="font-semibold">Stock : </span>
              <span
                className={`font-semibold ${
                  product.inStock ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </p>
          </div>

          {/* Color, Size, Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 mb-2 dmsans">
                Colors
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-[3px] transition cursor-pointer ${
                      selectedColor === color
                        ? 'border-black scale-110'
                        : 'border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 mb-2 dmsans">
                Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border font-semibold transition cursor-pointer text-sm sm:text-base ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:bg-black hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-500 mb-2 dmsans">
                Quantity
              </p>
              <div className="flex items-center rounded-xl border w-fit overflow-hidden">
                <button
                  onClick={decrease}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <FaMinus />
                </button>
                <span className="px-4 sm:px-5 font-bold">{quantity}</span>
                <button
                  onClick={increase}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          {/* Total Amount */}
          <div>
            <p className="text-xs uppercase tracking-[2px] text-gray-500 mb-2 dmsans">
              Total Amount
            </p>
            <div className="w-full sm:w-64 rounded-xl border bg-gray-50 px-5 py-4">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center">
                <TbCurrencyTaka className="text-xl sm:text-2xl" />
                {totalAmount.toLocaleString()}
              </h2>
              <p className="text-sm text-gray-500 mt-1 flex items-center">
                {quantity} × <TbCurrencyTaka className="text-base" />
                {product.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition cursor-pointer disabled:bg-gray-400 dmsans text-sm sm:text-base"
          >
            <FaShoppingCart />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;