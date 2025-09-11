"use client";
import React, { useRef } from "react";
import TestimonialsCard from "./Common/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between think-arq-container">
        <div className="flex gap-5 items-center justify-start">
          <h2 className="bg-[#B9FF66] font-space-grotesk text-5xl font-semibold p-1.5 pt-1 rounded-md">Team</h2>
          <p className="font-space-grotesk text-lg font-medium text-gray-600 max-w-[580px]">
            Meet the skilled and experienced team behind our <br />
            successful digital marketing strategies
          </p>
        </div>
        <div className="flex items-center justify-end gap-5">
          <button
            ref={prevRef}
            className="min-w-12 min-h-12 rounded-full border border-[#191A23] hover:bg-[#191A23] hover:text-white cursor-pointer  text-[#191A23] flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#191A23]  disabled:cursor-not-allowed">
            <HiOutlineArrowLeft className="min-w-7 min-h-7" />
          </button>

          <button
            ref={nextRef}
            className="min-w-12 min-h-12 rounded-full border border-[#191A23] hover:bg-[#191A23] hover:text-white cursor-pointer  text-[#191A23] flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#191A23] disabled:cursor-not-allowed">
            <HiOutlineArrowRight className="min-w-7 min-h-7" />
          </button>
        </div>
      </div>
      <div className="w-full h-full pt-20">
        <Swiper
          slidesPerView={1.7}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span className="${className} w-5 h-5 mx-2.5 bg-gray-300 rounded-full inline-block transition-all duration-300">
            <img src="/slider-pagination.svg" alt="Slider Pagination Icon" width={20} height={20} />
          </span>`;
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          speed={1500}
          modules={[Pagination, Navigation]}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              // Attach navigation
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }
          }}
          className="mySwiper">
          {Array.from({ length: 10 })?.map((_, index) => (
            <SwiperSlide key={index}>
              <TestimonialsCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
