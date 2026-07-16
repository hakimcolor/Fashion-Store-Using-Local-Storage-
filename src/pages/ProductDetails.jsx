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

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductDetails = () => {
  const product = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold arbutus-slab">{product.name}</h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="rounded-full bg-gray-900 px-4 py-1 text-sm font-semibold text-white">
              {product.category}
            </span>

            <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">{product.rating}</span>
            </div>
          </div>

          <p className="mt-6 text-gray-600 dmsans">{product.description}</p>

          <h2 className="text-4xl font-bold mt-8">৳ {product.price}</h2>

          <p className="mt-4">
            <span className="font-semibold">Stock :</span>{' '}
            <span
              className={product.inStock ? 'text-green-600' : 'text-red-500'}
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </p>

          {/* clolor  */}
          <div className="mt-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600 dmsans">
              Colors
            </p>

            {/* every color show that's why i use map function for every color show in the product  */}
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  title={color}
                  className="h-10 w-10 cursor-pointer rounded-full border-2 border-gray-300 transition-all duration-300 hover:scale-110 hover:border-black"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* for showing size for every product */}
          <div className="mt-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600 dmsans">
              Sizes
            </p>

            {/* same map for every size show in the product */}
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-sm font-semibold transition-all duration-300 hover:border-black hover:bg-black hover:text-white dmsans"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;