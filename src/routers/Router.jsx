import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Loader from '../Components/Loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // shown while root layout data loads
    HydrateFallback: Loader,
    children: [
      {
        index: true,
        element: <Home />,
        HydrateFallback: Loader,
        loader: async () => {
          const res = await fetch('/data/products.json');
          const products = await res.json();
          return products;
        },
      },
      {
        path: 'products',
        element: <Product />,
        HydrateFallback: Loader,
        loader: async () => {
          const res = await fetch('/data/products.json');
          const products = await res.json();
          return products;
        },
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
        HydrateFallback: Loader,
        loader: async ({ params }) => {
          const products = await fetch('/data/products.json').then((res) =>
            res.json()
          );

          return products.find((product) => product.id == params.id);
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
