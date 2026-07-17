// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { TbCurrencyTaka } from 'react-icons/tb';
// import toast from 'react-hot-toast';

// const Cart = () => {
//   const { cart, setCart } = useContext(CartContext);

//   // remove any item click remove button
//   const handleRemove = (id) => {
//     const updateCart = cart.filter((item) => item.id !== id);
//     setCart(updateCart);

//     toast.success('Your cart Remove successfully');
//   };

//   //after deleate or again all calculation or total cost
//   const totalCost = cart.reduce(
//     (total, item) => total + item.quantity * item.price,
//     0
//   );

//   console.log(cart);

//   return (
//     <div className="w-[90%] mx-auto py-10">
//       <h1 className="arbutus-slab text-4xl text-center mb-10">Shopping Cart</h1>

//       {cart.length === 0 ? (
//         <div className="text-center py-20 border rounded-xl shadow">
//           <h2 className="arbutus-slab text-3xl">Your Cart is Empty</h2>
//         </div>
//       ) : (
//         <div className="space-y-8">
//           <div className="space-y-6">
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="border rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row justify-between gap-6"
//               >
//                 {/* leftsite */}
//                 <div className="flex flex-col sm:flex-row gap-6">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-52 h-52 object-cover rounded-xl"
//                   />

//                   <div className="space-y-3">
//                     <h2 className="arbutus-slab text-3xl">{item.name}</h2>

//                     <p className="dmsans">
//                       <span className="font-bold">Category:</span>{' '}
//                       {item.category}
//                     </p>

//                     <p className="dmsans">
//                       <span className="font-bold">Color:</span>{' '}
//                       {item.selectedColor}
//                     </p>

//                     <p className="dmsans">
//                       <span className="font-bold">Size:</span>{' '}
//                       {item.selectedSize}
//                     </p>

//                     <p className="dmsans">
//                       <span className="font-bold">Quantity:</span>{' '}
//                       {item.quantity}
//                     </p>
//                   </div>
//                 </div>

//                 {/* rightsite */}
//                 <div className="flex flex-col justify-between items-start lg:items-end gap-5">
//                   <div className="space-y-3">
//                     <p className="dmsans font-semibold text-xl">
//                       Price : <TbCurrencyTaka className="text-2xl" />{' '}
//                       {item.price}
//                     </p>

//                     <div className="bg-gray-100 border rounded-xl px-6 py-4 shadow text-center">
//                       <p className="dmsans text-lg">
//                         {item.quantity} ×{' '}
//                         <TbCurrencyTaka className="text-2xl" />
//                         {item.price}
//                       </p>

//                       <h2 className="arbutus-slab text-2xl mt-2">
//                         <TbCurrencyTaka className="text-2xl" />{' '}
//                         {item.quantity * item.price}
//                       </h2>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => {
//                       handleRemove(item.id);
//                     }}
//                     className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg dmsans transition cursor-pointer"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* the cart ....total cost */}
//           <div className="flex justify-end">
//             <div className="border shadow-xl rounded-2xl p-8 w-full sm:w-[350px] bg-white">
//               <h1 className="arbutus-slab text-3xl mb-5 text-center">
//                 Total Cost
//               </h1>

//               <h2 className="text-center text-4xl font-bold text-green-600 dmsans">
//                 <TbCurrencyTaka className="text-2xl" /> {totalCost}
//               </h2>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FiPlus, FiMinus } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // remove any item click remove button
  const handleRemove = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);

    toast.success('Your cart Remove successfully');
  };

  // quantity increase click plus button
  const handleIncrease = (id) => {
    const updateCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updateCart);
  };

  // quantity decrease click minus button
  const handleDecrease = (id) => {
    const updateCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updateCart);
  };

  //after deleate or again all calculation or total cost
  const totalCost = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  console.log(cart);

  return (
    <div className="w-[90%] mx-auto py-10">
      <h1 className="arbutus-slab text-4xl text-center mb-10">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 border rounded-xl shadow">
          <h2 className="arbutus-slab text-3xl">Your Cart is Empty</h2>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-3 flex flex-col lg:flex-row justify-between items-center gap-4 bg-white relative overflow-hidden group"
              >
                {/* accent bar */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-amber-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* leftsite */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl shadow-md ring-1 ring-black/5 shrink-0"
                  />

                  <div className="space-y-1.5 text-center sm:text-left">
                    <h2 className="arbutus-slab text-xl md:text-2xl">
                      {item.name}
                    </h2>

                    {/* catagory and color flex */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-3 dmsans text-sm text-gray-600">
                      <p>
                        <span className="font-bold text-gray-800">
                          Category:
                        </span>{' '}
                        {item.category}
                      </p>
                      <p>
                        <span className="font-bold text-gray-800">Color:</span>{' '}
                        {item.selectedColor}
                      </p>
                    </div>

                    {/* size and quantity flex */}
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-3 gap-y-1.5 dmsans text-sm text-gray-600">
                      <p>
                        <span className="font-bold text-gray-800">Size:</span>{' '}
                        {item.selectedSize}
                      </p>

                      {/* quantity plus minus section */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-800">
                          Quantity:
                        </span>

                        <div className="flex items-center gap-3 border border-[#d5d5d5] rounded-full px-2 py-2">
                          <button
                            onClick={() => handleDecrease(item.id)}
                            disabled={item.quantity <= 1}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                          >
                            <FiMinus size={18} strokeWidth={2.5} />
                          </button>

                          <span className="dmsans text-lg font-bold text-gray-800 min-w-[28px] text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => handleIncrease(item.id)}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-green-500 hover:text-white hover:border-green-500 active:scale-95 transition-all duration-300 cursor-pointer"
                          >
                            <FiPlus size={18} strokeWidth={2.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* rightsite : price, total price and remove button flex */}
                <div className="flex flex-row items-center gap-4 shrink-0">
                  <p className="dmsans font-semibold text-sm flex items-center text-gray-700 whitespace-nowrap">
                    Price :
                    <TbCurrencyTaka className="text-lg ml-0.5" />
                    {item.price}
                  </p>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl px-4 py-1.5 shadow-sm flex items-center gap-2 whitespace-nowrap">
                    <p className="dmsans flex items-center text-sm text-gray-600">
                      {item.quantity} ×
                      <TbCurrencyTaka className="text-lg ml-0.5" />
                      {item.price}
                    </p>
                    <h2 className="arbutus-slab text-xl flex items-center text-red-600">
                      <TbCurrencyTaka className="text-xl" />
                      {item.quantity * item.price}
                    </h2>
                  </div>

                  <button
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                    className="bg-red-600 hover:bg-red-700 hover:scale-[1.02] active:scale-95 px-5 py-2 rounded-lg text-white dmsans font-medium transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* the cart ....total cost */}
          <div className="flex justify-end">
            <div className="border border-gray-100 shadow-lg rounded-2xl p-6 w-full sm:w-[340px] bg-gradient-to-br from-white to-gray-50">
              <h1 className="arbutus-slab text-3xl text-center mb-4">
                Total Cost
              </h1>

              <h2 className="flex justify-center items-center text-4xl font-bold text-green-600 dmsans">
                <TbCurrencyTaka className="text-4xl" />
                {totalCost}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;