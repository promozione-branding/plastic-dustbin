"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const products = [
  {
    name: "Plastic Dustbins",
    href: "/categories/plastic-dustbin",
  },
  {
    name: "Plastic Pedal Bins",
    href: "/categories/pedal-dustbin",
  },
  {
    name: "Bio-Medical Bins",
    href: "/categories/bio-medical-waste-bins",
  },
  {
    name: "Wheeled Bins",
    href: "/categories/wheeled-dustbin",
  },
  {
    name: "Plastic Pallets",
    href: "/categories/plastic-pallets",
  },
  {
    name: "Bio Bins",
    href: "/categories/bio-bins",
  },
  {
    name: "Garbage Dustbins",
    href: "/categories/garbage-dustbin",
  },
];

const exploreLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Our Products",
    href: "/products",
  },
  {
    name: "Our Blog",
    href: "/blogs",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer
        className="border-t border-[#26364A] bg-[#0B1D31] text-[#AAB7C5]"
        data-purpose="corporate-footer"
      >
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 lg:px-8">

          {/* =====================================================
              MAIN FOOTER
          ====================================================== */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

            {/* =================================================
                CORPORATE INFO
            ================================================= */}
            <div className="lg:col-span-4">

              {/* Logo */}
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo.webp"
                  alt="Sangam Plastic Industries"
                  width={180}
                  height={55}
                  className="h-auto w-[155px] object-contain"
                />
              </Link>

              <p className="mt-5 max-w-md text-base leading-6 text-[#9CAABA]">
                Sangam Plastic Industries Pvt. Ltd. is a manufacturer of
                high-quality plastic waste management solutions for homes,
                hospitals, industries and commercial spaces across India.
              </p>

              {/* Company Details */}
              <div className="mt-6 space-y-2 border-t border-[#26364A] pt-5 text-[11px] leading-5 text-[#7F8FA1]">
                

                <p className="text-sm">
                  <span className="text-[#B7C2CE] text-sm ">
                    Certifications:
                  </span>{" "}
                  ISO 9001:2015 • GeM OEM Verified • CDSCO MD-04
                </p>

                <p className="text-sm">
                  <span className="text-[#B7C2CE] ">
                    Manufacturing:
                  </span>{" "}
                  Plastic Waste Management Solutions
                </p>
              </div>

              {/* Social */}
              <div className="mt-6 flex items-center gap-2">

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded border border-[#304155] text-[#9CAABA] transition hover:border-[#25834B] hover:text-white"
                >
                  <Facebook size={14} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded border border-[#304155] text-[#9CAABA] transition hover:border-[#25834B] hover:text-white"
                >
                  <Instagram size={14} />
                </a>

                <a
                  href="#"
                  aria-label="Youtube"
                  className="flex h-8 w-8 items-center justify-center rounded border border-[#304155] text-[#9CAABA] transition hover:border-[#25834B] hover:text-white"
                >
                  <Youtube size={14} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded border border-[#304155] text-[#9CAABA] transition hover:border-[#25834B] hover:text-white"
                >
                  <Linkedin size={14} />
                </a>

              </div>
            </div>

            {/* =================================================
                EXPLORE
            ================================================= */}
            <div className="lg:col-span-2">

              <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.16em] text-white">
                Explore
              </h3>

              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-base text-[#9CAABA] transition hover:text-white"
                    >
                      {link.name}

                      <ArrowUpRight
                        size={11}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

            {/* =================================================
                PRODUCTS
            ================================================= */}
            <div className="lg:col-span-2">

              <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.16em] text-white">
                Products
              </h3>

              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link
                      href={product.href}
                      className="text-base text-[#9CAABA] transition hover:text-white"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

            {/* =================================================
                CONTACT
            ================================================= */}
            <div className="lg:col-span-2">

              <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.16em] text-white">
                Contact
              </h3>

              <div className="space-y-5">

                {/* Address */}
                <div className="flex items-start gap-3">

                  <MapPin
                    size={16}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-[#25834B]"
                  />

                  <div>
                    <p className="mb-1 text-base font-medium text-[#D4DCE4]">
                      Registered Office
                    </p>

                    <p className="text-base leading-5 text-[#8998A9]">
                      110, Satya Bhawan, 36 Community Center,
                      Wazirpur Industrial Area,
                      New Delhi - 110052, India.
                    </p>
                  </div>

                </div>

                {/* Manufacturing */}
                <div className="flex items-start gap-3">

                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#25834B]" />

                  <div>
                    <p className="mb-1 text-base font-medium text-[#D4DCE4]">
                      Manufacturing Unit
                    </p>

                    <p className="text-base leading-5 text-[#8998A9]">
                      Spread across Delhi NCR
                    </p>
                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">

                  <Phone
                    size={15}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-[#25834B]"
                  />

                  <div className="space-y-1">

                    <a
                      href="tel:+918810422935"
                      className="block text-base text-[#9CAABA] transition hover:text-white"
                    >
                      +91-8810422935
                    </a>

                    <a
                      href="tel:+919810057441"
                      className="block text-base text-[#9CAABA] transition hover:text-white"
                    >
                      +91-9810057441
                    </a>

                  </div>

                </div>

                {/* Email */}
                <div className="flex items-start gap-3">

                  <Mail
                    size={15}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-[#25834B]"
                  />

                  <a
                    href="mailto:info@polywell.co.in"
                    className="text-base text-[#9CAABA] transition hover:text-white"
                  >
                    info@polywell.co.in
                  </a>

                </div>

              </div>

            </div>

            {/* =================================================
                TRUST CERTIFICATE
            ================================================= */}
            <div className="lg:col-span-2">

              <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.16em] text-white">
                Trust & Certification
              </h3>

              <p className="text-base leading-5 text-[#8998A9]">
                Recognized for our commitment to customer service,
                professional business practices and trusted customer
                relationships.
              </p>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-5 flex items-center gap-3 text-left"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-[#304155] bg-[#10263D]">
                  <img
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726401/trustseal_vltgii.webp"
                    alt="Trust Elite Certificate"
                    className="h-16 w-16 object-contain transition duration-300 hover:scale-105"
                  />
                </div>

                <span className="text-xs font-medium text-[#B9C5D1]">
                  View Certificate
                  <span className="mt-1 block text-[#25834B]">
                    Open →
                  </span>
                </span>
              </button>

            </div>
          </div>

          {/* =====================================================
              BOTTOM BAR
          ====================================================== */}
          <div className="mt-12 border-t border-[#26364A] pt-6">

            <div className="flex flex-col gap-4 text-[11px] text-[#718194] md:flex-row md:items-center md:justify-between">

              <p className="text-sm">
                © 2026 Sangam Plastic Industries Pvt. Ltd.
                All rights reserved.
              </p>

              <div className="flex flex-wrap text-sm items-center gap-x-4 gap-y-2">

                <Link
                  href="/privacy-policy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </Link>

                <span className="text-[#3A4A5D]">•</span>

                <Link
                  href="/terms"
                  className="transition hover:text-white"
                >
                  Terms of Supply
                </Link>

                <span className="text-[#3A4A5D]">•</span>

                <Link
                  href="/contact-us"
                  className="text-[#25834B] transition hover:text-[#36A968]"
                >
                  GeM / Bulk Inquiry
                </Link>

              </div>

            </div>

            {/* Developer */}
            <div className="mt-4 text-center text-sm text-[#58697C] md:text-right">
              Website Designed By{" "}
              <a
                
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7D8FA2] transition hover:text-white"
              >
                Inquiry Bazaar Pvt. Ltd.
              </a>
            </div>

          </div>

        </div>
      </footer>

      {/* =====================================================
          CERTIFICATE MODAL
      ====================================================== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-5"
          onClick={() => setIsModalOpen(false)}
        >

          <div
            className="relative max-h-[90vh] max-w-3xl rounded-xl bg-white p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1D31] text-sm text-white"
            >
              ×
            </button>

            <img
              src="/certificate.webp"
              alt="Trust Elite Full Certificate"
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />

          </div>

        </div>
      )}
    </>
  );
};

export default Footer;