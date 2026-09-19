"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#F5F8F6]">
      {/* Background Decoration */}
      <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#DDEFE4] opacity-70 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#E7F3EB] blur-3xl" />

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 max-w-xl">
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D5E5DA] bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#23834A]" />
              <span className="text-sm font-medium text-[#355442]">
                Trusted Plastic Dustbin Manufacturer
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#17251D] sm:text-6xl lg:text-[64px]">
              Smart Waste
              <br />
              <span className="text-[#23834A]">Management</span>
              <br />
              Starts Here.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#66736B]">
              Durable, hygienic and thoughtfully designed plastic dustbins
              manufactured for homes, offices, commercial spaces and
              industrial applications.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-[#23834A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#23834A]/20 transition hover:-translate-y-0.5 hover:bg-[#1B6D3D]"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#C9D8CE] bg-white px-7 py-3.5 text-sm font-semibold text-[#24382C] transition hover:border-[#23834A] hover:text-[#23834A]"
              >
                Get a Quote
              </Link>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#DCE6DF] pt-7">
              <div>
                <p className="text-xl font-bold text-[#17251D]">100%</p>
                <p className="mt-1 text-xs text-[#718078]">
                  Quality Focused
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-[#17251D]">Durable</p>
                <p className="mt-1 text-xs text-[#718078]">
                  Built for Daily Use
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-[#17251D]">Bulk</p>
                <p className="mt-1 text-xs text-[#718078]">
                  Manufacturing
                </p>
              </div>
            </div>
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
      bg-[#E2F0E7]
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
      border-[#C9DED0]
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