import { useContext, useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import {
  HiHome,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import { CartContext } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import Cart from '../pages/Cart';

const Naveber = () => {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useContext(CartContext);
  const { dark, toggle } = useTheme();
  const cartRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menus = [
    { name: 'Home', path: '/', icon: <HiHome /> },
    { name: 'Products', path: '/products', icon: <HiOutlineShoppingBag /> },
    { name: 'Styles', path: '/styles', icon: <HiOutlineSparkles /> },
    { name: 'About', path: '/about', icon: <HiOutlineUser /> },
    { name: 'Contact', path: '/contact', icon: <HiOutlinePhone /> },
  ];

  const navStyle = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-1.5 transition-all duration-300 font-medium text-sm cursor-pointer ${
      isActive
        ? 'font-semibold text-[#155dfc]'
        : 'text-gray-600 dark:text-gray-300 hover:text-[#155dfc] dark:hover:text-[#155dfc]'
    }`;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-lg backdrop-blur-3xl bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700'
          : 'backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800'
      }`}
    >
      <div className="max-w-[95%] mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <img
              src="/logo (2).png"
              alt="OXISTYLE logo"
              className="h-10 w-10 object-contain rounded-full"
            />
            <span className="dark:text-white">OXI</span>
            <span className="text-[#155dfc]">STYLE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 dmsans font-bold">
            {menus.map((menu) => (
              <Link
                key={menu.path}
                to={menu.path}
                className={navStyle(menu.path)}
                style={
                  location.pathname === menu.path ? { color: '#155dfc' } : {}
                }
              >
                {menu.icon}
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggle}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {dark ? (
                <FaSun className="text-yellow-400 text-base" />
              ) : (
                <FaMoon className="text-gray-600 text-base" />
              )}
            </button>

            {/* Cart */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setShowCart((prev) => !prev)}
                className="relative flex items-center justify-center w-10 h-10 border border-gray-200 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <FaShoppingCart className="text-base text-gray-700 dark:text-gray-300" />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#155dfc] text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                  {cart.length}
                </span>
              </button>

              {showCart && (
                <div className="fixed right-0 top-[80px] w-full sm:w-[420px] h-[calc(100vh-80px)] bg-white dark:bg-gray-900 shadow-2xl border-l border-t border-gray-200 dark:border-gray-700 z-50 flex flex-col">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700 shrink-0">
                    <div className="flex items-center gap-2">
                      <FaShoppingCart className="text-[#155dfc] text-lg" />
                      <h2 className="arbutus-slab text-xl text-[#155dfc]">
                        Shopping Cart
                      </h2>
                    </div>
                    <button
                      onClick={() => setShowCart(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <Cart onClose={() => setShowCart(false)} />
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-xl text-gray-700 dark:text-gray-300"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? (
                <FaTimes className="hover:cursor-pointer hover:text-red-500 transition-all duration-300" />
              ) : (
                <FaBars className="hover:cursor-pointer transition-all duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="md:hidden flex flex-col gap-4 py-5 border-t border-gray-200 dark:border-gray-700 dmsans">
            {menus.map((menu) => (
              <Link
                key={menu.path}
                to={menu.path}
                className={navStyle(menu.path)}
                style={
                  location.pathname === menu.path ? { color: '#155dfc' } : {}
                }
                onClick={() => setOpen(false)}
              >
                {menu.icon}
                {menu.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Naveber;
