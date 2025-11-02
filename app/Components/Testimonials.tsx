"use client";
import React, { useRef } from "react";
import TestimonialsCard from "./Common/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import CommanSectionHeader from "./Common/CommanSectionHeader";

function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full h-full">
      <div className="flex items-start md:items-center gap-4 justify-between think-arq-container flex-col md:flex-row">
        <CommanSectionHeader
          title="Testimonials"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <div className="flex items-center justify-end gap-5">
          <button
            ref={prevRef}
            aria-label="Arrow Left"
            className="min-w-12 min-h-12 rounded-full border border-[#191A23] hover:bg-[#191A23] hover:text-white cursor-pointer  text-[#191A23] flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#191A23]  disabled:cursor-not-allowed">
            <HiOutlineArrowLeft className="min-w-7 min-h-7" aria-hidden="true" />
          </button>

          <button
            ref={nextRef}
            aria-label="Arrow Right"
            className="min-w-12 min-h-12 rounded-full border border-[#191A23] hover:bg-[#191A23] hover:text-white cursor-pointer  text-[#191A23] flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#191A23] disabled:cursor-not-allowed">
            <HiOutlineArrowRight className="min-w-7 min-h-7" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="w-full h-full pt-6 md:pt-10 lg:pt-14 xl:pt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-5 h-5 mx-2.5 bg-gray-300 rounded-full inline-block transition-all duration-300">
        <img src="/slider-pagination.svg" alt="Slider Pagination Icon" width="20" height="20" />
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
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            640: {
              // Small tablets
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              // Tablets
              slidesPerView: 1.8,
              spaceBetween: 25,
            },
            1024: {
              // Small laptops
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
          }}
          className="mySwiper">
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index} className="px-4">
              <TestimonialsCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
