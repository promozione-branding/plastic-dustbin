"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    number: "01",
    name: "Pedal Dustbin",
    description:
      "Compact, durable and perfect for everyday use at home or office.",
    image: "/product/10L HDPE Pedal Dustbin/2.webp",
    href: "/categories/pedal-dustbin",
    accent: "#25834B",
  },
  {
    number: "02",
    name: "Bio Bins",
    description:
      "Reliable and hygienic waste disposal for cleaner spaces.",
    image: "/product/15L PW15P Pedal Dustbin/1.webp",
    href: "/categories/bio-bins ",
    accent: "#1F5FBF",
  },
  {
    number: "03",
     name: "Wheeled Dustbin",
    description:
      "Spacious, sturdy and ideal for high-usage environments.",
    image:
      "/product/60 L Foot Operated Dustbin/3.webp",
    href: "/categories/wheeled-bins",
    accent: "#E62B2B",
  },

  {
    number: "04",
    name: "Litter Bin",
    description:
      "Designed for hygienic waste collection in healthcare spaces.",
    image: "/product/biobin/10L bio bin 2.webp",
    href: "/categories/litter-bin",
    accent: "#25834B",
  },
  {
    number: "05",
    name: "Garbage Dustbin",
    description:
      "Simple, practical and suitable for everyday waste disposal.",
    image: "/product/40ltrswing.webp",
    href: "/categories/garbage-dustbin",
    accent: "#1F5FBF",
  },
  {
    number: "06",
    name: "Biomedical Waste Bin",
    description:
      "Reliable waste collection designed for healthcare applications.",
    image:
      "/product/10L Polywell Bio Medical Waste Bins/5.webp",
    href: "/categories/bio-medical-waste-bins",
    accent: "#E62B2B",
  },

  {
    number: "07",
     name: "Plastic Dustbin",
    description:
      "Convenient waste management solution for commercial spaces.",
    image:
     "/product/new plastic dustbin products/110L Outdoor Plastic Dustbin/1.webp",
    href: "/categories/plastic-dustbin",
    accent: "#25834B",
  },
   {
    number: "08",
    name: "Swacch Bharat ",
    description:
      "Heavy-duty wheeled bins for large-scale waste collection.",
    image:
      "/product/biobin/30L bio bin 4.webp",
    href: "/categories/swacch-bharat-range-bin",
    accent: "#1F5FBF",
  },
  {
    number: "09",
    name: "Outdoor Dustbin ",
    description:
      "Heavy-duty wheeled bins for large-scale waste collection.",
    image:
      "/product/1100L Pedal Garbage Bins/1.webp",
    href: "/categories/outdoor-dustbin",
    accent: "#1F5FBF",
  },
 
];

export default function Product() {
  return (
    <section className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">

          <div className="max-w-2xl">

            {/* Small Label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#25834B]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25834B]">
                Our Products
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-[#111827] sm:text-4xl lg:text-[44px]">
              Practical solutions for
              <br />
              <span className="text-[#25834B]">
                better waste management.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#666666] sm:text-base">
              Explore our range of plastic waste management and industrial
              products designed for homes, healthcare facilities, commercial
              spaces and institutions.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/products"
            className="group flex w-fit items-center gap-2 border-b border-[#25834B] pb-1 text-sm font-medium text-[#25834B]"
          >
            View All Products

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>


        {/* =====================================================
            PRODUCT GRID
            3 PRODUCTS PER ROW
        ===================================================== */}
       {/* ================= PRODUCT GRID ================= */}
<div className="grid grid-cols-1 gap-x-8  md:grid-cols-2 lg:grid-cols-3">

  {products.map((product) => (
    <Link
      href={product.href}
      key={product.number}
      className="group relative block h-[330px]"
    >

      {/* =====================================================
          CARD
          ===================================================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[270px]
          w-full
          overflow-visible
          rounded-[22px]
          border
          border-[#B8B8B8]
          bg-white
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:shadow-[0_25px_60px_rgba(11,29,49,0.10)]
        "
      >

        {/* ================= CARD CONTENT ================= */}
        <div className="relative z-10 h-full w-[58%] p-3 md:px-6 md:py-7">

          {/* Number */}
          <div
            className="
              mb-4
              flex
              h-8
              w-11
              items-center
              justify-center
              rounded-md
              bg-[#EAF5EF]
              text-sm
              font-bold
            "
            style={{
              color: product.accent,
            }}
          >
            {product.number}
          </div>

          {/* Product Name */}
          <h3 className="max-w-[210px] text-[21px] font-semibold leading-[1.15] text-[#0B1D31]">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-3 max-w-[205px] text-sm leading-5 text-[#667085]">
            {product.description}
          </p>

          {/* Read More */}
          <div className="mt-5">

            <span className="block h-[3px] w-[105px] bg-[#EF3038]" />

            <div className="mt-4 flex items-center gap-3 text-sm font-medium text-[#263B53]">
             View Product

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

          </div>

        </div>


        {/* ================= BOTTOM BLUE LINE ================= */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[7px]
            w-full
            rounded-b-[22px]
            bg-[#183E83]
          "
        />

      </div>


      {/* =====================================================
          PRODUCT IMAGE
          THIS IS OUTSIDE THE CARD
          ===================================================== */}
      <div
        className="
          absolute
          right-[-25px]
          top-[-5px]
          z-30
          h-[300px]
          md:h-[370px]
          w-[58%]
          pointer-events-none
          overflow-visible
          transition-all
          duration-700
          ease-out
          group-hover:-translate-y-3
          group-hover:scale-[1.04]
        "
      >

        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          sizes="900px"
          className="
          overflow-visible
            object-cover
            object-center
            drop-shadow-[0_22px_18px_rgba(0,0,0,0.18)]
          "
        />

      </div>

    </Link>
  ))}
</div>

      </div>
    </section>
  );
}