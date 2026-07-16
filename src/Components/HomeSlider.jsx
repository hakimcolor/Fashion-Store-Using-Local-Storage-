import React, { useEffect, useState } from 'react';

const HomeSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('for fatcing data , the error is :', error));
  }, []);

  console.log('All Products:', products);
  console.log('Total Products:', products.length);
;

  return <div></div>;
};

export default HomeSlider;
