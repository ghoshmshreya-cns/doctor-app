import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="  w-full z-50 bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <a className="font-bold text-xl">DocTorApp</a>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">

          <Link to="/">
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Home</button>
          </Link>
          <Link to="/about">
          <button className="hover:bg-gray-700 px-3 py-2 rounded">About</button>
          </Link>
          <Link to="/contact">
            <button className="hover:bg-gray-700 px-3 py-2 rounded">Contact</button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col md:hidden mt-2 space-y-2">

          <Link to="/">
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Home</button>
          </Link>
          <Link to="/about">
            <button className="hover:bg-gray-700 px-3 py-2 rounded">About</button>
          </Link>
          <Link to="/contact">
            <button className="hover:bg-gray-700 px-3 py-2 rounded">Contact</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
