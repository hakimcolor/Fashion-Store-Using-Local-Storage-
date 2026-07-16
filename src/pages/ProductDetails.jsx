import React from 'react';

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  return <div>it's product details page ............</div>;
};

export default ProductDetails;
