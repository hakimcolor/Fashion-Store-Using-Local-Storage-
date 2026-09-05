import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Styles from '../pages/Styles';
import Loader from '../Components/Loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    HydrateFallback: Loader,
    children: [
      {
        index: true,
        element: <Home />,
        HydrateFallback: Loader,
        loader: async () => {
          const res = await fetch('/data/products.json');
          return res.json();
        },
      },
      {
        path: 'products',
        element: <Product />,
        HydrateFallback: Loader,
        loader: async () => {
          const res = await fetch('/data/products.json');
          return res.json();
        },
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
        HydrateFallback: Loader,
        loader: async ({ params }) => {
          const products = await fetch('/data/products.json').then((r) =>
            r.json()
          );
          return products.find((p) => p.id == params.id);
        },
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'styles',
        element: <Styles />,
      },
    ],
  },
]);

export default router;
