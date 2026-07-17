import React from 'react';
import Naveber from '../Components/Naveber';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Naveber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
