import Naveber from '../Components/Naveber';
import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import Loader from '../Components/Loader';
import WhatsAppButton from '../Components/WhatsAppButton';
import { useEffect } from 'react';
import AOS from 'aos';

const RootLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <ScrollToTop />
      {navigation.state === 'loading' && <Loader />}
      <Naveber />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default RootLayout;
