import React from 'react';
import HomeSlider from '../Components/HomeSlider';
import { useLoaderData } from 'react-router-dom';
import WhyChooseUs from '../Components/WhyChooseUs';
import CustomerReviews from '../Components/CustomerReviews';
import FAQ from '../Components/FAQ';
import Newsletter from '../Components/Newsletter';
import CartStyle from '../Components/CartStyle';

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <HomeSlider />

      {/* featured productss.. */}
      <div className="mt-20 max-w-[90%] mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <p
            className="dmsans text-lg font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#155dfc' }}
          >
            hand picked for you
          </p>
          <h1 className="arbutus-slab text-4xl text-gray-900">
            Featured Products
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <CartStyle products={products.slice(0, 4)} />
        </div>
      </div>

      {/* why choose us */}
      <WhyChooseUs />

      {/* customer reviews */}
      <CustomerReviews />

      {/* faq */}
      <FAQ />

      {/* newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
