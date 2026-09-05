import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Panjabi',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80',
    count: '20+ Styles',
    color: '#155dfc',
  },
  {
    name: 'Saree & Kurti',
    image:
      'https://images.unsplash.com/photo-1614251056216-f748f76cd228?w=600&q=80',
    count: '30+ Designs',
    color: '#9333ea',
  },
  {
    name: 'Casual Wear',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
    count: '50+ Items',
    color: '#16a34a',
  },
  {
    name: 'Formal Shirts',
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80',
    count: '15+ Picks',
    color: '#d97706',
  },
  {
    name: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    count: '25+ Items',
    color: '#e11d48',
  },
  {
    name: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    count: '10+ Pairs',
    color: '#0891b2',
  },
];

const FeaturedCategories = () => (
  <section className="max-w-[90%] mx-auto py-16">
    <div className="text-center mb-12" data-aos="fade-up">
      <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
        shop by category
      </p>
      <h2 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
        Explore Collections
      </h2>
      <p className="dmsans text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
        From traditional Bangladeshi attire to modern fashion — find your
        perfect style.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat, i) => (
        <Link
          to="/products"
          key={cat.name}
          data-aos="zoom-in"
          data-aos-delay={i * 60}
          className="group relative overflow-hidden rounded-2xl cursor-pointer"
        >
          <div className="h-44 overflow-hidden rounded-2xl">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
            <h3 className="arbutus-slab text-sm font-bold leading-tight">
              {cat.name}
            </h3>
            <p className="dmsans text-xs mt-0.5 opacity-80">{cat.count}</p>
          </div>
          <div
            className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full opacity-90"
            style={{ background: cat.color }}
          />
        </Link>
      ))}
    </div>
  </section>
);

export default FeaturedCategories;
