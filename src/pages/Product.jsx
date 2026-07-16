import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
  const products = useLoaderData();
  return <div>it's product page ............</div>;
};

export default Product;
