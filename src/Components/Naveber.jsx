// import React, { useState } from 'react';

// import { Link, NavLink } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
// import { HiHome, HiOutlineShoppingBag } from 'react-icons/hi2';

// const Naveber = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
//       <div className="max-w-[90%] mx-auto px-5">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="text-3xl font-black tracking-wide">
//             OXI<span className="text-gray-400">STYLE</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `flex items-center gap-2 transition-all duration-300 ${
//                   isActive
//                     ? 'text-blue-600'
//                     : 'text-gray-700 hover:text-blue-500'
//                 }`
//               }
//             >
//               <HiHome className="text-xl" />
//               Home
//             </NavLink>

//             <NavLink
//               to="/products"
//               className={({ isActive }) =>
//                 `flex items-center gap-2 transition-all duration-300 ${
//                   isActive
//                     ? 'text-blue-600'
//                     : 'text-gray-700 hover:text-blue-500'
//                 }`
//               }
//             >
//               <HiOutlineShoppingBag className="text-xl" />
//               Products
//             </NavLink>
//           </nav>

//           <div className="flex items-center gap-4">

//             <NavLink
//               to="/cart"
//               className={({ isActive }) =>
//                 `relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ${
//                   isActive
//                     ? 'bg-blue-600 text-white border-blue-600'
//                     : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white border-gray-300'
//                 }`
//               }
//             >
//               <FaShoppingCart className="text-xl" />

//               <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
//                 0
//               </span>
//             </NavLink>

//             <button
//               onClick={() => setOpen(!open)}
//               className="md:hidden text-2xl text-gray-700 cursor-pointer"
//             >
//               {open ? <FaTimes className='text-black hover:text-red-500' /> : <FaBars />}
//             </button>
//           </div>
//         </div>

//    {/* it is just for mobile and small device  */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ${
//             open ? 'max-h-60 py-4' : 'max-h-0'
//           }`}
//         >
//           <nav className="flex flex-col gap-5 font-semibold text-lg border-t pt-5">
//             <NavLink
//               to="/"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `flex items-center gap-2 ${
//                   isActive
//                     ? 'text-blue-600'
//                     : 'text-gray-700 hover:text-blue-500'
//                 }`
//               }
//             >
//               <HiHome className="text-xl" />
//               Home
//             </NavLink>

//             <NavLink
//               to="/products"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `flex items-center gap-2 ${
//                   isActive
//                     ? 'text-blue-600'
//                     : 'text-gray-700 hover:text-blue-500'
//                 }`
//               }
//             >
//               <HiOutlineShoppingBag className="text-xl" />
//               Products
//             </NavLink>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Naveber;

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { HiHome, HiOutlineShoppingBag } from 'react-icons/hi2';
import { CartContext } from '../context/CartContext';



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
