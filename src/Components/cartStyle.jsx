import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CartStyle = ({ products }) => {
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* the product img  */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* catagory for every product */}
              <span className="absolute bottom-3 left-3 rounded-full bg-black/90 px-3 py-1 text-xs font-semibold text-white">
                {product.category}
              </span>
            </div>

            <div className="p-4">
              {/* Name & Rating... */}
              <div className="mb-2 flex items-start justify-between gap-3">
                <h2 className=" font-bold text-gray-900 line-clamp-1 arbutus-slab text-2xl">
                  {product.name}
                </h2>

                <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1">
                  <FaStar className="text-yellow-500 text-base" />
                  <span className="text-base font-bold text-gray-800">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* small one line description  */}
              <p className=" text-gray-500 line-clamp-1 dmsans text-[3px]">
                {product.description}
              </p>

              {/* clolor  */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600 dmsans">
                  Colors
                </p>
                {/* every color show that's why i use map function for every color show in the product  */}
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      title={color}
                      className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-300 transition-all duration-300 hover:scale-125 hover:border-black"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* for showing size for every product */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600 dmsans">
                  Sizes
                </p>
                {/* same map for every size show in the product */}
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-sm font-semibold transition-all duration-300 hover:border-black hover:bg-black hover:text-white dmsans"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    ৳ {product.price}
                  </h3>

                  <span
                    className={`text-sm font-semibold dmsans ${
                      product.inStock ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                {/* if want to show the product details page then we use link for that and also we use the product id for every product */}
                <Link
                  to={`/products/${product.id}`}
                  className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600"
                >
                  View Details
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
