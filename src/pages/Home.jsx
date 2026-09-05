import { useLoaderData, Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import HomeSlider from '../Components/HomeSlider';
import WhyChooseUs from '../Components/WhyChooseUs';
import CustomerReviews from '../Components/CustomerReviews';
import FAQ from '../Components/FAQ';
import Newsletter from '../Components/Newsletter';
import CartStyle from '../Components/CartStyle';
import FeaturedCategories from '../Components/FeaturedCategories';
import ModelShowcase from '../Components/ModelShowcase';
import BrandBanner from '../Components/BrandBanner';

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      {/* Hero Slider */}
      <HomeSlider />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Featured Products */}
      <div className="max-w-[90%] mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
            hand picked for you
          </p>
          <h1 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
            Featured Products
          </h1>
          <p className="dmsans text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
            Explore our most loved items — quality fashion curated just for you.
          </p>
        </div>
        <CartStyle products={products.slice(0, 4)} />
        <div className="flex justify-center mt-6 mb-10" data-aos="fade-up">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#155dfc] text-white font-semibold dmsans hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
          >
            View All Products <HiArrowRight />
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Brand Sale Banner */}
      <BrandBanner />

      {/* Model Showcase */}
      <ModelShowcase />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* FAQ */}
      <FAQ />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
