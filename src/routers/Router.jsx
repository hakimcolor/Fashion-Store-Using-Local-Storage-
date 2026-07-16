import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Product />,
        loader: async () => {
          const res = await fetch('/data/products.json');
          const products = await res.json();
          return products;
        },
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
        loader: async ({ params }) => {
          const products = await fetch('/data/products.json').then((res) =>
            res.json()
          );
        },
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
