"use client";

const categories = [
  "AUTOMOTIVE & MOTORCYCLE",
  "ELECTRONIC",
  "SPORTS & OUTDOORS",
  "HEALTH & BEAUTY",
  "SMARTPHONE & TABLETS",
  "FLASHLIGHTS & LAMPS",
  "CAMERA & PHOTO",
  "OUTDOOR & TRAVELING SUPPLIES",
  "TOYS & HOBBIES",
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-[260px] bg-[#2c2c2c] text-white z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="bg-red-500 px-4 py-3 font-semibold">
          CATEGORIES
        </div>

        {/* List */}
        <ul className="text-sm">
          {categories.map((item, i) => (
            <li
              key={i}
              className="px-4 py-3 border-b border-gray-700 hover:bg-gray-800 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}