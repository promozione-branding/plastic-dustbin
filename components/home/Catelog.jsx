"use client";

import Image from "next/image";
import Link from "next/link";

export default function Catelog() {
  return (
    <section className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            DESKTOP BANNER
            ===================================================== */}
        <div className="relative hidden min-h-[360px] overflow-hidden rounded-2xl md:block">

          {/* Desktop Background */}
          <Image
            src="/Catelog.png"
            alt="Sangam Plastic Industries Catalogue"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Left readability overlay */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-white via-white/95 to-transparent" />
          </div>

          {/* Desktop Content */}
          <div className="relative z-20 flex min-h-[360px] items-center px-8 py-12 lg:px-14">
            <div className="max-w-[500px]">

              {/* Label */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#25834B]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25834B]">
                  Product Catalogue
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#171717] lg:text-[42px]">
                Explore our complete
                <br />
                <span className="text-[#25834B]">
                  product catalogue.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-md text-sm leading-6 text-black lg:text-base">
                Discover our range of plastic dustbins, pedal bins,
                biomedical bins, wheeled bins and other waste management
                solutions.
              </p>

              {/* CTA */}
              <Link
                href="/catalogue.pdf"
                download
                target="_blank"
                className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#25834B] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1E6F40] hover:gap-4"
              >
                Download Catalogue
                <span className="text-lg leading-none">→</span>
              </Link>

            </div>
          </div>
        </div>


        {/* =====================================================
            MOBILE BANNER
            ===================================================== */}
        <div className="relative block min-h-[680px] overflow-hidden rounded-2xl md:hidden">

          {/* Mobile Background */}
          <Image
            src="/mobcat.png"
            alt="Sangam Plastic Industries Catalogue"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Mobile readability overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/95 via-white/65 to-transparent" />

          {/* Mobile Content */}
          <div className="relative z-20 flex min-h-[680px] flex-col items-center px-5 pt-10 text-center">

            {/* Label */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-[#25834B]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#25834B]">
                Product Catalogue
              </span>

              <span className="h-px w-6 bg-[#25834B]" />
            </div>

            {/* Heading */}
            <h2 className="max-w-[350px] text-[30px] font-semibold leading-[1.12] tracking-tight text-[#171717]">
              Explore our complete
              <br />
              <span className="text-[#25834B]">
                product catalogue.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[330px] text-sm leading-5 text-black">
              Discover our range of plastic dustbins, pedal bins,
              biomedical bins, wheeled bins and other waste management
              solutions.
            </p>

            {/* CTA */}
            <Link
              href="/catalogue.pdf"
              download
              target="_blank"
              className="mt-6 inline-flex items-center gap-3 rounded-md bg-[#25834B] px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 active:scale-95"
            >
              Download Catalogue
              <span className="text-lg leading-none">→</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}