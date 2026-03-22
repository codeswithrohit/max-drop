"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useRouter } from "next/navigation";

export default function Header({ setSidebarOpen }) {
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef();

  const cartItems = [
    {
      id: 1,
      title: "FILET MIGN",
      price: 1202,
      qty: 1,
      image: "/product1.jpg",
    },
    {
      id: 2,
      title: "CANON EOS 5D",
      price: 60,
      qty: 1,
      image: "/product2.jpg",
    },
  ];

  useEffect(() => {
    function handleClick(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

 

  return (
    <div className="w-full text-white relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-12 px-4 bg-[#222]">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* SEARCH */}
        <div className="flex items-center bg-white text-black rounded overflow-hidden w-full md:w-[40%] mx-3">
          <select className="px-2 py-2 outline-none text-sm hidden md:block">
            <option>All Category</option>
          </select>

          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-2 py-2 outline-none text-sm"
          />

          <button className="bg-red-500 px-3 py-2 text-white">
            <FaSearch />
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center  gap-4 text-sm relative">
            <div flex className="flex items-center gap-1 cursor-pointer border px-2 py-1 rounded-xl text-white" >
          <FaUser className="cursor-pointer text-white" />
            Login

            </div>
          {/* CART */}
          <div className="relative" ref={cartRef}>
            <div
             onClick={() => setCartOpen(true)}
            className=" flex items-center gap-1 border py-1 px-2 rounded-xl text-white justify-center cursor-pointer">
            <button>
              <FaShoppingCart className="cursor-pointer" />
            </button>
               Cart
            </div>

            {/* ================= DESKTOP DROPDOWN ================= */}
            {cartOpen && (
              <div className="hidden md:block absolute right-0 mt-3 w-80 bg-gray-100 text-black shadow-lg border z-50">
                <CartContent
                  cartItems={cartItems}
                  subTotal={subTotal}
                  close={() => setCartOpen(false)}
                />
              </div>
            )}

            {/* ================= MOBILE SLIDE PANEL ================= */}
            <div
              className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white text-black z-50 transform transition-transform duration-300 md:hidden ${
                cartOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-semibold">MY CART</h3>
                <FaTimes
                  className="cursor-pointer"
                  onClick={() => setCartOpen(false)}
                />
              </div>

              <CartContent
                cartItems={cartItems}
                subTotal={subTotal}
                close={() => setCartOpen(false)}
              />
            </div>

            {/* BACKDROP */}
            {cartOpen && (
              <div
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={() => setCartOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= CART CONTENT COMPONENT ================= */
function CartContent({ cartItems, subTotal, close }) {
    const router = useRouter();
  return (
    <>
      {/* ITEMS */}
      <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-3"
          >
            <div className="flex gap-3 items-center">
              <img
                src={item.image}
                className="w-12 h-12 object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold">{item.title}</p>
                <p>
                  x{item.qty} ${item.price}
                </p>
              </div>
            </div>

            <FaTimes className="cursor-pointer text-gray-600" />
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="px-4 py-3 border-t text-sm space-y-2">
        <div className="flex justify-between">
          <span>SUB-TOTAL</span>
          <span>${subTotal}</span>
        </div>

        <div className="flex justify-between">
          <span>ECO TAX</span>
          <span>$2.00</span>
        </div>

        <div className="flex justify-between">
          <span>VAT (20%)</span>
          <span>$200.00</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>TOTAL</span>
          <span>${subTotal + 202}</span>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 p-4">
        <button
         onClick={() => router.push("/cart/Cart-page")}
        className="flex-1 bg-gray-700 text-white py-2 text-sm">
          VIEW CART
        </button>
        <button
          onClick={() => router.push("/cart/Check-out")}
        className="flex-1 bg-gray-700 text-white py-2 text-sm">
          CHECKOUT
        </button>
      </div>
    </>
  );
}