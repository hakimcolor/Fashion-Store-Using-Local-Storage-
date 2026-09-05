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
import FashionBanner from '../Components/FashionBanner';
import { useLang } from '../context/LanguageContext';
import { tr } from '../context/translations';

const Home = () => {
  const products = useLoaderData();
  const { lang } = useLang();

  return (
    <div>
      <HomeSlider />
      <FeaturedCategories />
      <FashionBanner />

      <div className="max-w-[95%] mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <p className="dmsans text-lg font-semibold uppercase tracking-widest mb-2 text-[#155dfc]">
            {tr('home_featured_label', lang)}
          </p>
          <h1 className="arbutus-slab text-4xl text-gray-900 dark:text-white">
            {tr('home_featured_title', lang)}
          </h1>
          <p className="dmsans text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
            {tr('home_featured_sub', lang)}
          </p>
        </div>
        <CartStyle products={products.slice(0, 4)} />
        <div className="flex justify-center mt-6 mb-10" data-aos="fade-up">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#155dfc] text-white font-semibold dmsans hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
          >
            {tr('home_view_all', lang)} <HiArrowRight />
          </Link>
        </div>
      </div>

      <WhyChooseUs />
      <BrandBanner />
      <ModelShowcase />
      <CustomerReviews />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default Home;
