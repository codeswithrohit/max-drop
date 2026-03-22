"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(null);
  const router = useRouter();

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "CATEGORIES", badge: "NEW" },
  ];

  return (
    <nav className="w-full bg-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-0 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-black">MAX</span>
          <span className="text-red-500">DROP</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setOpen(index)}
              onMouseLeave={() => setOpen(null)}
              onClick={() => {
                if (item.name === "HOME") {
                  router.push("/");
                }
              }}
            >
              <div className="flex items-center gap-1 hover:text-black text-sm font-bold">
                
                {item.name}

                {/* ❌ HOME ke liye icon remove */}
                {item.name !== "HOME" &&
                  item.name !== "BLOG" &&
                  item.name !== "BUY THEME!" && (
                    <FaChevronDown size={12} />
                  )}
              </div>

              {/* Dropdown */}
              {open === index &&
                item.name !== "HOME" &&
                item.name !== "BLOG" &&
                item.name !== "BUY THEME!" && (
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
    </nav>
  );
}