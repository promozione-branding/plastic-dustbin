"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    number: "01",
    title: "Pedal Dustbin",
    image: "/product/10L HDPE Pedal Dustbin/2.webp",
    href: "/products",
  },
  {
    number: "02",
    title: "Wheeled Dustbin",
    image: "/product/80L PP Central Wheeled Pedal Bio Bin/2.webp",
    href: "/products",
  },
  {
    number: "03",
    title: "Bio Bins",
    image: "/product/biobin/30L bio bin 4.webp",
    href: "/products",
  },
  {
    number: "04",
    title: "Garbage Dustbin",
    image: "/product/15ltrswing.webp",
    href: "/products",
  },
  {
    number: "05",
    title: "Outdoor Dustbin",
    image: "/product/new plastic dustbin products/110L Outdoor Plastic Dustbin/1.webp",
    href: "/products",
  },
];

export default function Category() {
  return (
    <section className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 max-w-2xl">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#25834B]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#25834B]">
              Buyer Categories
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-4xl">
            Solutions for every
            <br />
            <span className="text-[#25834B]">
              procurement requirement.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#666666] sm:text-base">
            From hospitals and government organizations to retailers and
            distributors, we supply plastic products for diverse
            procurement requirements.
          </p>

        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div className="grid grid-cols-1 border-l border-t border-[#E4E4E4] sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.number}
              className="group relative flex flex-col border-b border-r border-[#E4E4E4] bg-white transition-colors duration-300 hover:bg-[#F8FAF8]"
            >

              {/* ================= TOP CONTENT ================= */}
              <div className="p-3 pb-4">

                <span className="text-xs  font-medium tracking-wide text-[#25834B]">
                  {category.number}
                </span>

                <h3 className=" text-base text-center font-semibold leading-6 text-[#202020]">
                  {category.title}
                </h3>

              </div>

              {/* ================= IMAGE ================= */}
              <div className="relative mt-auto flex h-[240px] items-end justify-center overflow-hidden bg-[#F6F8F6]">

                <Image
                  src={category.image}
                  alt={category.title}
                  width={100}
                  height={100}
                  className="
                    h-full
                    w-full
                    object-cover
                    p-0
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Bottom Arrow */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#25834B]
                    opacity-0
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  →
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}