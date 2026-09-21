
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#F3F8F5] py-6 sm:py-13 ">

      {/* ================= 3D BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#25834B]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#25834B]/5 blur-3xl" />

      {/* Decorative 3D rings */}
      <div className="pointer-events-none absolute right-[8%] top-[12%] hidden h-32 w-32 rounded-full border-[18px] border-[#25834B]/5 lg:block" />

      <div className="pointer-events-none absolute bottom-[15%] left-[5%] hidden h-24 w-24 rounded-full border-[12px] border-[#25834B]/5 lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-10 flex flex-col justify-between gap-7 lg:mb-14 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#25834B]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#25834B]">
                Product Categories
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#151515] sm:text-4xl lg:text-5xl">
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

          {/* View Products */}

          <Link
            href="/products"
            className="group flex w-fit items-center gap-3 rounded-full bg-[#25834B] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,131,75,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(37,131,75,0.25)]"
          >
            View All Products

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#25834B] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* ================= 3D GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-5
            lg:[perspective:1400px]
          "
        >
          {categories.map((category, index) => {
            const isActive = activeCard === index;

            return (
              <Link
                href={category.href}
                key={category.number}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#D9E7DD]
                  bg-white
                  transition-all
                  duration-500
                  ease-out
                  lg:[transform-style:preserve-3d]
                  ${
                    isActive
                      ? "lg:-translate-y-3 lg:[transform:rotateX(3deg)_rotateY(-3deg)] shadow-[0_30px_60px_rgba(37,131,75,0.18)]"
                      : "shadow-[0_8px_25px_rgba(0,0,0,0.05)]"
                  }
                `}
              >

                {/* ================= TOP LIGHT ================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -top-20
                    left-1/2
                    h-40
                    w-40
                    -translate-x-1/2
                    rounded-full
                    bg-[#25834B]/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#25834B]/20
                  "
                />

                {/* ================= CARD HEADER ================= */}

                <div className="relative z-20 flex items-center justify-between px-4 pt-4">

                  {/* Number */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#25834B]/10
                      bg-[#F0F7F2]
                      text-[11px]
                      font-bold
                      text-[#25834B]
                      shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]
                      transition-all
                      duration-500
                      group-hover:rotate-[-6deg]
                      group-hover:bg-[#25834B]
                      group-hover:text-white
                      group-hover:shadow-[0_5px_12px_rgba(37,131,75,0.25)]
                    "
                  >
                    {category.number}
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E4E8E5]
                      bg-white
                      text-[#777]
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:rotate-12
                      group-hover:border-[#25834B]
                      group-hover:bg-[#25834B]
                      group-hover:text-white
                    "
                  >
                    ↗
                  </div>
                </div>

                {/* ================= TITLE ================= */}

                <div className="relative z-20 px-4 pb-3 pt-4">

                  <h3
                    className="
                      text-center
                      text-base
                      font-semibold
                      leading-6
                      text-[#202020]
                      transition-all
                      duration-300
                      group-hover:text-[#25834B]
                      sm:text-lg
                    "
                  >
                    {category.title}
                  </h3>
                </div>

                {/* ================= IMAGE AREA ================= */}

                <div
                  className="
                    relative
                    mt-1
                    h-[235px]
                    overflow-hidden
                    bg-gradient-to-b
                    from-[#F1F8F3]
                    to-[#DCEFE2]
                  "
                >

                  {/* 3D Circle */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[190px]
                      w-[190px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-white/70
                      shadow-[inset_0_0_30px_rgba(37,131,75,0.08),0_15px_35px_rgba(37,131,75,0.08)]
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:bg-white
                    "
                  />

                  {/* Inner Ring */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[155px]
                      w-[155px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border
                      border-[#25834B]/10
                      transition-all
                      duration-700
                      group-hover:scale-125
                      group-hover:border-[#25834B]/20
                    "
                  />

                  {/* Product Image */}

                  <Image
                    src={category.image}
                    alt={category.title}
                    width={500}
                    height={500}
                    unoptimized
                    className="
                      relative
                      z-10
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      ease-out
                      group-hover:-translate-y-3
                      group-hover:scale-[1.08]
                    "
                  />

                  {/* Bottom shadow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-3
                      left-1/2
                      z-0
                      h-5
                      w-28
                      -translate-x-1/2
                      rounded-[50%]
                      bg-black/15
                      blur-md
                      transition-all
                      duration-700
                      group-hover:w-20
                      group-hover:bg-black/10
                    "
                  />

                  {/* Hover overlay */}

                  <div
                    className="
                      absolute
                      inset-x-3
                      bottom-3
                      z-30
                      translate-y-3
                      rounded-xl
                      border
                      border-white/60
                      bg-white/90
                      px-4
                      py-3
                      opacity-0
                      shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                      backdrop-blur-md
                      transition-all
                      duration-400
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <div className="flex items-center justify-between">

                      <span className="text-xs font-semibold text-[#25834B]">
                        Explore Category
                      </span>

                      <span className="text-sm font-bold text-[#25834B]">
                        →
                      </span>

                    </div>
                  </div>
                </div>

                {/* ================= BOTTOM EDGE ================= */}

                <div
                  className="
                    h-1
                    w-0
                    bg-[#25834B]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </Link>
            );
          })}
        </div>

     

      </div>
    </section>
  );
}

