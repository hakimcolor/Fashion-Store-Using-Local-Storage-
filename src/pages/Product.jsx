import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartStyle from '../Components/CartStyle';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const Product = () => {
  const products = useLoaderData();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const categories = [
    'All Products',
    ...new Set(products.map((p) => p.category)),
  ];

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
    <div className="max-w-[95%] mx-auto py-10">
      {/* Page header */}
      <div className="text-center mb-10" data-aos="fade-up">
        <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
          our store
        </p>
        <h1 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
          All Products
        </h1>
        <p className="dmsans text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
          Browse our full collection of authentic Bangladeshi fashion.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-xl">
          <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search products by name or category..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white dmsans text-sm shadow-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all duration-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Mobile categories */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'text-white shadow-md bg-[#155dfc]'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block lg:w-[240px] lg:shrink-0 lg:mt-[-82px]">
          <div className="sticky top-24 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-lg">
            <h2 className="mb-5 text-xl font-bold arbutus-slab text-gray-900 dark:text-white">
              Categories
            </h2>
            <div className="space-y-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full cursor-pointer rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'text-white shadow-md bg-[#155dfc]'
                      : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#155dfc] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products grid */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <CartStyle products={filteredProducts} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-20 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="relative w-20 h-20">
                <img
                  src="/logo (2).png"
                  alt="oxistyle"
                  className="w-full h-full object-contain rounded-full opacity-20"
                />
                <span className="absolute inset-0 flex items-center justify-center text-3xl text-[#155dfc]">
                  🔍
                </span>
              </div>
              <p className="arbutus-slab text-lg font-bold dark:text-white">
                OXI<span style={{ color: '#155dfc' }}>STYLE</span>
              </p>
              <h2 className="arbutus-slab text-xl text-gray-500 dark:text-gray-400">
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
