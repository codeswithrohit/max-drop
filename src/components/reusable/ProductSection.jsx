"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ProductSection({
  title,
  themeColor,
  banner,
  categories = [],
  products = [],
  featuredProduct,
}) {
  const [filter, setFilter] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (filter === "price") return a.price - b.price;
    if (filter === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto mt-8 ">

      {/* HEADER */}
      <div className="flex flex-row justify-between items-start sm:items-center border-1 border-gray-300 pr-2 gap-2">
        
        <div 
          style={{ backgroundColor: themeColor }}
          className="text-white px-4 py-2 font-bold clip-ribbon flex items-center gap-2 flex-"
        >
         {title}
        </div>

        {/* ✅ DESKTOP BUTTONS */}
        <div className="hidden sm:flex flex-wrap gap-3 text-sm text-gray-500">
          <button onClick={() => setFilter("default")}>Sale</button>
          <button onClick={() => setFilter("default")}>Date Add</button>
          <button onClick={() => setFilter("rating")}>Rating</button>
          <button onClick={() => setFilter("default")}>Quantity</button>
          <button onClick={() => setFilter("price")}>Price</button>
        </div>

        {/* ✅ MOBILE DROPDOWN */}
        <div className="sm:hidden w-full">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="w-full border border-gray-300 px-2 py-2 text-sm outline-none"
          >
            <option value="default">Sale</option>
            <option value="default">Date Add</option>
            <option value="rating">Rating</option>
            <option value="default">Quantity</option>
            <option value="price">Price</option>
          </select>
        </div>

      </div>

      {/* COLOR LINE */}
      <div
        style={{ backgroundColor: themeColor }}
        className="w-full h-1 -mt-1"
      />

      {/* TOP BANNER */}
      <div className="grid grid-cols-1 lg:grid-cols-6 items-stretch mt-3 border-1 border-gray-300">

        {/* LEFT */}
        <div className="h-full hidden lg:block">
          <img
            src={banner.left}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER */}
        <div className="lg:col-span-4 h-full">
          <img
            src={banner.center}
            className="w-full h-30 sm:h-50 md:h-73 object-cover"
          />
        </div>

        {/* FEATURED */}
        <div className="border-l flex flex-col justify-between p-3 h-full hidden md:flex">
          <span className="bg-orange-500 text-white text-xs px-2 py-0.5 w-fit">
            SALE
          </span>

          <img
            src={featuredProduct.image}
            className="h-32 mx-auto object-contain"
          />

          <div className="flex text-yellow-400 justify-center mt-2">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-center mt-2 text-sm">
            {featuredProduct.title}
          </p>

          <div className="text-center mt-1">
            <span className="text-red-500 font-bold">
              ₹{featuredProduct.price}
            </span>
            <span className="line-through text-gray-400 ml-2">
              ₹{featuredProduct.oldPrice}
            </span>
          </div>
        </div>
      </div>

      {/* PRODUCTS + CATEGORY */}
      <div className="grid grid-cols-1 lg:grid-cols-5 border items-stretch">

        {/* CATEGORY */}
        <div className="p-4 border-r border-gray-300 h-full">
          <h3 className="font-bold mb-3">HOT CATEGORIES</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            {categories.map((cat, i) => (
              <li key={i} className="cursor-pointer hover:text-black">
                ▶ {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {sortedProducts.map((item) => (
            <div
              key={item.id}
              className="border-1 border-gray-300 p-3 relative flex flex-col justify-between h-full"
            >
              {/* BADGES */}
              {item.sale && (
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2">
                  SALE
                </span>
              )}

              {item.isNew && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2">
                  NEW
                </span>
              )}

              {/* IMAGE */}
              <img
                src={item.image}
                className="h-35 mx-auto object-contain"
              />

              {/* RATING */}
              <div className="flex justify-center text-yellow-400 mt-2">
                {Array(item.rating).fill().map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* TITLE */}
              <p className="text-sm mt-1 text-center">
                {item.title}
              </p>

              {/* PRICE */}
              <div className="mt-1 text-center">
                <span className="text-red-500 font-bold">
                  ₹{item.price}
                </span>
                <span className="line-through text-gray-400 ml-2 text-sm">
                  ₹{item.oldPrice}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}