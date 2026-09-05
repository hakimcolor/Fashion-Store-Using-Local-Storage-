import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './routers/Router.jsx';
import CartProvider from './context/CartProvider.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-out',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 4000 }}
        />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
