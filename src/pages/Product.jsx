import { useState, useRef, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartStyle from '../Components/CartStyle';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import { FiSliders } from 'react-icons/fi';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

/* ── palette ── */
const C = {
  gold: '#C8A96B',
  cream: '#F7F4ED',
  sage: '#C7D3C0',
  forest: '#8FA28A',
  dark: '#2d3d35',
};

const GENDER_TABS = [
  {
    key: 'all',
    label: { en: 'All', bn: 'সব' },
    icon: '🛍️',
    banner:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    tagline: {
      en: 'Explore our full collection',
      bn: 'সম্পূর্ণ কালেকশন দেখুন',
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
      'https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=1200&q=80',
    tagline: {
      en: 'Cute & comfy for little ones',
      bn: 'ছোটদের জন্য আরামদায়ক পোশাক',
    },
  },
];

const PRICE_FILTERS = [
  { key: 'all', label: { en: 'All Prices', bn: 'সব দাম' } },
  { key: 'under1500', label: { en: 'Under ৳1,500', bn: '৳১,৫০০ এর নিচে' } },
  { key: '1500to3000', label: { en: '৳1,500 – ৳3,000', bn: '৳১,৫০০–৳৩,০০০' } },
  { key: 'over3000', label: { en: 'Over ৳3,000', bn: '৳৩,০০০ এর উপরে' } },
];

const Product = () => {
  const products = useLoaderData();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState('all');
  const [activeGender, setActiveGender] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile
  const { lang } = useLang();
  const sidebarRef = useRef(null);

  const activeTab =
    GENDER_TABS.find((t) => t.key === activeGender) || GENDER_TABS[0];

  const genderFiltered =
    activeGender === 'all'
      ? products
      : products.filter((p) => p.gender === activeGender);

  const categories = ['all', ...new Set(genderFiltered.map((p) => p.category))];

  const filteredProducts = genderFiltered
    .filter((p) => {
      const t = search.toLowerCase();
      const matchSearch =
        p.name.toLowerCase().includes(t) ||
        p.category.toLowerCase().includes(t);
      const matchCat =
        selectedCategory === 'all' || p.category === selectedCategory;
      const matchPrice =
        priceRange === 'all' ||
        (priceRange === 'under1500' && p.price < 1500) ||
        (priceRange === '1500to3000' && p.price >= 1500 && p.price <= 3000) ||
        (priceRange === 'over3000' && p.price > 3000);
      return matchSearch && matchCat && matchPrice;
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetAll = () => {
    setSearch('');
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('default');
  };

  const hasFilters =
    search ||
    selectedCategory !== 'all' ||
    priceRange !== 'all' ||
    sortBy !== 'default';

  /* independent sidebar scroll — wheel on sidebar scrolls only sidebar */
  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;
    const handler = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop === 0 && e.deltaY < 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight && e.deltaY > 0;
      if (!atTop && !atBottom) {
        e.stopPropagation();
      }
    };
    el.addEventListener('wheel', handler, { passive: true });
    return () => el.removeEventListener('wheel', handler);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: C.cream }}>
      {/* ── Hero Banner ── */}
      <div className="relative w-full h-56 md:h-80 overflow-hidden">
        <img
          src={activeTab.banner}
          alt={activeTab.label[lang]}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(45,61,53,0.85) 0%, rgba(45,61,53,0.5) 50%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <p
            className="dmsans text-xs font-bold uppercase tracking-[4px] mb-2"
            style={{ color: C.gold }}
          >
            {lang === 'bn' ? 'আমাদের স্টোর' : 'our store'}
          </p>
          <h1 className="arbutus-slab text-4xl md:text-6xl font-bold text-white leading-tight">
            {activeTab.icon} {activeTab.label[lang]}
          </h1>
          <p
            className="dmsans mt-2 text-sm md:text-base max-w-md"
            style={{ color: C.sage }}
          >
            {activeTab.tagline[lang]}
          </p>
        </div>
      </div>

      {/* ── Gender Tabs ── */}
      <div
        className="sticky top-0 z-30 border-b shadow-sm"
        style={{ background: C.cream, borderColor: C.sage }}
      >
        <div className="max-w-[95%] mx-auto flex overflow-x-auto scrollbar-hide">
          {GENDER_TABS.map((tab) => {
            const count =
              tab.key === 'all'
                ? products.length
                : products.filter((p) => p.gender === tab.key).length;
            const active = activeGender === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleGenderChange(tab.key)}
                className="flex items-center gap-2 px-6 py-4 text-sm font-semibold dmsans whitespace-nowrap border-b-2 transition-all duration-300 cursor-pointer shrink-0"
                style={{
                  borderBottomColor: active ? C.forest : 'transparent',
                  color: active ? C.dark : '#6b7280',
                  background: active ? `${C.sage}30` : 'transparent',
                }}
              >
                <span>{tab.icon}</span>
                {tab.label[lang]}
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{
                    background: active ? C.forest : '#e5e7eb',
                    color: active ? '#fff' : '#6b7280',
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="max-w-[95%] mx-auto py-6 flex gap-6 items-start">
        {/* ══ DESKTOP SIDEBAR ══ */}
        <aside
          ref={sidebarRef}
          className="hidden lg:flex flex-col gap-0 lg:w-[260px] shrink-0 rounded-2xl overflow-y-auto"
          style={{
            position: 'sticky',
            top: '72px',
            maxHeight: 'calc(100vh - 90px)',
            background: C.cream,
            border: `1.5px solid ${C.sage}`,
            boxShadow: '0 4px 24px rgba(143,162,138,0.15)',
          }}
        >
          {/* Sidebar header */}
          <div
            className="px-5 py-4 border-b"
            style={{ borderColor: C.sage, background: C.forest }}
          >
            <div className="flex items-center gap-2">
              <FiSliders className="text-lg" style={{ color: C.cream }} />
              <h2
                className="arbutus-slab text-base font-bold"
                style={{ color: C.cream }}
              >
                {lang === 'bn' ? 'ফিল্টার' : 'Filters'}
              </h2>
              {hasFilters && (
                <button
                  onClick={resetAll}
                  className="ml-auto text-xs px-2.5 py-1 rounded-full cursor-pointer font-semibold dmsans transition-all"
                  style={{
                    background: `${C.gold}30`,
                    color: C.gold,
                    border: `1px solid ${C.gold}60`,
                  }}
                >
                  {lang === 'bn' ? 'রিসেট' : 'Reset'}
                </button>
              )}
            </div>
          </div>

          {/* Search inside sidebar */}
          <div className="px-4 py-3 border-b" style={{ borderColor: C.sage }}>
            <div className="relative">
              <HiMagnifyingGlass
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
                style={{ color: C.forest }}
              />
              <input
                type="text"
                placeholder={lang === 'bn' ? 'খুঁজুন...' : 'Search...'}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedCategory('all');
                }}
                className="w-full pl-8 pr-3 py-2 rounded-xl text-sm dmsans outline-none transition-all"
                style={{
                  background: '#fff',
                  border: `1.5px solid ${search ? C.forest : C.sage}`,
                  color: C.dark,
                  boxShadow: search ? `0 0 0 3px ${C.forest}20` : 'none',
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <HiXMark className="text-sm" style={{ color: C.forest }} />
                </button>
              )}
            </div>
          </div>

          {/* Sort */}
          <div className="px-4 py-3 border-b" style={{ borderColor: C.sage }}>
            <p
              className="dmsans text-[10px] font-bold uppercase tracking-widest mb-2"
              style={{ color: C.forest }}
            >
              {lang === 'bn' ? 'সাজান' : 'Sort By'}
            </p>
            <div className="flex flex-col gap-1">
              {[
                { val: 'default', label: { en: 'Default', bn: 'ডিফল্ট' } },
                {
                  val: 'price_asc',
                  label: { en: 'Price: Low → High', bn: 'দাম: কম → বেশি' },
                },
                {
                  val: 'price_desc',
                  label: { en: 'Price: High → Low', bn: 'দাম: বেশি → কম' },
                },
                { val: 'rating', label: { en: 'Top Rated', bn: 'সেরা রেটিং' } },
              ].map((s) => (
                <button
                  key={s.val}
                  onClick={() => setSortBy(s.val)}
                  className="text-left px-3 py-2 rounded-lg text-xs dmsans font-medium transition-all cursor-pointer flex items-center gap-2"
                  style={{
                    background: sortBy === s.val ? C.forest : 'transparent',
                    color: sortBy === s.val ? '#fff' : C.dark,
                  }}
                >
                  {sortBy === s.val && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  )}
                  {s.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="px-4 py-3 border-b" style={{ borderColor: C.sage }}>
            <p
              className="dmsans text-[10px] font-bold uppercase tracking-widest mb-2"
              style={{ color: C.forest }}
            >
              {lang === 'bn' ? 'মূল্যসীমা' : 'Price Range'}
            </p>
            <div className="flex flex-col gap-1">
              {PRICE_FILTERS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setPriceRange(p.key)}
                  className="text-left px-3 py-2 rounded-lg text-xs dmsans font-medium transition-all cursor-pointer flex items-center gap-2"
                  style={{
                    background: priceRange === p.key ? C.gold : 'transparent',
                    color: priceRange === p.key ? '#fff' : C.dark,
                  }}
                >
                  {priceRange === p.key && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  )}
                  {p.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="px-4 py-3">
            <p
              className="dmsans text-[10px] font-bold uppercase tracking-widest mb-2"
              style={{ color: C.forest }}
            >
              {tr('products_categories', lang)}
            </p>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => {
                const count =
                  cat === 'all'
                    ? genderFiltered.length
                    : genderFiltered.filter((p) => p.category === cat).length;
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="w-full cursor-pointer rounded-xl px-3 py-2 text-left text-xs font-medium dmsans transition-all duration-200 flex items-center justify-between group"
                    style={{
                      background: active ? C.sage : 'transparent',
                      color: active ? C.dark : '#6b7280',
                      border: active
                        ? `1.5px solid ${C.forest}`
                        : '1.5px solid transparent',
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {active && (
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: C.forest }}
                        />
                      )}
                      {catLabel(cat)}
                    </span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                      style={{
                        background: active ? C.forest : '#e5e7eb',
                        color: active ? '#fff' : '#9ca3af',
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ══ MAIN CONTENT ══ */}
        <main className="flex-1 min-w-0">
          {/* Mobile: filter bar */}
          <div className="flex lg:hidden items-center gap-2 mb-4 overflow-x-auto scrollbar-hide pb-1">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold dmsans cursor-pointer border transition-all"
              style={{
                background: C.forest,
                color: '#fff',
                border: `1.5px solid ${C.forest}`,
              }}
            >
              <FiSliders /> {lang === 'bn' ? 'ফিল্টার' : 'Filters'}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="shrink-0 cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold dmsans transition-all whitespace-nowrap border"
                style={{
                  background: selectedCategory === cat ? C.forest : '#fff',
                  color: selectedCategory === cat ? '#fff' : C.dark,
                  borderColor: selectedCategory === cat ? C.forest : C.sage,
                }}
              >
                {catLabel(cat)}
              </button>
            ))}
          </div>

          {/* Mobile sidebar drawer */}
          {sidebarOpen && (
            <div
              className="lg:hidden mb-4 rounded-2xl overflow-hidden border"
              style={{ background: C.cream, borderColor: C.sage }}
            >
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ background: C.forest }}
              >
                <span
                  className="arbutus-slab text-sm font-bold"
                  style={{ color: C.cream }}
                >
                  {lang === 'bn' ? 'ফিল্টার' : 'Filters'}
                </span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  style={{ color: C.cream }}
                >
                  <HiXMark className="text-lg" />
                </button>
              </div>
              <div className="p-4 grid grid-cols-2 gap-4">
                <div>
                  <p
                    className="dmsans text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: C.forest }}
                  >
                    Sort
                  </p>
                  {[
                    { val: 'default', label: 'Default' },
                    { val: 'price_asc', label: 'Price ↑' },
                    { val: 'price_desc', label: 'Price ↓' },
                    { val: 'rating', label: 'Top Rated' },
                  ].map((s) => (
                    <button
                      key={s.val}
                      onClick={() => {
                        setSortBy(s.val);
                      }}
                      className="block w-full text-left px-2 py-1.5 rounded-lg text-xs dmsans mb-1 cursor-pointer"
                      style={{
                        background: sortBy === s.val ? C.forest : 'transparent',
                        color: sortBy === s.val ? '#fff' : C.dark,
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
                <div>
                  <p
                    className="dmsans text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: C.forest }}
                  >
                    Price
                  </p>
                  {PRICE_FILTERS.map((p) => (
                    <button
                      key={p.key}
                      onClick={() => setPriceRange(p.key)}
                      className="block w-full text-left px-2 py-1.5 rounded-lg text-xs dmsans mb-1 cursor-pointer"
                      style={{
                        background:
                          priceRange === p.key ? C.gold : 'transparent',
                        color: priceRange === p.key ? '#fff' : C.dark,
                      }}
                    >
                      {p.label[lang]}
                    </button>
                  ))}
                </div>
              </div>
              {hasFilters && (
                <div className="px-4 pb-3">
                  <button
                    onClick={() => {
                      resetAll();
                      setSidebarOpen(false);
                    }}
                    className="w-full py-2 rounded-xl text-xs font-bold dmsans cursor-pointer"
                    style={{ background: C.gold, color: '#fff' }}
                  >
                    {lang === 'bn' ? 'সব রিসেট' : 'Reset All Filters'}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Results bar */}
          <div className="flex items-center justify-between mb-4">
            <p className="dmsans text-sm" style={{ color: C.forest }}>
              <span className="font-bold" style={{ color: C.dark }}>
                {filteredProducts.length}
              </span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
            {hasFilters && (
              <button
                onClick={resetAll}
                className="dmsans text-xs underline cursor-pointer transition-colors"
                style={{ color: C.gold }}
              >
                {lang === 'bn' ? 'সব মুছুন' : 'Clear all'}
              </button>
            )}
          </div>

          {/* Product grid or empty */}
          {filteredProducts.length > 0 ? (
            <CartStyle products={filteredProducts} />
          ) : (
            <div
              className="flex flex-col items-center justify-center gap-5 py-24 rounded-3xl border-2 border-dashed"
              style={{ borderColor: C.sage, background: `${C.cream}80` }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-5xl"
                style={{ background: `${C.sage}40` }}
              >
                🔍
              </div>
              <div className="text-center">
                <p
                  className="arbutus-slab text-xl font-bold"
                  style={{ color: C.dark }}
                >
                  {tr('products_not_found_title', lang)}
                </p>
                <p className="dmsans text-sm mt-1" style={{ color: C.forest }}>
                  {tr('products_not_found_sub', lang)}
                </p>
              </div>
              <button
                onClick={resetAll}
                className="dmsans text-sm px-6 py-2.5 rounded-xl font-semibold cursor-pointer shadow transition-all"
                style={{ background: C.forest, color: '#fff' }}
              >
                {lang === 'bn' ? 'রিসেট' : 'Reset Filters'}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Product;
