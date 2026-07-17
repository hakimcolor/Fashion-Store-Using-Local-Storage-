import React from 'react';
import Naveber from '../Components/Naveber';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import Loader from '../Components/Loader';

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <ScrollToTop />
      {navigation.state === 'loading' && <Loader />}
      <Naveber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
