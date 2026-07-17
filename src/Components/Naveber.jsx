import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { HiHome, HiOutlineShoppingBag } from 'react-icons/hi2';
import { CartContext } from '../context/CartContext';
import Cart from '../pages/Cart';

const Naveber = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);
  // All menu items
  const menus = [
    {
      name: 'Home',
      path: '/',
      icon: <HiHome />,
    },
    {
      name: 'Products',
      path: '/products',
      icon: <HiOutlineShoppingBag />,
    },
  ];

  const navStyle = 'flex items-center gap-2 text-gray-700 hover:text-blue-600';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl bg-white/60 border-b">
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold">
            OXI<span className="text-gray-400">STYLE</span>
          </Link>
          {/* for big display */}
          <nav className="hidden md:flex items-center gap-8 dmsans">
            {menus.map((menu) => (
              <Link key={menu.path} to={menu.path} className={navStyle}>
                {menu.icon}
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* here is the cart section in right site  */}
          <div className="flex items-center gap-5">
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-10 h-10 border rounded-full"
            >
              <FaShoppingCart />
<Cart/>
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {`${cart.length}`}
              </span>
            </Link>

            {/* just for mobile device ..and full responsive */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <FaTimes className="hover:cursor-pointer hover:text-red-500" />
              ) : (
                <FaBars className="hover:cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden flex flex-col gap-5 py-5 border-t dmsans">
            {menus.map((menu) => (
              <Link
                key={menu.path}
                to={menu.path}
                className={navStyle}
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

