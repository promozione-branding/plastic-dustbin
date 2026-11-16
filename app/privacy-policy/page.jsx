
"use client"

import React from "react";
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  UserCheck,
  Mail,
  Phone,
} from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "01",
      title: "Information We Collect",
      icon: Database,
      content: (
        <>
          <p>We may collect the following information when you interact with our website or services:</p>
          <ul>
            <li>Name, phone number, and email address.</li>
            <li>Billing and shipping address.</li>
            <li>Order and transaction details.</li>
            <li>Website usage data, including cookies, IP address, and browser information.</li>
          </ul>
        </>
      ),
    },
    {
      id: "02",
      title: "How We Use Your Information",
      icon: UserCheck,
      content: (
        <>
          <p>We use your information to provide better services and improve your experience.</p>
          <ul>
            <li>To process and deliver your orders.</li>
            <li>To communicate order updates and provide customer support.</li>
            <li>To improve our website and services.</li>
            <li>To send important notifications or promotional offers (if opted).</li>
          </ul>
        </>
      ),
    },
    {
      id: "03",
      title: "Data Protection",
      icon: Lock,
      content: (
        <p>
          We implement appropriate technical and organizational security
          measures to protect your personal information from unauthorized
          access, misuse, alteration, or disclosure. However, no method of
          online transmission or electronic storage can be guaranteed
          completely secure.
        </p>
      ),
    },
    {
      id: "04",
      title: "Sharing of Information",
      icon: ShieldCheck,
      content: (
        <>
          <p>We respect your privacy and do not sell or rent your personal information to third parties.</p>
          <ul>
            <li>Information may be shared with trusted service providers, including logistics partners and payment gateways, for order fulfillment.</li>
            <li>Information may be shared when necessary to provide requested services.</li>
            <li>We may disclose information when required by law or legal authorities.</li>
          </ul>
        </>
      ),
    },
    {
      id: "05",
      title: "Cookies",
      icon: Cookie,
      content: (
        <p>
          Our website may use cookies to enhance your browsing experience,
          analyze website traffic, and improve functionality. You can choose
          to disable cookies through your browser settings. Please note that
          disabling cookies may affect certain website features.
        </p>
      ),
    },
    {
      id: "06",
      title: "Your Rights",
      icon: UserCheck,
      content: (
        <>
          <p>Depending on applicable laws, you may have the right to:</p>
          <ul>
            <li>Request access to your personal information.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your personal information, where applicable.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
        </>
      ),
    },
    {
      id: "07",
      title: "Policy Updates",
      icon: ShieldCheck,
      content: (
        <p>
          We may update this Privacy Policy from time to time. Any changes
          will be published on this page with the revised date. We encourage
          visitors to review this page periodically.
        </p>
      ),
    },
  ];

  return (
    <main className="bg-white text-[#202833]">

      {/* Hero */}
      <section className="bg-[#102b46] text-white">
        <div className="mx-auto flex max-w-7xl mt-10 md:mt-30 flex-col gap-8 px-6 py-6 md:px-12 md:py-12">

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#a9c8df]">
            <span className="h-px w-10 bg-[#a9c8df]" />
            Legal Information
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold tracking-tight md:text-7xl">
                Privacy <span className="text-[#8eb9d6]">Policy.</span>
              </h1>

              <p className="max-w-2xl text-sm  text-white/65 md:text-lg">
                At Polywell, your privacy matters to us. Learn how we collect,
                use, and protect your personal information when you interact
                with our website and services.
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
      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 md:px-12 md:py-12">

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#397ba8]">
          Introduction
        </span>

        <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          Your trust is important to us.
        </h2>

        <p className="max-w-4xl text-[15px]  text-gray-600">
          At <strong className="text-[#202833]">Polywell</strong>, we are
          committed to protecting your privacy and maintaining the
          confidentiality of your personal information. This Privacy Policy
          explains what information we collect, how we use it, and the
          measures we take to keep it secure when you use our website
          or services.
        </p>

      </section>

      {/* Privacy Policy Sections */}
      <section className="mx-auto flex max-w-7xl flex-col px-6 pb-10 md:px-12">

        <div className="mb-10 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#397ba8]">
            Privacy Guidelines
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
                className="group flex flex-col gap-5 border-t border-gray-200 py-6 md:flex-row md:gap-6 md:py-6"
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
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {section.title}
                  </h3>

                  <div className="policy-content max-w-3xl text-sm  text-gray-600 md:text-[15px]">
                    {section.content}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </section>

      {/* Contact */}
      <section className="bg-[#102b46] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 md:flex-row md:items-start md:justify-between md:px-12 md:py-12">

          <div className="flex max-w-xl flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a9c8df]">
              Get In Touch
            </span>

            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Have questions about your privacy?
            </h2>

            <p className="text-sm leading-8 text-white/60">
              If you have any questions, concerns, or requests regarding
              this Privacy Policy, feel free to contact our team.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col">

            <a
              href="mailto:info@polywell.co.in"
              className="flex items-center gap-5 border-b border-white/15 py-6 transition hover:pl-2"
            >
              <Mail size={23} className="shrink-0 text-[#a9c8df]" />
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Email Address</span>
                <span className="text-sm font-medium">info@polywell.co.in</span>
              </div>
            </a>

            <a
              href="tel:+918810422935"
              className="flex items-center gap-5 border-b border-white/15 py-6 transition hover:pl-2"
            >
              <Phone size={23} className="shrink-0 text-[#a9c8df]" />
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50">Phone Number</span>
                <span className="text-sm font-medium">+91 88104 22935</span>
              </div>
            </a>

            <a
              href="tel:+919810057441"
              className="flex items-center gap-5 border-b border-white/15 py-6 transition hover:pl-2"
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

      {/* Footer */}
     

      <style jsx global>{`
        .policy-content p {
          margin-bottom: 12px;
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

export default PrivacyPolicy;
