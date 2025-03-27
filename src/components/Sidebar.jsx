import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to="/products">get All Products</Link>
        </li>
        <li>
          <a href="#">get All Categories</a>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
