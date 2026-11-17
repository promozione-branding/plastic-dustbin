
"use client";

import React from "react";
import {
  ShieldCheck,
  Globe,
  Package,
  Clock,
  Truck,
  MapPin,
  AlertCircle,
  Mail,
  Phone,
  ClipboardCheck,
} from "lucide-react";

const ShippingPolicy = () => {
  const sections = [
    {
      id: "01",
      title: "Order Processing",
      icon: ClipboardCheck,
      content: (
        <>
          <p>
            All orders are carefully processed to ensure accurate packaging
            and timely dispatch.
          </p>
          <ul>
            <li>All orders are processed after confirmation of payment and order details.</li>
            <li>Standard processing time is 2–5 business days, depending on product availability and customization requirements.</li>
            <li>Processing time for bulk or customized machinery may vary and will be communicated in advance.</li>
          </ul>
        </>
      ),
    },
    {
      id: "02",
      title: "Shipping & Delivery Time",
      icon: Clock,
      content: (
        <>
          <p>
            Delivery timelines depend on your location and the type of product
            ordered. Estimated delivery timelines are as follows:
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-5">
            <div className="rounded-xl border border-gray-200 bg-[#f4f8fb] p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#397ba8]">
                Metro Cities
              </span>
              <h4 className="mt-2 text-2xl font-semibold text-[#102b46]">
                5–7 Days
              </h4>
            </div>

            <div className="rounded-xl border border-gray-200 bg-[#f4f8fb] p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#397ba8]">
                Other Locations
              </span>
              <h4 className="mt-2 text-2xl font-semibold text-[#102b46]">
                7–14 Days
              </h4>
            </div>
          </div>

          <p>
            Remote or rural areas may require additional delivery time.
          </p>
        </>
      ),
    },
    {
      id: "03",
      title: "Shipping Charges",
      icon: Package,
      content: (
        <>
          <p>
            Shipping charges are calculated based on several factors to ensure
            appropriate transportation arrangements.
          </p>
          <ul>
            <li>Product weight and packaging requirements.</li>
            <li>Delivery location and distance.</li>
            <li>Mode of transportation.</li>
            <li>Final shipping charges will be shared during order confirmation.</li>
          </ul>
        </>
      ),
    },
    {
      id: "04",
      title: "Delivery Method",
      icon: Truck,
      content: (
        <>
          <p>
            We work with reliable logistics partners to ensure safe and
            efficient transportation of our products.
          </p>
          <ul>
            <li>Orders are shipped through trusted logistics and transportation partners.</li>
            <li>Heavy machinery may be transported using specialized carriers.</li>
            <li>Transportation arrangements are made according to product requirements.</li>
          </ul>
        </>
      ),
    },
    {
      id: "05",
      title: "Order Tracking",
      icon: MapPin,
      content: (
        <>
          <p>
            We keep our customers informed about their order status after
            dispatch.
          </p>
          <ul>
            <li>Tracking details or transport information will be shared once the order is dispatched.</li>
            <li>Shipping updates will be communicated through phone or email.</li>
            <li>Customers can contact our team for assistance regarding delivery status.</li>
          </ul>
        </>
      ),
    },
    {
      id: "06",
      title: "Delivery Guidelines",
      icon: ShieldCheck,
      content: (
        <>
          <p>
            To ensure a smooth delivery experience, customers are requested
            to follow these guidelines:
          </p>
          <ul>
            <li>The customer or an authorized representative must be available at the delivery location.</li>
            <li>Customers should arrange unloading equipment such as cranes or forklifts, if required.</li>
            <li>Please inspect the product carefully upon delivery for any visible damage.</li>
          </ul>
        </>
      ),
    },
    {
      id: "07",
      title: "Damaged or Delayed Shipments",
      icon: AlertCircle,
      content: (
        <>
          <p>
            We take appropriate care while dispatching products. However,
            unforeseen circumstances may occasionally affect deliveries.
          </p>
          <ul>
            <li>Damaged products must be reported within 24 hours of delivery.</li>
            <li>Please share photographs or videos of the damaged product for verification.</li>
            <li>Delays caused by weather conditions, transportation issues, strikes, or other unforeseen events may occur.</li>
          </ul>
        </>
      ),
    },
    {
      id: "08",
      title: "Service Availability",
      icon: Globe,
      content: (
        <>
          <p>
            We currently provide shipping services across India.
          </p>
          <ul>
            <li>Orders can be shipped to locations across India, subject to service availability.</li>
            <li>For international orders, please contact our team directly.</li>
            <li>International shipping availability and transportation options will be discussed separately.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <main className="bg-white text-[#202833]">

      {/* Hero Section */}
      <section className="bg-[#102b46] text-white">
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-6 px-6 py-8 md:mt-30 md:px-12 md:py-16">


          <div className="flex flex-col gap-6 md:flex-row py-5 md:items-end md:justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold tracking-tight md:text-7xl">
                Shipping <span className="text-[#8eb9d6]">Policy.</span>
              </h1>

              <p className="max-w-2xl text-sm text-white/65 md:text-lg">
                Learn about our order processing, shipping timelines, delivery
                methods, and the steps we take to ensure safe and reliable
                delivery of your products.
              </p>
            </div>

            <Truck
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
          Safe delivery. Reliable service.
        </h2>

        <p className="max-w-4xl text-[15px] text-gray-600">
          At <strong className="text-[#202833]">Polywell</strong>, we are
          committed to ensuring safe and reliable delivery of our products.
          Our modern facilities and experienced team enable us to carefully
          process, package, and dispatch every order with attention to quality.
        </p>

      </section>

      {/* Shipping Policy Sections */}
      <section className="mx-auto flex max-w-7xl flex-col px-6 pb-10 md:px-12">

        <div className="mb-6 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#397ba8]">
            Shipping Information
          </span>

          <h2 className="text-2xl font-semibold md:text-4xl">
            Understanding Our Shipping Policy
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
              Need help with your shipment?
            </h2>

            <p className="text-sm leading-8 text-white/60">
              If you have any questions regarding order processing, shipping
              charges, delivery timelines, or shipment status, please feel
              free to contact our team.
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

export default ShippingPolicy;
