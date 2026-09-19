"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Trust = () => {
  const sliderImages = [
    {
      id: 3,
      src: "/test3.png",
      alt: "Hospital dustbin",
    },
    {
      id: 4,
      src: "/test1.png",
      alt: "Plastic dustbin",
    },
    {
      id: 5,
      src: "/test2.png",
      alt: "Plastic pedal bin",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div>

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#25834B]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25834B]">
                Since 1988
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#171717] sm:text-4xl">
              A trusted manufacturer of
              <span className="text-[#25834B]">
                {" "}
                plastic waste management solutions.
              </span>
            </h2>

            {/* Content */}
            <div className="mt-6 max-w-xl space-y-4 text-sm leading-6 text-[#666666] sm:text-base">

              <p>
                Established in 1988, Sangam Plastic Industries Private Limited
                has been a manufacturer, exporter, and trader of plastic
                dustbins, hospital dustbins, plastic pedal bins and other
                waste management products.
              </p>

              <p>
                Based in Delhi, India, our production facilities are equipped
                to support bulk requirements while maintaining consistent
                quality standards.
              </p>

              <p>
                Over the years, we have supplied products to households,
                businesses, hospitals and institutions across India and
                abroad, with a focus on durability, hygiene and practical
                design.
              </p>

            </div>

            {/* Bottom Information */}
            <div className="mt-8 grid max-w-xl grid-cols-2 border-t border-[#E5E5E5] sm:grid-cols-3">

              <div className="border-r border-[#E5E5E5] py-5 pr-4">
                <p className="text-xl font-semibold text-[#171717]">
                  1988
                </p>
                <p className="mt-1 text-xs text-[#777777]">
                  Established
                </p>
              </div>

              <div className="border-r border-[#E5E5E5] px-4 py-5">
                <p className="text-xl font-semibold text-[#171717]">
                  Delhi
                </p>
                <p className="mt-1 text-xs text-[#777777]">
                  Based in India
                </p>
              </div>

              <div className="col-span-2 py-5 pl-0 sm:col-span-1 sm:pl-4">
                <p className="text-xl font-semibold text-[#171717]">
                  Bulk
                </p>
                <p className="mt-1 text-xs text-[#777777]">
                  Manufacturing
                </p>
              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT IMAGE SLIDER
          ================================================= */}
          <div className="relative">

            {/* Subtle Background */}
            <div className="absolute -inset-3 rounded-2xl bg-[#F5F8F6]" />

            <div className="relative overflow-hidden rounded-xl">

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop
                speed={600}
                className="about-swiper"
              >
                {sliderImages.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F7F5]">

                      <Image
                        src={item.src}
                        width={900}
                        height={675}
                        alt={item.alt}
                        className="h-full w-full object-cover"
                        priority={item.id === 3}
                      />

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>

            {/* Image Caption */}
            <div className="absolute bottom-4 left-4 z-20 rounded-lg bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#25834B]">
                Sangam Plastic
              </p>

              <p className="mt-1 text-xs font-medium text-[#222222]">
                Plastic Waste Management
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* =================================================
          SWIPER NAVIGATION STYLE
      ================================================= */}
      <style jsx global>{`
        .about-swiper .swiper-button-prev,
        .about-swiper .swiper-button-next {
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.95);
          color: #25834b;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .about-swiper .swiper-button-prev:after,
        .about-swiper .swiper-button-next:after {
          font-size: 12px;
          font-weight: 600;
        }

        .about-swiper .swiper-button-prev {
          left: 16px;
        }

        .about-swiper .swiper-button-next {
          right: 16px;
        }

        @media (max-width: 640px) {
          .about-swiper .swiper-button-prev,
          .about-swiper .swiper-button-next {
            width: 30px;
            height: 30px;
          }

          .about-swiper .swiper-button-prev:after,
          .about-swiper .swiper-button-next:after {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Trust;