
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import Enquiry from "@/components/Enquiry";

export default function Hero2() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const backgroundImages = [
    "/hero/newhos.jpeg",
    "/hero/park2.jpeg",
    "/hero/bul.png",
  ];

  return (
    <>
      <section className="relative mt-16 sm:mt-20 min-h-0 lg:min-h-[620px] overflow-hidden">

        {/* BACKGROUND SWIPER */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1200}
            loop={true}
            allowTouchMove={false}
            className="h-full w-full"
          >
            {backgroundImages.map((image, index) => (
              <SwiperSlide key={index} className="h-full w-full">
                <div
                  className="h-full min-h-full w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("${image}")`,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-0 w-full items-center px-4 py-8 sm:px-6 sm:py-12 lg:min-h-[620px] lg:px-20 lg:py-5">

          <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-10">

            {/* LEFT CONTENT */}
            <div className="relative z-10 mx-auto w-full max-w-xl lg:mx-0">

              {/* BADGE */}
              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-2 shadow-sm backdrop-blur-md sm:mb-6 sm:px-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#63D58C]" />

                <span className="text-xs font-medium text-[#13513e] sm:text-sm">
                  Trusted Plastic Dustbin Manufacturer
                </span>
              </div>

              {/* HEADING */}
              <h1 className="text-[36px] font-bold leading-[1.08] tracking-tight text-[#13513e] sm:text-5xl lg:text-5xl xl:text-6xl">
                Smart Waste
                <br className="hidden sm:block" />
                <span className="sm:ml-2">
                  Management
                </span>
                <br />
                Starts Here.
              </h1>

              {/* STATS */}
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/30 pt-4 sm:mt-6 sm:gap-x-8 sm:pt-5">

                <div>
                  <p className="text-lg font-bold text-[#13513e] sm:text-xl">
                    100%
                  </p>
                  <p className="mt-1 text-[11px] text-[#13513e] sm:text-xs">
                    Quality Focused
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-[#13513e] sm:text-xl">
                    Durable
                  </p>
                  <p className="mt-1 text-[11px] text-[#13513e] sm:text-xs">
                    Built for Daily Use
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-[#13513e] sm:text-xl">
                    Bulk
                  </p>
                  <p className="mt-1 text-[11px] text-[#13513e] sm:text-xs">
                    Manufacturing
                  </p>
                </div>

              </div>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-lg text-sm leading-6 text-black sm:mt-6 sm:text-lg sm:leading-7">
                Durable, hygienic and thoughtfully designed plastic dustbins
                manufactured for homes, offices, commercial spaces and
                industrial applications.
              </p>

              {/* BUTTONS */}
              <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">

                <Link
                  href="/products"
                  className="rounded-full bg-[#23834A] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#1B6D3D] sm:px-7 sm:py-3.5 sm:text-sm"
                >
                  Explore Products
                </Link>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="rounded-full border border-[#13513e] bg-white/20 px-5 py-3 text-xs font-semibold text-[#13513e] backdrop-blur-sm transition hover:bg-white hover:text-[#24382C] sm:px-7 sm:py-3.5 sm:text-sm"
                >
                  Get a Quote
                </button>

              </div>
            </div>

            {/* RIGHT PRODUCT AREA */}
            <div className="relative mx-auto flex min-h-[350px] w-full max-w-[480px] items-center justify-center overflow-hidden sm:min-h-[480px] lg:min-h-[540px]">

              {/* SOFT CIRCLE */}
              <div
                className="
                  absolute
                  h-[270px] w-[270px]
                  rounded-full
                  bg-[#E2F0E7]/90
                  sm:h-[400px] sm:w-[400px]
                  lg:h-[430px] lg:w-[430px]
                  xl:h-[500px] xl:w-[500px]
                "
              />

              {/* DECORATIVE RING */}
              <div
                className="
                  absolute
                  h-[320px] w-[320px]
                  rounded-full
                  border border-white/50
                  sm:h-[450px] sm:w-[450px]
                  lg:h-[500px] lg:w-[500px]
                  xl:h-[570px] xl:w-[570px]
                "
              />

              {/* PRODUCT IMAGE */}
              <div
                className="
                  relative z-20
                  flex
                  h-[340px] w-[90%]
                  items-center justify-center
                  transition-all duration-700
                  hover:-translate-y-3
                  sm:h-[470px] sm:w-[440px]
                  lg:h-[500px] lg:w-[480px]
                  xl:h-[540px] xl:w-[520px]
                "
              >
                <Image
                  src="/hero2323.webp"
                  alt="Plastic Dustbin"
                  width={900}
                  height={1000}
                  priority
                  unoptimized
                  className="
                    h-full w-full
                    object-contain
                    drop-shadow-[0_30px_30px_rgba(30,60,40,0.20)]
                  "
                />
              </div>

              {/* BOTTOM INFO CARD */}
              <div
                className="
                  absolute bottom-2 left-1/2 z-40
                  flex max-w-[95%]
                  -translate-x-1/2
                  items-center gap-2
                  whitespace-nowrap
                  rounded-xl
                  border border-white/80
                  bg-white/90
                  px-3 py-2
                  shadow-xl
                  backdrop-blur-md
                  sm:bottom-4 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-3
                "
              >

                {/* ICON */}
                <div
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg bg-[#E5F3E9]
                    sm:h-10 sm:w-10 sm:rounded-xl
                  "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-[#23834A] sm:h-5 sm:w-5"
                  >
                    <path d="M12 3v18" />
                    <path d="M3 12h18" />
                    <path d="M5 7h14" />
                    <path d="M5 17h14" />
                  </svg>
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-xs font-semibold text-[#1B2921] sm:text-sm">
                    Built for Every Space
                  </p>

                  <p className="text-[9px] text-[#78847D] sm:text-xs">
                    Home • Office • Commercial • Industrial
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY POPUP */}
      {isFormOpen && (
        <Enquiry
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}
