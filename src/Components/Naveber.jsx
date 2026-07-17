// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
// import { HiHome, HiOutlineShoppingBag } from 'react-icons/hi2';
// import { CartContext } from '../context/CartContext';
// import Cart from '../pages/Cart';

// const Naveber = () => {
//   const [open, setOpen] = useState(false);
//   const { cart } = useContext(CartContext);
//   // All menu items
//   const menus = [
//     {
//       name: 'Home',
//       path: '/',
//       icon: <HiHome />,
//     },
//     {
//       name: 'Products',
//       path: '/products',
//       icon: <HiOutlineShoppingBag />,
//     },
//   ];

//   const navStyle = 'flex items-center gap-2 text-gray-700 hover:text-blue-600';

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur-3xl bg-white/60 border-b">
//       <div className="max-w-[90%] mx-auto">
//         <div className="flex items-center justify-between h-20">
//           <Link to="/" className="text-3xl font-bold">
//             OXI<span className="text-gray-400">STYLE</span>
//           </Link>
//           {/* for big display */}
//           <nav className="hidden md:flex items-center gap-8 dmsans">
//             {menus.map((menu) => (
//               <Link key={menu.path} to={menu.path} className={navStyle}>
//                 {menu.icon}
//                 {menu.name}
//               </Link>
//             ))}
//           </nav>

//           {/* here is the cart section in right site  */}
//           <div className="flex items-center gap-5">
//             <Link
//               to="/cart"
//               className="relative flex items-center justify-center w-10 h-10 border rounded-full"
//             >
//               <FaShoppingCart />
// <Cart/>
//               <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//                 {`${cart.length}`}
//               </span>
//             </Link>

//             {/* just for mobile device ..and full responsive */}
//             <button
//               className="md:hidden text-2xl"
//               onClick={() => setOpen(!open)}
//             >
//               {open ? (
//                 <FaTimes className="hover:cursor-pointer hover:text-red-500" />
//               ) : (
//                 <FaBars className="hover:cursor-pointer" />
//               )}
//             </button>
//           </div>
//         </div>

//         {open && (
//           <nav className="md:hidden flex flex-col gap-5 py-5 border-t dmsans">
//             {menus.map((menu) => (
//               <Link
//                 key={menu.path}
//                 to={menu.path}
//                 className={navStyle}
//                 onClick={() => setOpen(false)}
//               >
//                 {menu.icon}
//                 {menu.name}
//               </Link>
//             ))}
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Naveber;


import { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { HiHome, HiOutlineShoppingBag } from 'react-icons/hi2';
import { CartContext } from '../context/CartContext';
import Cart from '../pages/Cart';

const Naveber = () => {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);
  const cartRef = useRef(null);

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

  const navStyle =
    'flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold flex items-center gap-1">
            OXI<span className="text-blue-500">STYLE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 dmsans">
            {menus.map((menu) => (
              <Link key={menu.path} to={menu.path} className={navStyle}>
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
                className="relative flex items-center justify-center w-11 h-11 border border-gray-300 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaShoppingCart className="text-lg text-gray-700" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                  {cart.length}
                </span>
              </button>

              {/* dropdown - 50% width all devices, full screen height */}
              {showCart && (
                <div className="fixed right-0 top-0 w-1/2 h-screen bg-white shadow-2xl border-l border-gray-200 z-50 overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold arbutus-slab">
                        Your Cart
                      </h2>
                      <button
                        onClick={() => setShowCart(false)}
                        className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                      >
                        <FaTimes className="text-xl" />
                      </button>
                    </div>
                    <Cart onClose={() => setShowCart(false)} />
                  </div>
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
