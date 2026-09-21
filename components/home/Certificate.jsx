"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      src: "/certificate/1.webp",
      alt: "Certificate 1",
    },
    {
      id: 2,
      src: "/certificate/2.webp",
      alt: "Certificate 2",
    },
    {
      id: 3,
      src: "/certificate/3.webp",
      alt: "Certificate 3",
    },
    {
      id: 4,
      src: "/certificate/4.webp",
      alt: "Certificate 4",
    },
    {
      id: 5,
      src: "/certificate/5.webp",
      alt: "Certificate 5",
    },
    {
      id: 6,
      src: "/certificate/6.webp",
      alt: "Certificate 6",
    },
    {
      id: 7,
      src: "/certificate/7.webp",
      alt: "Certificate 7",
    },
    {
      id: 8,
      src: "/certificate/8.webp",
      alt: "Certificate 8",
    },
    {
      id: 9,
      src: "/certificate/9.webp",
      alt: "Certificate 9",
    },
    {
      id: 11,
      src: "/certificate/11.webp",
      alt: "Certificate 11",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#16392c] py-6 sm:py-12">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#147A4C]/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#147A4C]/15 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-2 text-center sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#72c99d]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#72c99d]">
              Excellence & Trust
            </span>

            <span className="h-px w-8 bg-[#72c99d]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="text-[#72c99d]">
              Certificates
            </span>
          </h2>
{/* 
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Recognized certifications that reflect our commitment to quality,
            reliability, and industry standards.
          </p> */}
        </div>

        {/* Certificate Slider */}
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          speed={900}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 1.2,
            slideShadows: false,
          }}
          slidesPerView={1.25}
          spaceBetween={15}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
          }}
          className="!overflow-visible"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={cert.id}>
              <div className="group relative py-2">
                {/* Certificate Number */}
                <div className="absolute -top-1 left-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#0b3022]/90 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Main Card */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.06]
                    p-2
                    shadow-2xl
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:border-[#72c99d]/50
                    group-hover:bg-white/[0.09]
                  "
                >
                  {/* Top Accent */}
                  <div className="absolute left-1/2 top-0 z-10 h-1 w-20 -translate-x-1/2 rounded-b-full bg-[#72c99d] opacity-0 transition-all duration-500 group-hover:w-32 group-hover:opacity-100" />

                  {/* Image */}
                  <div className="relative h-[390px] w-full overflow-hidden rounded-xl bg-white sm:h-[420px] md:h-[440px]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                      className="
                        object-contain
                        p-2
                        transition-transform
                        duration-700
                        group-hover:scale-[1.03]
                      "
                    />

                    {/* Bottom Shine */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  {/* Bottom Info */}
                  {/* <div className="flex items-center justify-between px-3 py-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#72c99d]">
                        Certification
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Quality & Excellence
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 group-hover:border-[#72c99d]/50 group-hover:bg-[#147A4C] group-hover:text-white">
                      ↗
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </section>
  );
};

export default Certificates;
