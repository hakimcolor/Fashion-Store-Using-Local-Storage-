import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Naveber = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Project icon  */}
          <Link to="/" className="text-3xl font-black tracking-wide">
            OXI<span className="text-gray-400">STYLE</span>
          </Link>




        </div>
      </div>
    </header>
  );
};

export default Naveber;
