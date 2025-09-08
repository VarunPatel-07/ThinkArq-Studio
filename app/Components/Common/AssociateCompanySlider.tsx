"use client";
import path from "path";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function AssociateCompanySlider() {
  const images = [
    { src: "/associates-logos/amazon.png", alt: "amazon" },

    { src: "/associates-logos/dribbble.png", alt: "dribbble" },

    { src: "/associates-logos/hubspot.png", alt: "hubspot" },

    { src: "/associates-logos/netflix.png", alt: "netflix" },

    { src: "/associates-logos/notion.png", alt: "notion" },

    { src: "/associates-logos/zoom.png", alt: "zoom" },
    { src: "/associates-logos/hubspot.png", alt: "hubspot" },

    { src: "/associates-logos/netflix.png", alt: "netflix" },

    { src: "/associates-logos/notion.png", alt: "notion" },

    { src: "/associates-logos/zoom.png", alt: "zoom" },
  ];

  console.log(images);
  return (
    <div className="pb-5">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30} 
        slidesPerView="auto" 
        loop={true} 
        speed={1500} 
        autoplay={{
          delay: 0, 
          disableOnInteraction: false, 
        }}
        allowTouchMove={false}
      >
        {images.map((logo, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <div className="flex items-center justify-center w-48 h-24">
              <picture>
                <img src={logo?.src} alt={logo?.alt} />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AssociateCompanySlider;
