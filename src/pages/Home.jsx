import React from 'react';
import HomeSlider from '../Components/HomeSlider';
import { useLoaderData } from 'react-router-dom';
import CartStyle from '../Components/CartStyle';

const Home = () => {
    const products = useLoaderData();

  return (
    <div>
      <HomeSlider />

      <div className="mt-20 max-w-[90%] mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-8 arbutus-slab">
          Featured Products
        </h1>

        <CartStyle products={products.slice(0, 4)} />
      </div>
    </div>
  );
};

export default Home;
