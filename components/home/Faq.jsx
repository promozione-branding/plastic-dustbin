
"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "1. What products does Sangam Plastic Industries Pvt. Ltd. manufacture?",
    answer:
      "We manufacture a wide range of plastic dustbins, hospital dustbins, plastic pedal bins, bio-medical waste bins, wheeled bins, plastic pallets, crates, and sanitation products. Our products serve residential, commercial, industrial, and healthcare sectors across India.",
  },
  {
    question: "2. Are you a certified plastic dustbin manufacturer in India?",
    answer:
      "Yes, we are a trusted plastic dustbin manufacturer in India with decades of experience. Our products are manufactured using high-grade materials, modern machinery, and strict quality control processes.",
  },
  {
    question:
      "3. Do you manufacture hospital dustbins for medical waste disposal?",
    answer:
      "Yes, we are a leading hospital dustbin manufacturer offering bio-medical waste bins designed for hospitals, clinics, and healthcare institutions. Our bins ensure safe disposal, hygiene compliance, and contamination prevention.",
  },
  {
    question: "4. What makes your plastic pedal bins hygienic?",
    answer:
      "Our plastic pedal bins feature a hands-free foot pedal mechanism, reducing direct contact and improving hygiene. They are ideal for hospitals, kitchens, offices, restaurants, and laboratories.",
  },
  {
    question:
      "5. What materials are used in your dustbins and sanitation products?",
    answer:
      "We use virgin plastic, recyclable plastic, food-grade plastic, UV-resistant plastic, stainless steel, mild steel, and impact-resistant materials. All materials are selected to ensure durability, hygiene, and environmental safety.",
  },
  {
    question: "6. Are your products eco-friendly and recyclable?",
    answer:
      "Yes, our products are manufactured using eco-friendly, recyclable materials and non-toxic dyes. We actively promote sustainable manufacturing and responsible waste management.",
  },
  {
    question: "7. Do you provide customized dustbins and bins?",
    answer:
      "Yes, we offer custom sizes, colors, branding, labeling, and design modifications based on customer requirements. Customization is available for corporates, municipalities, hospitals, and bulk buyers.",
  },
  {
    question: "8. Do you handle bulk and wholesale orders?",
    answer:
      "Yes, we specialize in bulk manufacturing and wholesale supply. We serve government bodies, hospitals, schools, corporate offices, hotels, factories, and municipal organizations across India.",
  },
  {
    question: "9. How do you ensure product durability and quality?",
    answer:
      "Every product undergoes strict quality inspections at multiple production stages. We use high-strength materials, advanced molding techniques, and durability testing to ensure long-lasting performance.",
  },
  {
    question:
      "10. Are your hospital bins compliant with healthcare safety standards?",
    answer:
      "Yes, our hospital bins are designed according to healthcare waste management guidelines, ensuring safe segregation, disposal, hygiene, and infection control.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative  bg-[#f5f8f6] py-6 md:py-12">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#147A4C]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#147A4C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid relative items-start gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          {/* =========================================
              LEFT SIDE - STICKY
          ========================================= */}
          <div className="self-start md:sticky md:top-39">
            <div className="rounded-3xl border border-[#147A4C]/10 bg-white p-6 shadow-sm sm:p-5">
              {/* Small Label */}
              <div className="mb-3 inline-flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#147A4C]" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#147A4C]">
                  Need Help?
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-bold leading-tight text-[#10251c] sm:text-5xl ">
                Frequently
                <span className="block text-[#147A4C]">
                  Asked Questions
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-lg text-base leading-7 text-gray-800">
                Find answers to common questions about our plastic products,
                hospital bins, sanitation solutions, customization, and bulk
                orders.
              </p>

              {/* Counter */}
              <div className="mt-8 flex items-center gap-5 rounded-2xl border border-[#147A4C]/10 bg-[#f5f8f6] p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#147A4C] text-white">
                  <HelpCircle className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#10251c]">
                    {String(faqs.length).padStart(2, "0")}
                  </p>

                  <p className="text-sm text-gray-500">
                    Questions answered
                  </p>
                </div>
              </div>

              {/* Bottom Text */}
              
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE - SCROLLS WITH PAGE
          ========================================= */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={false}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#147A4C]/40 bg-white shadow-lg shadow-[#147A4C]/5"
                      : "border-gray-200 bg-white hover:border-[#147A4C]/30 hover:shadow-md"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    {/* Number */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-[#147A4C] text-white"
                          : "bg-[#eef5f1] text-[#147A4C]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 pr-2 text-sm font-semibold leading-6 sm:text-base ${
                        isOpen ? "text-[#147A4C]" : "text-gray-800"
                      }`}
                    >
                      {faq.question.replace(/^\d+\.\s*/, "")}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#147A4C] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pl-[4.75rem]">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-sm leading-7 text-gray-600 sm:text-[15px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
