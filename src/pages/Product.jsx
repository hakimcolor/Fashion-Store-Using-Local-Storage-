import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartStyle from '../Components/CartStyle';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const GENDER_TABS = [
  {
    key: 'all',
    label: { en: 'All', bn: 'সব' },
    icon: '🛍️',
    banner:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    tagline: {
      en: 'Explore our full fashion collection',
      bn: 'আমাদের সম্পূর্ণ কালেকশন দেখুন',
    },
  },
  {
    key: 'men',
    label: { en: 'Men', bn: 'পুরুষ' },
    icon: '👔',
    banner:
      'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1200&q=80',
    tagline: {
      en: 'Sharp styles for the modern man',
      bn: 'আধুনিক পুরুষের জন্য স্মার্ট স্টাইল',
    },
  },
  {
    key: 'women',
    label: { en: 'Women', bn: 'নারী' },
    icon: '👗',
    banner:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    tagline: {
      en: 'Elegant fashion for every woman',
      bn: 'প্রতিটি নারীর জন্য মার্জিত ফ্যাশন',
    },
  },
  {
    key: 'kids',
    label: { en: 'Kids', bn: 'শিশু' },
    icon: '🎒',
    banner:
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=1200&q=80',
    tagline: {
      en: 'Cute & comfy styles for little ones',
      bn: 'ছোটদের জন্য আরামদায়ক পোশাক',
    },
  },
];

