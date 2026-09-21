"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero2() {
  const backgroundImages = [
    "/hero/hos2.jpeg",
    "/hero/park.jpeg",
   
  ];

  return (
    <section className="relative mt-20 min-h-[520px] overflow-hidden">
      {/* ================= BACKGROUND SWIPER ================= */}
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
            <SwiperSlide key={index} className="h-[530px] w-full">
              <div
                className="h-full min-h-[420px] w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("${image}")`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= BLACK OVERLAY ================= */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-50 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-5 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 max-w-xl">

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#63D58C]" />

              <span className="text-sm font-medium text-white">
                Trusted Plastic Dustbin Manufacturer
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl whitespace-nowrap font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Smart Waste
            
              <span className="text-green-600"> Management</span>
              <br />
              Starts Here.
            </h1>

           
             <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-5">
              <div>
                <p className="text-xl font-bold text-white">
                  100%
                </p>

                <p className="mt-1 text-xs text-white">
                  Quality Focused
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">
                  Durable
                </p>

                <p className="mt-1 text-xs text-white">
                  Built for Daily Use
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">
                  Bulk
                </p>

                <p className="mt-1 text-xs text-white">
                  Manufacturing
                </p>
              </div>
            </div>

             {/* Description */}
            <p className="mt-6 max-w-lg text-lg text-white">
              Durable, hygienic and thoughtfully designed plastic dustbins
              manufactured for homes, offices, commercial spaces and
              industrial applications.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-[#23834A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#1B6D3D]"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#24382C]"
              >
                Get a Quote
              </Link>
            </div>

            {/* Features */}
           
          </div>

          {/* ================= RIGHT PRODUCT AREA ================= */}
          <div className="relative flex min-h-[540px] items-center justify-center overflow-hidden">

            {/* ================= SOFT CIRCLE ================= */}
            <div
              className="
                absolute
                h-[430px]
                w-[430px]
                rounded-full
                bg-[#E2F0E7]/90
                sm:h-[500px]
                sm:w-[500px]
              "
            />

            {/* ================= DECORATIVE RING ================= */}
            <div
              className="
                absolute
                h-[500px]
                w-[500px]
                rounded-full
                border
                border-white/50
                sm:h-[570px]
                sm:w-[570px]
              "
            />

            {/* ================= PRODUCT ================= */}
            <div
              className="
                relative
                z-20
                flex
                h-[470px]
                w-[90%]
                items-center
                justify-center
                transition-all
                duration-700
                hover:-translate-y-3
                sm:h-[540px]
                sm:w-[520px]
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
                  h-full
                  w-full
                  object-contain
                  drop-shadow-[0_30px_30px_rgba(30,60,40,0.20)]
                "
              />
            </div>

            {/* ================= BOTTOM INFO CARD ================= */}
            <div
              className="
                absolute
                bottom-4
                left-1/2
                z-40
                flex
                -translate-x-1/2
                items-center
                gap-3
                whitespace-nowrap
                rounded-2xl
                border
                border-white/80
                bg-white/90
                px-5
                py-3
                shadow-xl
                backdrop-blur-md
              "
            >

              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#E5F3E9]
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[#23834A]"
                >
                  <path d="M12 3v18" />
                  <path d="M3 12h18" />
                  <path d="M5 7h14" />
                  <path d="M5 17h14" />
                </svg>
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold text-[#1B2921]">
                  Built for Every Space
                </p>

                <p className="text-xs text-[#78847D]">
                  Home • Office • Commercial • Industrial
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}