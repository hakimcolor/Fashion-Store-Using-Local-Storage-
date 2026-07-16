// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const Naveber = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
//       <div className="max-w-[90%] mx-auto px-5">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo and Project icon  */}
//           <Link to="/" className="text-3xl font-black tracking-wide">
//             OXI<span className="text-gray-400">STYLE</span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-8 font-semibold text-xl">
//             <NavLink
//               to="/"
//               className="text-gray-700 hover:text-blue-500 transition-colors"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/products"
//               className="text-gray-700 hover:text-blue-500 transition-colors"
//             >
//               Products
//             </NavLink>
//             <NavLink
//               to="/cart"
//               className="text-gray-700 hover:text-blue-500 transition-colors"
//             >
//               Cart
//             </NavLink>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Naveber;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { HiHome, HiOutlineShoppingBag } from 'react-icons/hi2';

const Naveber = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-[90%] mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo and brand name here */}
          <Link to="/" className="text-3xl font-black tracking-wide">
            OXI<span className="text-gray-400">STYLE</span>
          </Link>

          {/* nave ber all navation*/}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-500'
                }`
              }
            >
              <HiHome className="text-xl" />
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-500'
                }`
              }
            >
              <HiOutlineShoppingBag className="text-xl" />
              Products
            </NavLink>
          </nav>

         
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white border-gray-300'
              }`
            }
          >
            <FaShoppingCart className="text-xl" />

           
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              0
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Naveber;