const Product = () => {
  const products = useLoaderData();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState('all');
  const [activeGender, setActiveGender] = useState('all');
  const { lang } = useLang();

  const activeTab = GENDER_TABS.find((t) => t.key === activeGender);

  // Filter by gender first
  const genderFiltered =
    activeGender === 'all'
      ? products
      : products.filter((p) => p.gender === activeGender);

  const categories = ['all', ...new Set(genderFiltered.map((p) => p.category))];

  const filteredProducts = genderFiltered
    .filter((product) => {
      const text = search.toLowerCase();
      const matchSearch =
        product.name.toLowerCase().includes(text) ||
        product.category.toLowerCase().includes(text);
      const matchCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchPrice =
        priceRange === 'all' ||
        (priceRange === 'under1500' && product.price < 1500) ||
        (priceRange === '1500to3000' &&
          product.price >= 1500 &&
          product.price <= 3000) ||
        (priceRange === 'over3000' && product.price > 3000);
      return matchSearch && matchCategory && matchPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const catLabel = (cat) => (cat === 'all' ? tr('products_all', lang) : cat);

  const handleGenderChange = (key) => {
    setActiveGender(key);
    setSelectedCategory('all');
    setSearch('');
    setPriceRange('all');
    setSortBy('default');
  };

  return (
    <div>
      {/* Gender Tab Banner */}
      <div
        className="relative w-full h-52 md:h-72 overflow-hidden"
        data-aos="fade-in"
      >
        <img
          src={activeTab.banner}
          alt={activeTab.label[lang]}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <p className="dmsans text-sm font-semibold uppercase tracking-widest text-blue-300 mb-2">
            {tr('products_label', lang)}
          </p>
          <h1 className="arbutus-slab text-4xl md:text-5xl text-white font-bold">
            {activeTab.icon} {activeTab.label[lang]}
          </h1>
          <p className="dmsans text-blue-100 mt-2 text-base md:text-lg">
            {activeTab.tagline[lang]}
          </p>
        </div>
      </div>

      {/* Gender Tabs */}
      <div className="sticky top-0 z-30 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-[95%] mx-auto flex gap-0 overflow-x-auto scrollbar-hide">
          {GENDER_TABS.map((tab) => {
            const count =
              tab.key === 'all'
                ? products.length
                : products.filter((p) => p.gender === tab.key).length;
            return (
              <button
                key={tab.key}
                onClick={() => handleGenderChange(tab.key)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold dmsans whitespace-nowrap border-b-2 transition-all duration-300 cursor-pointer shrink-0 ${
                  activeGender === tab.key
                    ? 'border-[#155dfc] text-[#155dfc]'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-[#155dfc] hover:border-[#155dfc]/40'
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                {tab.label[lang]}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    activeGender === tab.key
                      ? 'bg-[#155dfc]/10 text-[#155dfc]'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-[95%] mx-auto py-8">
        {/* Search + Sort */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <div className="relative w-full max-w-xl">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder={tr('products_search', lang)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white dmsans text-sm shadow-sm outline-none focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/20 transition-all duration-300"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedCategory('all');
              }}
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="shrink-0 py-3.5 px-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 dmsans text-sm shadow-sm outline-none focus:border-[#155dfc] cursor-pointer"
          >
            <option value="default">Sort: Default</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Price filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {[
            { key: 'all', label: 'All Prices' },
            { key: 'under1500', label: 'Under ৳1,500' },
            { key: '1500to3000', label: '৳1,500 – ৳3,000' },
            { key: 'over3000', label: 'Over ৳3,000' },
          ].map((p) => (
            <button
              key={p.key}
              onClick={() => setPriceRange(p.key)}
              className={`dmsans text-xs px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                priceRange === p.key
                  ? 'bg-[#155dfc] text-white border-[#155dfc]'
                  : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-[#155dfc] hover:text-[#155dfc]'
              }`}
            >
              {p.label}
            </button>
          ))}
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
                {catLabel(cat)}
              </button>
            ))}
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block lg:w-[240px] lg:shrink-0 lg:mt-[-60px]">
            <div className="sticky top-24 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-lg">
              <h2 className="mb-5 text-xl font-bold arbutus-slab text-gray-900 dark:text-white">
                {tr('products_categories', lang)}
              </h2>
              <div className="space-y-1.5">
                {categories.map((cat) => {
                  const count =
                    cat === 'all'
                      ? genderFiltered.length
                      : genderFiltered.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full cursor-pointer rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                        selectedCategory === cat
                          ? 'text-white shadow-md bg-[#155dfc]'
                          : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#155dfc] hover:text-white'
                      }`}
                    >
                      <span>{catLabel(cat)}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-bold ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'}`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 && (
              <div className="flex items-center justify-between mb-4">
                <p className="dmsans text-sm text-gray-500 dark:text-gray-400">
                  {filteredProducts.length}{' '}
                  {filteredProducts.length === 1 ? 'product' : 'products'} found
                </p>
                {(search ||
                  selectedCategory !== 'all' ||
                  priceRange !== 'all' ||
                  sortBy !== 'default') && (
                  <button
                    onClick={() => {
                      setSearch('');
                      setSelectedCategory('all');
                      setPriceRange('all');
                      setSortBy('default');
                    }}
                    className="dmsans text-xs text-red-500 hover:text-red-700 underline cursor-pointer transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
            {filteredProducts.length > 0 ? (
              <CartStyle products={filteredProducts} />
            ) : (
              <div className="flex flex-col items-center justify-center gap-5 py-24 rounded-3xl border-2 border-dashed border-blue-100 dark:border-gray-700 bg-gradient-to-br from-blue-50/50 to-white dark:from-gray-800/50 dark:to-gray-900">
                <div className="w-20 h-20 rounded-full bg-[#155dfc]/10 flex items-center justify-center text-4xl">
                  🔍
                </div>
                <div className="text-center space-y-1">
                  <p className="arbutus-slab text-xl font-bold text-gray-800 dark:text-white">
                    {tr('products_not_found_title', lang)}
                  </p>
                  <p className="dmsans text-sm text-gray-400">
                    {tr('products_not_found_sub', lang)}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSearch('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setSortBy('default');
                  }}
                  className="dmsans text-sm px-6 py-2.5 rounded-xl bg-[#155dfc] text-white hover:bg-blue-700 transition-all cursor-pointer shadow"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Product;
