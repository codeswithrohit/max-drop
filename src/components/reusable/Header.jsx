"use client";

import { useState } from "react";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "CATEGORIES", badge: "NEW" },
  ];

  return (
    <nav className="w-full bg-gray-100 shadow-sm relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">

        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* ✅ HAMBURGER (mobile only) */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMobileMenu(true)}
          >
            <FaBars />
          </button>

          {/* LOGO */}
          <div
            className="text-2xl font-bold tracking-wide cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="text-black">MAX</span>
            <span className="text-red-500">DROP</span>
          </div>
        </div>

        {/* ✅ DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setOpen(index)}
              onMouseLeave={() => setOpen(null)}
              onClick={() => {
                if (item.link) router.push(item.link);
              }}
            >
              <div className="flex items-center gap-1 hover:text-black text-sm font-bold">
                {item.name}

                {item.name !== "HOME" && (
                  <FaChevronDown size={12} />
                )}
              </div>

              {/* DROPDOWN */}
              {open === index && item.name !== "HOME" && (
                <div className="absolute top-8 left-0 bg-white shadow-md rounded-md p-3 min-w-[150px] z-50">
                  <p className="text-sm text-gray-600">Dropdown Item 1</p>
                  <p className="text-sm text-gray-600">Dropdown Item 2</p>
                  <p className="text-sm text-gray-600">Dropdown Item 3</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">MENU</h2>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setMobileMenu(false)}
          />
        </div>

        {/* MENU ITEMS */}
        <ul className="p-4 space-y-4 text-gray-700">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer font-medium"
              onClick={() => {
                if (item.link) router.push(item.link);
                setMobileMenu(false);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* BACKDROP */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenu(false)}
        />
      )}
    </nav>
  );
}