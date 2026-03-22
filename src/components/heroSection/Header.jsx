"use client";

import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";

export default function Header({ setSidebarOpen }) {
  return (
    <div className="w-full  text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-12 px-4 bg-[#222]">
        {/* LEFT: Hamburger (mobile only) */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
            {/* search box */}
        <div className="flex items-center bg-white text-black rounded overflow-hidden w-full md:w-[50%] mx-3 md:mx-0">
          {/* Select (only md+) */}
          <select className="px-2 py-2 outline-none text-sm hidden md:block">
            <option>All Category</option>
          </select>

          {/* Input */}
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-2 py-2 outline-none text-sm min-w-0"
          />

          {/* Button (always visible) */}
          <button className="bg-red-500 px-3 py-2 text-white flex items-center justify-center shrink-0">
            <FaSearch />
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm">
          <FaUser />
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}
