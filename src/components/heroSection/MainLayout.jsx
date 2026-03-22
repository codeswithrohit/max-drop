"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import PromoGrid from "./PromoGrid";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="">
      {/* Header */}
      <Header setSidebarOpen={setSidebarOpen} />

      <div className="max-w-6xl mx-auto mt-4 px-0">
        <div className="flex md:gap-4">
          {/* ✅ Desktop Sidebar */}
          <div className="hidden lg:block w-[260px] -mt-16">
            <Sidebar />
          </div>

          {/* ✅ Mobile Sidebar ONLY */}
          <div className="md:hidden">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>

          {/* Carousel */}
          <div className="flex-1">
            <Carousel />
          </div>
        </div>
        <div className="my-5 md:my-8">
          <PromoGrid />
        </div>
      </div>
    </div>
  );
}
