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

//           <h2 className="text-3xl font-bold mt-6">  <TbCurrencyTaka className="text-2xl" /> {product.price}</h2>

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

  //  Total Amount
  const totalAmount = product.price * quantity;

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
    <div className="w-[90%] max-w-7xl mx-auto py-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex items-center gap-2 dmsans text-base">
          <Link
            to="/"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            to="/products"
            className="font-semibold text-gray-500 hover:text-blue-600"
          >
            Products
          </Link>{' '}
          <span className="text-gray-400">/</span>
         <div className='text-blue-600 cursor-pointer'>Product Detail{' '}</div> 
        </div>

        <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-lg h-[420px] lg:h-[500px] mt-[-20px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Sideber */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold arbutus-slab leading-tight">
            {product.name}
          </h1>


          <div className="flex flex-wrap items-center gap-3 mt-3 dmsans">
            <span className="bg-black text-white px-4 py-2 rounded-full text-sm dmsans">
              {product.category}
            </span>

            <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
              <FaStar className="text-yellow-500 dmsans" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Price */}
          <h2 className="mt-5 text-3xl font-bold ">
            <TbCurrencyTaka className="text-2xl" />{' '}
            {product.price.toLocaleString()}
          </h2>

         
          <p className="mt-4 text-gray-600 leading-7 dmsans">
            {product.description}
          </p>

       
          <div className="mt-5 dmsans">
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

         
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
                    className={`w-9 h-9 rounded-full border-[3px] transition cursor-pointer ${
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
                    className={`w-10 h-10 rounded-lg border font-semibold transition cursor-pointer ${
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

            {/* quantity */}
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

                <span className="px-5 font-bold">{quantity}</span>

                <button
                  onClick={increase}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-[2px] text-gray-500 mb-2 dmsans">
              Total Amount
            </p>

            <div className="w-full sm:w-[260px] rounded-xl border bg-gray-50 px-5 py-4">
              <h2 className="text-2xl font-bold dmsans">
                <TbCurrencyTaka className="text-2xl" />{' '}
                {totalAmount.toLocaleString()}
              </h2>

              <p className="text-sm text-gray-500 mt-1 ">
                {quantity} × <TbCurrencyTaka className="text-2xl" />{' '}
                {product.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* add to cart */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="mt-6 w-full sm:w-auto bg-black text-white px-8 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition cursor-pointer disabled:bg-gray-400 dmsans"
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
