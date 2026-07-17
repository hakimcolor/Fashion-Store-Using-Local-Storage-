

import { useContext, useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { HiHome, HiOutlineShoppingBag } from 'react-icons/hi2';
import { CartContext } from '../context/CartContext';
import Cart from '../pages/Cart';

const Naveber = () => {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);
  const cartRef = useRef(null);
  const location = useLocation();

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
  ];

  // returns style based on whether the route is active
  const navStyle = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-2 transition-all duration-300 font-medium ${
      isActive ? 'font-semibold' : 'text-gray-600 hover:text-[#155dfc]'
    }`;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold flex items-center gap-2">
            <img
              src="/logo (2).png"
              alt="OXISTYLE logo"
              className="h-10 w-10 object-contain rounded-full"
            />
            OXI<span className="text-blue-500">STYLE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 dmsans font-bold">
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

          <div className="flex items-center gap-5">
            {/* cart wrapper */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setShowCart((prev) => !prev)}
                className="relative flex items-center justify-center w-11 h-11 border border-gray-300 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <FaShoppingCart className="text-lg text-gray-700 " />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                  {cart.length}
                </span>
              </button>

              {/* dropdown panel — opens below navbar, full height minus navbar, responsive width */}
              {showCart && (
                <div className="fixed right-0 top-[80px] w-full sm:w-[420px] h-[calc(100vh-80px)] bg-white shadow-2xl border-l border-t border-gray-200 z-50 flex flex-col">
                  {/* panel header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
                    <div className="flex items-center gap-2">
                      <FaShoppingCart
                        style={{ color: '#155dfc' }}
                        className="text-lg"
                      />
                      <h2
                        className="arbutus-slab text-xl"
                        style={{ color: '#155dfc' }}
                      >
                        Shopping Cart
                      </h2>
                    </div>
                    <button
                      onClick={() => setShowCart(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-all duration-200 cursor-pointer"
                    >
                      <FaTimes />
                    </button>
                  </div>

                  {/* cart content fills remaining height */}
                  <Cart onClose={() => setShowCart(false)} />
                </div>
              )}
            </div>

            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <FaTimes className="hover:cursor-pointer hover:text-red-500 transition-all duration-300" />
              ) : (
                <FaBars className="hover:cursor-pointer transition-all duration-300" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden flex flex-col gap-5 py-5 border-t border-gray-200 dmsans">
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
