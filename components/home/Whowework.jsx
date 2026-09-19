
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Stethoscope,
  ShoppingCart,
  Store,
  Warehouse,
} from "lucide-react";

const Whowework = () => {
  const partners = [
    {
      title: "GeM Portal Buyers",
      icon: ShoppingCart,
    },
    {
      title: "Private Hospital Purchase & Procurement Teams",
      icon: Stethoscope,
    },
    {
      title: "Retailers & Wholesale Distributors",
      icon: Store,
    },
    {
      title: "Municipal Corporations & Urban Local Bodies",
      icon: Warehouse,
    },
    {
      title: "Government Hospital Tenders Bidders & Project Contractors",
      icon: Building2,
    },
  ];

  return (
    <>

     {/* ================= CERTIFICATIONS ================= */}
      <section className="border-y border-[#EAEAEA] bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-2 divide-x divide-[#E5E5E5] md:grid-cols-5">

            {/* ISO */}
            <div className="flex min-h-[130px] flex-col items-center justify-center px-4 text-center">
              <img
                src="/3.webp"
                alt="ISO Certification"
                className="mb-3 h-12 w-12 object-contain"
              />
              <p className="text-xs font-medium text-[#444444] sm:text-sm">
                ISO Certified
              </p>
            </div>

            {/* GEM */}
            <div className="flex min-h-[130px] flex-col items-center justify-center px-4 text-center">
              <img
                src="/gem.png"
                alt="GEM Approved"
                className="mb-3 h-12 w-auto object-contain"
              />
              <p className="text-xs font-medium text-[#444444] sm:text-sm">
                GEM Approved
              </p>
            </div>

            {/* Certificate */}
            <div className="flex min-h-[130px] flex-col items-center justify-center px-4 text-center">
              <img
                src="/certificate (1).webp"
                alt="Certification"
                className="mb-3 h-12 w-12 object-contain"
              />
              <p className="text-xs font-medium text-[#444444] sm:text-sm">
                Certified Products
              </p>
            </div>

            {/* CDSCO */}
            <div className="flex min-h-[130px] flex-col items-center justify-center px-4 text-center">
              <img
                src="/CDSCO-Import-License.webp"
                alt="CDSCO License"
                className="mb-3 h-12 w-auto object-contain"
              />
              <p className="text-xs font-medium text-[#444444] sm:text-sm">
                CDSCO Licensed
              </p>
            </div>

            {/* Tender */}
            <div className="col-span-2 flex min-h-[130px] flex-col items-center justify-center px-4 text-center md:col-span-1">
              <img
                src="/meeting.webp"
                alt="Tender Experience"
                className="mb-3 h-12 w-12 object-contain"
              />
              <p className="text-xs font-medium text-[#444444] sm:text-sm">
                Tender Experience
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* ================= WHO WE WORK WITH ================= */}

<section className="bg-white py-20 sm:py-14">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

      {/* ================= STICKY IMAGE ================= */}
      <div className="relative lg:sticky lg:top-34 lg:self-start">

        <div className="relative overflow-hidden rounded-2xl bg-[#F5F7F5]">
          <Image
            src="/whowework.webp"
            alt="Plastic Dustbin Supply"
            width={900}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />

          {/* Small Label */}
          <div className="absolute bottom-5 left-5 rounded-lg bg-white px-4 py-3 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-[#25834B]">
              Trusted Supply
            </p>

            <p className="mt-1 text-sm font-medium text-[#222222]">
              Institutional & Bulk Buyers
            </p>
          </div>
        </div>

      </div>

      {/* ================= SCROLLING CONTENT ================= */}
      <div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#25834B]">
          Who We Work With
        </p>

        <h2 className="max-w-2xl text-4xl  leading-tight tracking-tight text-[#171717] sm:text-5xl">
          Built for buyers who
          <br />
          <span className="text-[#25834B]">
            need reliable supply.
          </span>
        </h2>

        <p className="mt-3 max-w-xl text-base leading-7 text-[#666666] sm:text-lg">
          We support institutions, healthcare facilities, retailers,
          government organizations and bulk procurement partners with
          dependable plastic products.
        </p>

        {/* Partner List */}
        <div className="mt-10 border-t border-[#E8E8E8]">

          {partners.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-[#E8E8E8] py-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F2F7F3]">
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className="text-[#25834B]"
                  />
                </div>

                <p className="text-sm font-medium text-[#292929] sm:text-base">
                  {partner.title}
                </p>
              </div>
            );
          })}

        </div>

        {/* Extra Content */}
        <div className="mt-16 space-y-6">

          <div>
            <p className=" text-sm  uppercase tracking-wider text-[#25834B]">
              Reliable Supply
            </p>

            <h3 className="text-2xl  text-[#171717] sm:text-3xl">
              Consistent products for every requirement.
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-[#666666]">
              From individual requirements to large institutional orders,
              our products are designed to meet different procurement
              requirements with consistent quality.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm  uppercase tracking-wider text-[#25834B]">
              Bulk Procurement
            </p>

            <h3 className="text-2xl  text-[#171717] sm:text-3xl">
              Designed for businesses and institutions.
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-[#666666]">
              We work with distributors, hospitals, government organizations
              and other bulk buyers looking for dependable plastic products.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm  uppercase tracking-wider text-[#25834B]">
              Partnership
            </p>

            <h3 className="text-2xl text-[#171717] sm:text-3xl">
              Looking for a dependable supply partner?
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-[#666666]">
              Get in touch with our team to discuss your product and bulk
              procurement requirements.
            </p>

            <Link
              href="/contact-us"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#25834B] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1E6F40]"
            >
              Partner With Us
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>



     
    </>
  );
};

export default Whowework;

