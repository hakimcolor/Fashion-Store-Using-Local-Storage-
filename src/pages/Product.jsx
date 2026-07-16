import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
  const products = useLoaderData();
  console.log(products);
  return <div></div>;
};

export default Product;
