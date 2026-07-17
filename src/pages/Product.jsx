// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import CartStyle from '../Components/cartStyle';

// const Product = () => {
//   const products = useLoaderData();
//   console.log(products);
//   return (
//     <div className="max-w-[90%] mx-auto">
//       <CartStyle products={products} />
//     </div>
//   );
// };

// export default Product;

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartStyle from '../Components/CartStyle';

const Product = () => {
  const products = useLoaderData();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // get all unique categories..
  const categories = [
    'All Products',
    ...new Set(products.map((product) => product.category)),
  ];

  // filter products category
  const filteredProducts = products.filter((product) => {
    const text = search.toLowerCase();

    const matchSearch =
      product.name.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text);

    const matchCategory =
      selectedCategory === 'All Products' ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-[90%] mx-auto py-10">
      {/* search throuth name and catagory....... */}
      <div className="mb-10 flex justify-center ">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-xl rounded-xl border border-gray-300 bg-white px-5 py-3 shadow-sm outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-gray-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* mobile categories — horizontal scrollable flex row */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-1 px-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? 'text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={
                selectedCategory === category ? { background: '#155dfc' } : {}
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/*  sidebar — only visible on desktop */}
        <aside className="hidden lg:block lg:w-[250px] lg:shrink-0 lg:mt-[-82px]">
          <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">
            <h2 className="mb-5 text-2xl font-bold arbutus-slab">Categories</h2>

            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full cursor-pointer rounded-xl px-4 py-3 text-left font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-black hover:text-white'
                  }`}
                  style={
                    selectedCategory === category
                      ? { background: '#155dfc' }
                      : {}
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* products cart show */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <CartStyle products={filteredProducts} />
          ) : (
            // no results empty state
            <div className="flex flex-col items-center justify-center gap-4 py-20 rounded-2xl border border-dashed border-gray-200 bg-gray-50">
              <div className="relative w-20 h-20">
                <img
                  src="/logo (2).png"
                  alt="oxistyle"
                  className="w-full h-full object-contain rounded-full opacity-20"
                />
                {/* magnifier icon overlay */}
                <span className="absolute inset-0 flex items-center justify-center text-3xl text-[#155dfc]">
                  🔍
                </span>
              </div>
              <p className="arbutus-slab text-lg font-bold">
                OXI<span style={{ color: '#155dfc' }}>STYLE</span>
              </p>
              <h2 className="arbutus-slab text-xl text-gray-500">
                no products found
              </h2>
              <p className="dmsans text-sm text-gray-400">
                try a different search or category
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Product;
