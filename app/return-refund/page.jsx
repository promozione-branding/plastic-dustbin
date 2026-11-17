
"use client";

import React from "react";
import {
  ShieldCheck,
  Package,
  ClipboardList,
  CreditCard,
  RefreshCcw,
  Truck,
  XCircle,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";

const ReturnRefundPolicy = () => {
  const sections = [
    {
      id: "01",
      title: "Return Eligibility",
      icon: ClipboardList,
      content: (
        <>
          <p>
            We accept return requests under specific circumstances to ensure
            customer satisfaction and product quality.
          </p>
          <ul>
            <li>Product received is damaged during transit.</li>
            <li>Incorrect product or quantity is delivered.</li>
            <li>Product does not match the confirmed order specifications.</li>
            <li>Return requests must be submitted within 24–48 hours of delivery.</li>
          </ul>
        </>
      ),
    },
    {
      id: "02",
      title: "Non-Returnable Items",
      icon: XCircle,
      content: (
        <>
          <p>
            Certain products are not eligible for return due to their nature,
            condition, or specific handling requirements.
          </p>
          <ul>
            <li>Opened or partially used products.</li>
            <li>Products stored improperly after delivery.</li>
            <li>Customized or made-to-order products.</li>
            <li>Products damaged due to customer mishandling.</li>
          </ul>
        </>
      ),
    },
    {
      id: "03",
      title: "Return Process",
      icon: Package,
      content: (
        <>
          <p>
            To initiate a return request, customers are required to follow
            the process mentioned below:
          </p>
          <ol className="list-decimal space-y-2 pl-5 marker:text-[#397ba8]">
            <li>Contact our support team within the eligible return period.</li>
            <li>Share your order details along with photos or videos of the issue.</li>
            <li>Our team will review your request and verify the details.</li>
            <li>If approved, return instructions will be provided.</li>
          </ol>
        </>
      ),
    },
    {
      id: "04",
      title: "Refund Policy",
      icon: CreditCard,
      content: (
        <>
          <p>
            Refunds are processed after the returned product has been
            inspected and the request has been approved.
          </p>
          <ul>
            <li>Refunds are processed after inspection and approval.</li>
            <li>Approved refunds will be processed within 7–10 business days.</li>
            <li>Refunds will be credited through the original payment method or an agreed method.</li>
          </ul>
        </>
      ),
    },
    {
      id: "05",
      title: "Replacement Policy",
      icon: RefreshCcw,
      content: (
        <>
          <p>
            If a product is damaged, defective, or incorrectly delivered,
            we may offer one of the following resolutions, depending on
            the circumstances:
          </p>
          <ul>
            <li>Replacement of the product.</li>
            <li>An alternative product.</li>
            <li>Refund, depending on the case.</li>
          </ul>
        </>
      ),
    },
    {
      id: "06",
      title: "Return Shipping",
      icon: Truck,
      content: (
        <>
          <p>
            Return shipping charges are determined based on the reason
            for the return request.
          </p>
          <ul>
            <li>If the issue is from our side, JNJ Aqua will bear the shipping cost.</li>
            <li>Otherwise, return shipping charges may be the customer's responsibility.</li>
          </ul>
        </>
      ),
    },
    {
      id: "07",
      title: "Order Cancellation",
      icon: XCircle,
      content: (
        <>
          <p>
            Order cancellation requests are subject to the current order
            processing and dispatch status.
          </p>
          <ul>
            <li>Orders can be cancelled before dispatch without charges.</li>
            <li>Post-dispatch cancellation requests may not be accepted.</li>
          </ul>
        </>
      ),
    },
    {
      id: "08",
      title: "Important Notes",
      icon: AlertCircle,
      content: (
        <>
          <p>
            Customers are requested to follow the necessary product
            handling and safety guidelines.
          </p>
          <ul>
            <li>Follow proper storage and handling guidelines.</li>
            <li>Claims without supporting proof may not be approved.</li>
            <li>Always follow the applicable product safety instructions.</li>
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

        

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold tracking-tight md:text-7xl">
                Return & Refund{" "}
                <span className="text-[#8eb9d6]">Policy.</span>
              </h1>

              <p className="max-w-2xl text-sm text-white/65 md:text-lg">
                Understand our return, replacement, refund, and cancellation
                procedures. We are committed to maintaining product quality
                and ensuring customer satisfaction.
              </p>
            </div>

            <RefreshCcw
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
          Customer satisfaction. Quality assurance.
        </h2>

        <p className="max-w-4xl text-[15px] text-gray-600">
          At <strong className="text-[#202833]">JNJ Aqua</strong>, we are
          committed to providing high-quality products and ensuring customer
          satisfaction. Due to the nature of industrial and water treatment
          products, our Return & Refund Policy is designed to maintain product
          quality, safety, and compliance.
        </p>

      </section>

      {/* Policy Sections */}
      <section className="mx-auto flex max-w-7xl flex-col px-6 pb-10 md:px-12">

        <div className="mb-6 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#397ba8]">
            Return & Refund Information
          </span>

          <h2 className="text-2xl font-semibold md:text-4xl">
            Understanding Our Policy
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
              Need assistance with a return or refund?
            </h2>

            <p className="text-sm leading-8 text-white/60">
              If you have any questions regarding returns, refunds,
              replacements, or order cancellations, please feel free to
              contact our support team.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col">

            <a
              href="mailto:jnjaquadelhi@gmail.com"
              className="flex items-center gap-5 border-b border-white/15 py-5 transition hover:pl-2"
            >
              <Mail size={23} className="shrink-0 text-[#a9c8df]" />

              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Email Address</span>
                <span className="text-sm font-medium">
                  jnjaquadelhi@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:+918595776029"
              className="flex items-center gap-5 border-b border-white/15 py-5 transition hover:pl-2"
            >
              <Phone size={23} className="shrink-0 text-[#a9c8df]" />

              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Phone Number</span>
                <span className="text-sm font-medium">
                  +91 85957 76029
                </span>
              </div>
            </a>

            <a
              href="tel:+919315556737"
              className="flex items-center gap-5 border-b border-white/15 py-5 transition hover:pl-2"
            >
              <Phone size={23} className="shrink-0 text-[#a9c8df]" />

              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Alternative Contact</span>
                <span className="text-sm font-medium">
                  +91 93155 56737
                </span>
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

        .policy-content ol {
          line-height: 1.8;
          margin: 12px 0;
        }
      `}</style>

    </main>
  );
};

export default ReturnRefundPolicy;
