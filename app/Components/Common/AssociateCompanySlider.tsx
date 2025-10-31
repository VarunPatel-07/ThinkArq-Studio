"use client";
import React from "react";
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

  // console.log(images);
  return (
    <div className="pb-5 overflow-hidden">
      <div className="flex w-[100%] animate-marquee">
        {Array?.from({ length: 5 })?.map(() =>
          images.map((logo, i) => (
            <div className="flex items-center justify-center w-48 h-24" key={i}>
              <picture>
                <img src={logo?.src} alt={logo?.alt} />
              </picture>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AssociateCompanySlider;
