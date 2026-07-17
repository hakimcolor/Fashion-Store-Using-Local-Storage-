import React from 'react';
import HomeSlider from '../Components/HomeSlider';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData();

  return (
    <div>
    
      <HomeSlider />

      <div className='mt-100'>dlsfl;dskfl;</div>
      
    </div>
  );
};

export default Home;
