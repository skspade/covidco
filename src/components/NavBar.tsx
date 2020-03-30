import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-center">
        <li className='mx-2'>
          <Link to="/table">Home</Link>
        </li>
        <li className='mx-2'>
          <Link to="/company-form">Company Form</Link>
        </li>
        <li className='mx-2'>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
