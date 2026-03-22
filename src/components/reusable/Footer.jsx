"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaGooglePlusG,
  FaPinterestP,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* 🔥 TOP NEWSLETTER BAR */}
      <div className="bg-[#2b2b2b] text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-4 gap-4">
          {/* LEFT SOCIAL */}
          <div className="flex gap-6 text-gray-300 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaRss />
            <FaGooglePlusG />
            <FaPinterestP />
          </div>

          {/* CENTER TEXT */}
          <div className="flex items-center gap-3 text-center lg:text-left">
            <FaEnvelope className="text-3xl text-gray-400" />
            <div>
              <p className="font-semibold text-sm">
                SIGN UP FOR OUR NEWSLETTER
              </p>
              <p className="text-xs text-gray-400">
                Duis at ante non massa consectetur iaculis id non tellus
              </p>
            </div>
          </div>

          {/* RIGHT INPUT */}
          <div className="flex w-full lg:w-auto">
            <input
              type="text"
              placeholder="Your email address..."
              className="px-4 py-2 w-full lg:w-72 bg-white text-gray-700 border border-gray-300 outline-none focus:ring-1 focus:ring-red-500"
            />
            <button className="bg-red-500 px-6 py-2 font-semibold text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 MAIN FOOTER */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* LOGO + TEXT */}
          <div>
            <h2 className="text-2xl font-bold">
              MAX<span className="text-red-500">DROP</span>
            </h2>
            <p className="text-gray-600 text-sm mt-4 leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>

          {/* MY ACCOUNT */}
          <div>
            <h3 className="font-bold mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>› Brands</li>
              <li>› Gift Certificates</li>
              <li>› Affiliates</li>
              <li>› Specials</li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>› About Us</li>
              <li>› FAQ</li>
              <li>› Pricing Tables</li>
              <li>› Terms And Conditions</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-bold mb-4">ABOUT US</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                My Company , 42 avenue des Champs
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                Email: sales@yourcompany.com
              </p>

              <p className="flex items-center gap-2">
                <FaPhone className="text-red-500" />
                Phone 1: 0123456789
              </p>
            </div>

            {/* PAYMENT ICONS */}
            <div className="flex gap-2 mt-4">
              <img
                src="https://img.icons8.com/color/48/visa.png"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/paypal.png"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/mastercard.png"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/amex.png"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/discover.png"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="bg-gray-200 py-3 text-center text-sm text-gray-600">
        Maxdrop © 2018 - 2019. MAGENTECH Store. All Rights Reserved.
      </div>

      {/* 🔥 BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-4 bottom-6 bg-gray-600 text-white px-3 py-2 rounded-full text-xs"
      >
        ↑ <br /> Top
      </button>
    </div>
  );
}
