import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
const HomeSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error('for fatcing data , the error is :', error)
      );
  }, []);

  // console.log('All Products:', products);
  // console.log('Total Products:', products.length);
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
      >
        {products.slice(0, 4).map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="relative h-[529px] md:h-[829px] xl:h-[829px] 2xl:h-[829px] w-full  overflow-hidden"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="absolute inset-0 z-20 max-w-[90%] mx-auto flex items-center">
                <div className="text-white max-w-2xl">
                  <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full  font-medium border border-white/30 mb-4 dmsans text-5xl">
                    {product.category}
                  </span>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 font arbutus-slab">
                    {product.name}
                  </h1>

                  <p className="text-gray-200 text-lg  leading-8 mb-8 dmsans ">
                    {product.description}
                  </p>

                  <Link to='/products'> <button className="px-7 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer dmsans">
                    View More Products
                  </button></Link>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
