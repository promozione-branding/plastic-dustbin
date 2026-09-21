"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    number: "01",
    title: "Pedal Dustbin",
    image: "/product/10L HDPE Pedal Dustbin/2.webp",
    href: "/categories/pedal-dustbin",
  },
  {
    number: "02",
    title: "Wheeled Dustbin",
    image: "/product/80L PP Central Wheeled Pedal Bio Bin/2.webp",
    href: "/categories/wheeled-bins",
  },
  {
    number: "03",
    title: "Bio Bins",
    image: "/product/biobin/30L bio bin 4.webp",
    href: "/categories/bio-bins",
  },
  {
    number: "04",
    title: "Garbage Dustbin",
    image: "/product/15ltrswing.webp",
    href: "/categories/garbage-dustbin",
  },
  {
    number: "05",
    title: "Outdoor Dustbin",
    image:
      "/product/new plastic dustbin products/110L Outdoor Plastic Dustbin/1.webp",
    href: "/categories/outdoor-dustbin",
  },
];

export default function Category() {
  return (
    <section className="relative overflow-hidden bg-[#F4F8F5] py-6 sm:py-12">
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#25834B]/5" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#25834B]/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            {/* Label */}
            

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
              Explore our
              <br />
              <span className="text-[#25834B]">
                product categories.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#666666] sm:text-base">
              Explore our range of quality plastic waste management products,
              designed for hospitals, institutions, commercial spaces,
              government projects, retailers, and distributors.
            </p>

          </div>

          {/* View All */}
          <Link
            href="/products"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#25834B] bg-white px-5 py-3 text-sm font-semibold text-[#25834B] shadow-sm transition-all duration-300 hover:bg-[#25834B] hover:text-white"
          >
            View All Products

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25834B] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#25834B]">
              →
            </span>
          </Link>

        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category, index) => (
            <Link
              href={category.href}
              key={category.number}
              className="group relative overflow-hidden rounded-2xl border border-[#DDE8E0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#25834B]/30 hover:shadow-[0_15px_35px_rgba(37,131,75,0.12)]"
            >

              {/* ================= CARD HEADER ================= */}
              <div className="relative z-10 flex items-start justify-between px-4 pb-3 pt-4">

                {/* Number */}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F7F2] text-[11px] font-bold text-[#25834B] transition-colors duration-300 group-hover:bg-[#25834B] group-hover:text-white">
                  {category.number}
                </span>

                {/* Arrow */}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-[#777777] transition-all duration-300 group-hover:border-[#25834B] group-hover:bg-[#25834B] group-hover:text-white">
                  ↗
                </span>

              </div>

              {/* ================= TITLE ================= */}
              <div className="px-4 pb-4">

                <h3 className="text-center text-base font-semibold leading-6 text-[#202020] sm:text-lg">
                  {category.title}
                </h3>

              </div>

              {/* ================= IMAGE ================= */}
              <div className="relative h-[230px] overflow-hidden bg-[#EAF4EE]">

                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={500}
                  unoptimized
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent opacity-60" />

                {/* Hover Label */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-3 rounded-xl bg-white/95 px-4 py-3 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-semibold text-[#25834B]">
                      Explore Category
                    </span>

                    <span className="text-sm font-semibold text-[#25834B]">
                      →
                    </span>

                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* ================= BOTTOM HIGHLIGHT ================= */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#DDE8E0] bg-white px-6 py-5 shadow-sm sm:flex-row">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF4EE] text-lg text-[#25834B]">
              ✓
            </div>

            <div>
              <p className="text-sm font-semibold text-[#202020]">
                Quality products for diverse requirements
              </p>

              <p className="mt-0.5 text-xs text-[#777777]">
                Bulk orders and procurement requirements are welcome.
              </p>
            </div>

          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-[#25834B] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1d693c]"
          >
            Talk to Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}