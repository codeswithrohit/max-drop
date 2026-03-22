"use client";

import { useRouter } from "next/navigation";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    title: "Sende cuisei in..",
    price: 82.4,
    oldPrice: 122,
    image: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/1.png",
    sale: true,
    isNew: false,
  },
  {
    id: 2,
    title: "Juren tima chuk..",
    price: 82.4,
    oldPrice: 122,
    image: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/1.png",
    sale: true,
    isNew: true,
  },
  {
    id: 3,
    title: "Caras tima chuk..",
    price: 82.4,
    oldPrice: 122,
    image: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/e6.jpg",
    sale: true,
    isNew: false,
  },
  {
    id: 4,
    title: "Caras tima chuk..",
    price: 82.4,
    oldPrice: 122,
    image: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/e14.jpg",
    sale: true,
    isNew: false,
  },
  {
    id: 5,
    title: "Extra Product",
    price: 82.4,
    oldPrice: 122,
    image: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/19.jpg",
    sale: true,
    isNew: false,
  },
];

const bestSellers = [
  {
    id: 1,
    title: "Caras Cursus Nulla",
    price: 122,
    image: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/e11.jpg",
  },
  {
    id: 2,
    title: "Doner Spareribs",
    price: 122,
    image: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/e4_2.jpg",
  },
  {
    id: 3,
    title: "Bikum Masen Dum..",
    price: 122,
    image: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/shop/product/e14.jpg",
  },
];

const Stars = () => (
  <div className="flex text-yellow-400 text-sm">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfAlt />
    <FaRegStar />
  </div>
);

const CountdownBox = () => (
  <div className="flex gap-1 mt-3">
    {["DAY", "HOUR", "MIN", "SEC"].map((item, i) => (
      <div
        key={i}
        className="bg-gray-300 text-center px-2 py-1 text-xs font-semibold w-12"
      >
        <div className="text-sm">00</div>
        <div className="text-[10px]">{item}</div>
      </div>
    ))}
  </div>
);


export default function HotDealsSection() {
    const router = useRouter();
  return (
    <div className=" py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-3 bg-white px-5 md:px-0">
          
          {/* HEADER */}
          <div className="flex items-center justify-between border-b-2 border-red-500  mb-4 ">
            <div className="bg-red-500 text-white px-4 py-1 font-bold clip-ribbon">
              HOT DEALS
            </div>

            <div className="flex gap-2">
              <button className="swiper-prev p-1 border">
                <FiChevronLeft />
              </button>
              <button className="swiper-next p-1 border">
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((item) => (
              <SwiperSlide
                onClick={() => router.push("/productDetail/Product-detail")}
              key={item.id}>
                <div className="border-1 border-gray-300 p-3 relative bg-white">
                  
                  {/* BADGES */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    {item.sale && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-0.5">
                        SALE
                      </span>
                    )}
                    {item.isNew && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* IMAGE */}
                  <div className="flex justify-center h-36">
                    <img
                      src={item.image}
                      alt=""
                      width={170}
                      height={170}
                      className="object-contain"
                    />
                  </div>

                  <CountdownBox />

                  <div className="mt-2">
                    <Stars />
                  </div>

                  <p className="text-sm mt-1 text-gray-700">
                    {item.title}
                  </p>

                  <div className="flex gap-2 items-center mt-1">
                    <span className="text-red-500 font-bold">
                      ₹{item.price}
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      ₹{item.oldPrice}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white p-4 h-full">
          
          <div className="flex items-center justify-between border-b-2 border-red-500  mb-4">
            <div className="bg-red-500 text-white px-4 py-1 font-bold clip-ribbon">
              BEST SELLERS
            </div>

            <div className="flex gap-2">
              <FiChevronLeft />
              <FiChevronRight />
            </div>
          </div>

          <div className="border-1 border-gray-300">
            {bestSellers.map((item) => (
              <div key={item.id}
                 onClick={() => router.push("/productDetail/Product-detail")}
              className="flex gap-3 border-b border-gray-300 py-2 px-2 ">
                
                <img
                  src={item.image}
                  alt=""
                  width={80}
                  height={80}
                  className="object-contain"
                />

                <div>
                  <Stars />
                  <p className="text-sm text-gray-700">
                    {item.title}
                  </p>
                  <p className="text-red-500 font-semibold">
                    ₹{item.price}.00
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}