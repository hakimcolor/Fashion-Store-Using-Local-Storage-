// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const ProductDetails = () => {
//   const product = useLoaderData();

//   return (
//     <div className="max-w-7xl mx-auto py-10 px-5">
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* Image */}
//         <div>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full rounded-xl"
//           />
//         </div>

//         {/* Details */}
//         <div>
//           <h1 className="text-4xl font-bold">{product.name}</h1>

//           <p className="mt-4 text-gray-600">{product.description}</p>

//           <h2 className="text-3xl font-bold mt-6">৳ {product.price}</h2>

//           <p className="mt-4">Category : {product.category}</p>

//           <p className="mt-2">Rating : {product.rating}</p>

//           <p className="mt-2">
//             Stock :{product.inStock ? ' In Stock' : ' Out of Stock'}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';

const ProductDetails = () => {
  const product = useLoaderData();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    };

    console.log(cartItem);
    alert('Product Added To Cart');
  };

  return (
    <div className="w-[90%] max-w-7xl mx-auto py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div>
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold arbutus-slab leading-tight">
            {product.name}
          </h1>

          {/* Category & Rating */}
          <div className="flex flex-wrap items-center gap-4 mt-5">
            <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium dmsans">
              {product.category}
            </span>

            <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold dmsans">{product.rating}</span>
            </div>
          </div>

          {/* Price */}
          <h2 className="mt-8 text-3xl lg:text-4xl font-bold">
            ৳ {product.price}
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-8 text-[15px] sm:text-base dmsans">
            {product.description}
          </p>

          {/* Stock */}
          <div className="mt-8">
            <p className="text-lg dmsans">
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

          {/* Colors | Sizes | Quantity */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Colors */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-gray-500 dmsans">
                Colors
              </p>

              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                    style={{ backgroundColor: color }}
                    className={`h-11 w-11 rounded-full border-[3px] transition-all duration-300 cursor-pointer hover:scale-110 ${
                      selectedColor === color
                        ? 'border-black scale-110'
                        : 'border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-gray-500 dmsans">
                Sizes
              </p>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 w-11 rounded-lg border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-gray-500 dmsans">
                Quantity
              </p>

              <div className="flex items-center w-fit rounded-xl border border-gray-300 overflow-hidden shadow-sm">
                <button
                  onClick={decrease}
                  className="px-4 py-3 hover:bg-gray-100 transition cursor-pointer"
                >
                  <FaMinus />
                </button>

                <span className="px-6 text-lg font-bold">{quantity}</span>

                <button
                  onClick={increase}
                  className="px-4 py-3 hover:bg-gray-100 transition cursor-pointer"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          {/* Add To Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="mt-10 w-full sm:w-auto bg-black text-white px-10 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
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