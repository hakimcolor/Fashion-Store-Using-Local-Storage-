// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import CartStyle from '../Components/cartStyle';

// const Product = () => {
//   const products = useLoaderData();
//   console.log(products);
//   return (
//     <div className="max-w-[90%] mx-auto">
//       <CartStyle products={products} />
//     </div>
//   );
// };

// export default Product;

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartStyle from '../Components/CartStyle';

const Product = () => {
  const products = useLoaderData();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) => {
    const text = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text)
    );
  });

  return (
    <div className="max-w-[90%] mx-auto py-8">
      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by product name or category..."
          className="w-full md:w-96 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <CartStyle products={filteredProducts} />
    </div>
  );
};

export default Product;