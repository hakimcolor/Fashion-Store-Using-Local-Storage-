import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Naveber = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div>
        <div>
          <Link to="/">
            OXI <span>STYLE</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Naveber;
