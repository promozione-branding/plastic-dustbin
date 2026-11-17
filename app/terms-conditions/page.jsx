
"use client";

import React from "react";
import {
  ShieldCheck,
  Globe,
  Package,
  CreditCard,
  Truck,
  RefreshCcw,
  Scale,
  Copyright,
  Mail,
  Phone,
} from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      id: "01",
      title: "Use of Website",
      icon: Globe,
      content: (
        <>
          <p>
            By accessing and using this website, you agree to comply with
            the following conditions:
          </p>
          <ul>
            <li>You agree to use this website for lawful purposes only.</li>
            <li>You must not misuse, disrupt, or attempt unauthorized access to the website.</li>
            <li>All website content is provided for informational and commercial use only.</li>
          </ul>
        </>
      ),
    },
    {
      id: "02",
      title: "Product Information",
      icon: Package,
      content: (
        <>
          <p>
            We make every effort to ensure that product information displayed
            on our website is accurate and up to date.
          </p>
          <ul>
            <li>We strive to provide accurate product descriptions, specifications, and pricing.</li>
            <li>Minor variations may occur due to manufacturing processes or display differences.</li>
            <li>We reserve the right to update product information at any time without prior notice.</li>
          </ul>
        </>
      ),
    },
    {
      id: "03",
      title: "Orders & Payments",
      icon: CreditCard,
      content: (
        <>
          <p>
            All orders placed through our website are subject to confirmation
            and acceptance by Polywell.
          </p>
          <ul>
            <li>Orders are confirmed only after successful payment, where applicable.</li>
            <li>We reserve the right to cancel or refuse any order.</li>
            <li>Product pricing and availability are subject to change without prior notice.</li>
          </ul>
        </>
      ),
    },
    {
      id: "04",
      title: "Shipping & Delivery",
      icon: Truck,
      content: (
        <>
          <p>
            We aim to ensure timely delivery of all orders placed through our website.
          </p>
          <ul>
            <li>Delivery timelines are estimates and may vary depending on the delivery location.</li>
            <li>Delays caused by external factors beyond our control may occur.</li>
            <li>Please refer to our Shipping Policy for detailed shipping and delivery information.</li>
          </ul>
        </>
      ),
    },
    {
      id: "05",
      title: "Returns & Refunds",
      icon: RefreshCcw,
      content: (
        <>
          <p>
            Returns and refunds are handled according to our applicable
            Return & Refund Policy.
          </p>
          <ul>
            <li>Returns are subject to the conditions mentioned in our Return & Refund Policy.</li>
            <li>Certain products may not be eligible for return.</li>
            <li>Refunds are processed after the necessary inspection and approval.</li>
          </ul>
        </>
      ),
    },
    {
      id: "06",
      title: "Limitation of Liability",
      icon: Scale,
      content: (
        <p>
          Polywell shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of our products or
          services, or from the inability to use our website. Your use
          of our website and products is subject to applicable laws
          and regulations.
        </p>
      ),
    },
    {
      id: "07",
      title: "Intellectual Property",
      icon: Copyright,
      content: (
        <p>
          All content available on this website, including text, images,
          graphics, logos, designs, and other materials, is the property
          of Polywell unless otherwise stated. No content may be copied,
          reproduced, distributed, or used without prior written permission.
        </p>
      ),
    },
    {
      id: "08",
      title: "Policy Updates",
      icon: ShieldCheck,
      content: (
        <p>
          Polywell reserves the right to modify or update these Terms &
          Conditions at any time. Any changes will become effective once
          published on this page. We encourage visitors to review this
          page periodically to stay informed about the latest terms.
        </p>
      ),
    },
  ];

  return (
    <main className="bg-white text-[#202833]">

      {/* Hero Section */}
      <section className="bg-[#102b46] text-white">
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-6 px-6 py-8 md:mt-30 md:px-12 md:py-16">

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#a9c8df]">
            <span className="h-px w-10 bg-[#a9c8df]" />
            Legal Information
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold tracking-tight md:text-7xl">
                Terms & <span className="text-[#8eb9d6]">Conditions.</span>
              </h1>

              <p className="max-w-2xl text-sm text-white/65 md:text-lg">
                Please read our terms carefully to understand the conditions
                governing your use of Polywell's website, products, and services.
              </p>
            </div>

            <ShieldCheck
              size={65}
              strokeWidth={1}
              className="text-[#8eb9d6]"
            />
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:px-12 md:py-14">

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#397ba8]">
          Introduction
        </span>

        <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          Clear terms. Transparent relationships.
        </h2>

        <p className="max-w-4xl text-[15px] text-gray-600">
          Welcome to <strong className="text-[#202833]">Polywell</strong>.
          By using our website, purchasing our products, or engaging with
          our services, you agree to the following Terms & Conditions.
          Please read them carefully before proceeding.
        </p>

      </section>

      {/* Terms Sections */}
      <section className="mx-auto flex max-w-7xl flex-col px-6 pb-10 md:px-12">

        <div className="mb-6 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#397ba8]">
            Terms of Service
          </span>

          <h2 className="text-2xl font-semibold md:text-4xl">
            Understanding Our Terms
          </h2>
        </div>

        <div className="flex flex-col">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.id}
                className="group flex flex-col gap-4 border-t border-gray-200 py-7 md:flex-row md:gap-8 md:py-8"
              >

                {/* Number and Icon */}
                <div className="flex shrink-0 items-center gap-5 md:w-1/4 md:items-start">
                  <span className="text-sm font-medium text-[#397ba8]">
                    {section.id}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#397ba8] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {section.title}
                  </h3>

                  <div className="policy-content max-w-3xl text-sm text-gray-600 md:text-[15px]">
                    {section.content}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </section>

      {/* Contact Section */}
      <section className="bg-[#102b46] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:gap-16 md:px-12 md:py-16">

          <div className="flex max-w-xl flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a9c8df]">
              Get In Touch
            </span>

            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Have questions about our terms?
            </h2>

            <p className="text-sm leading-8 text-white/60">
              If you have any questions or concerns regarding these
              Terms & Conditions, please feel free to contact our team.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col">

            <a
              href="mailto:info@polywell.co.in"
              className="flex items-center gap-5 border-b border-white/15 py-5 transition hover:pl-2"
            >
              <Mail size={23} className="shrink-0 text-[#a9c8df]" />

              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Email Address</span>
                <span className="text-sm font-medium">info@polywell.co.in</span>
              </div>
            </a>

            <a
              href="tel:+918810422935"
              className="flex items-center gap-5 border-b border-white/15 py-5 transition hover:pl-2"
            >
              <Phone size={23} className="shrink-0 text-[#a9c8df]" />

              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Phone Number</span>
                <span className="text-sm font-medium">+91 88104 22935</span>
              </div>
            </a>

            <a
              href="tel:+919810057441"
              className="flex items-center gap-5 border-b border-white/15 py-5 transition hover:pl-2"
            >
              <Phone size={23} className="shrink-0 text-[#a9c8df]" />

              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Alternative Contact</span>
                <span className="text-sm font-medium">+91 98100 57441</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx global>{`
        .policy-content p {
          margin-bottom: 12px;
          line-height: 1.8;
        }

        .policy-content ul {
          list-style: none;
          padding: 0;
          margin: 12px 0;
        }

        .policy-content li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          line-height: 1.8;
        }

        .policy-content li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #397ba8;
        }
      `}</style>

    </main>
  );
};

export default TermsConditions;
