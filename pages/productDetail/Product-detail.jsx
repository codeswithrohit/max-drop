"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState("/product1.jpg");

  const thumbnails = [
    "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/1.png",
    "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/f9.jpg",
    "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/1.png",
    "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/1.png",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT THUMBNAILS */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {thumbnails.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                className="w-16 h-16 border cursor-pointer object-cover hover:border-red-500"
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="border p-4 flex-1 flex items-center justify-center">
            <img src={mainImage} className="h-80 object-contain" />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="col-span-2">
          <h2 className="text-xl font-semibold">Comas samer rumas</h2>

          {/* RATING */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <div className="flex text-yellow-400">
              {Array(5).fill().map((_, i) => <FaStar key={i} />)}
            </div>
            <span>0 reviews | Write a review</span>
          </div>

          {/* PRICE */}
          <div className="mt-3">
            <span className="text-red-500 text-2xl font-bold">$114.00</span>
            <span className="line-through text-gray-400 ml-2">$122.00</span>
          </div>

          {/* INFO BOX */}
          <div className="border-l-4 border-red-500 pl-4 mt-4 text-sm text-gray-600 space-y-1">
            <p>Ex Tax: $60.00</p>
            <p>Brand: Apple</p>
            <p>Product Code: Product 15</p>
            <p>Reward Points: 100</p>
          </div>

          {/* OPTIONS */}
          <div className="mt-4">
            <p className="font-semibold mb-2">Available Options</p>

            <div className="flex gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-600 border cursor-pointer"></div>
              <div className="w-6 h-6 bg-brown-600 border cursor-pointer"></div>
              <div className="w-6 h-6 bg-green-600 border cursor-pointer"></div>
            </div>

            {/* QTY */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                defaultValue={1}
                className="w-16 border px-2 py-1"
              />

              <button className="bg-gray-700 text-white px-4 py-2 text-sm">
                ADD TO CART
              </button>

              <button className="border px-3 py-2">❤</button>
              <button className="border px-3 py-2">⇄</button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        
        {/* RELATED PRODUCTS */}
        <div className="border">
          <div className="bg-red-500 text-white px-3 py-2 font-semibold">
            RELATED PRODUCTS
          </div>

          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-2 p-3 border-b">
              <img src="https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/f9.jpg" className="w-12 h-12 object-cover" />
              <div className="text-sm">
                <p>Product Name</p>
                <p className="text-red-500">$94.00</p>
              </div>
            </div>
          ))}
        </div>

        {/* TABS SECTION */}
        <div className="lg:col-span-3">
          
          {/* TAB HEADER */}
          <div className="flex border-b">
            {["description", "reviews", "tags", "custom"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm ${
                  activeTab === tab
                    ? "bg-red-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="border p-4 text-sm text-gray-600">
            {activeTab === "description" && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ul className="mt-3 space-y-1">
                  <li>✔ 100% Brand New</li>
                  <li>✔ Fashion Cute Mini Finger Ring</li>
                  <li>✔ Simple and easy</li>
                </ul>
              </div>
            )}

            {activeTab === "reviews" && <p>No reviews yet</p>}
            {activeTab === "tags" && <p>No tags</p>}
            {activeTab === "custom" && <p>Custom content</p>}
          </div>

          {/* UPSELL PRODUCTS */}
          <div className="mt-6">
            <div className="bg-red-500 text-white px-3 py-2 font-semibold inline-block">
              UPSELL PRODUCTS
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border p-3 text-center">
                  <img
                    src="https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/f9.jpg"
                    className="h-24 mx-auto object-contain"
                  />
                  <p className="text-sm mt-2">Apple Cinema 30"</p>

                  <div className="flex justify-center text-yellow-400 text-sm">
                    {Array(5).fill().map((_, i) => <FaStar key={i} />)}
                  </div>

                  <p className="text-red-500 font-bold mt-1">$74.00</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}