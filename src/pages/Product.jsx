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

  // get all unique categories
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
      {/* search */}
      <div className="mb-10 flex justify-center md:ml-52">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-xl rounded-xl border border-gray-300 bg-white px-5 py-3 shadow-sm outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-gray-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/*  Sidebar   for catagory */}
        <aside className="lg:w-[250px] lg:flex-shrink-0 lg:-mt-[82px]">
          <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">
            <h2 className="mb-5 text-2xl font-bold arbutus-slab">
              Categories
            </h2>

            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full cursor-pointer rounded-xl px-4 py-3 text-left font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-black text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-black hover:text-white'
                  }`}
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
            <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
              <h2 className="text-3xl font-bold text-gray-500">
                No Products Found
              </h2>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Product;
