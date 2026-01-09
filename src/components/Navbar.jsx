import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
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
          <a className="hover:bg-gray-700 px-3 py-2 rounded">Home</a>
          <a className="hover:bg-gray-700 px-3 py-2 rounded">About</a>
          <a className="hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col md:hidden mt-2 space-y-2">
          <a className="hover:bg-gray-700 px-3 py-2 rounded">Home</a>
          <a className="hover:bg-gray-700 px-3 py-2 rounded">About</a>
          <a className="hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
