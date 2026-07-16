import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartStyle from '../Components/cartStyle';

const Product = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="max-w-[90%] mx-auto">
      <CartStyle products={products} />
    </div>
  );
};

export default Product;
