"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "99%+",
    label: "On-Time Tender Fulfillment",
    desc: "Aligned production scheduling and dispatch planning for strict institutional deadlines.",
  },
  {
    title: "100%",
    label: "Tender-Ready Documentation",
    desc: "Specification compliance and procurement documentation support for smooth order processing.",
  },
  {
    title: "1,000+",
    label: "Institutional & Government Orders",
    desc: "Orders executed for municipal corporations, healthcare institutions, contractors and distributors.",
  },
  {
    title: "150+",
    label: "OEM & Custom Projects",
    desc: "Customized manufacturing support based on tender specifications and institutional requirements.",
  },
  {
    title: "GeM",
    label: "Approved Products",
    desc: "Products listed for procurement through the Government e-Marketplace.",
  },
  {
    title: "28+",
    label: "States & UTs Served",
    desc: "Pan-India supply supported by coordinated logistics and nationwide dispatch.",
  },
];

export default function Whychoose() {
  return (
    <section className="w-full bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#25834B]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25834B]">
              Why Buyers Trust Us
            </span>
          </div>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-3xl">
            Built for reliable institutional supply.
          </h2>

          <p className="mt-3 max-w-xl text-sm md:text-base leading-6 text-[#666666] sm:text-base">
            Delivering scale, compliance and execution support for government,
            healthcare and institutional procurement.
          </p>
        </motion.div>

        {/* ================= STATS ================= */}
        <div className="border-t border-[#E5E7EB]">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className={`
                  group
                  border-b border-[#E5E7EB]
                  p-6
                  sm:p-7
                  lg:min-h-[210px]
                  lg:p-8
                  ${
                    index % 3 !== 2
                      ? "lg:border-r"
                      : ""
                  }
                `}
              >

                {/* Number */}
                <div className="text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
                  {stat.title}
                </div>

                {/* Green Line */}
                <div className="mt-4 h-px w-7 bg-[#25834B] transition-all duration-300 group-hover:w-12" />

                {/* Label */}
                <h3 className="mt-4 text-sm md:text-base font-semibold leading-5 text-[#252525]">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-sm text-xs leading-5 text-[#777777] sm:text-sm">
                  {stat.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

        {/* ================= BOTTOM NOTE ================= */}


      </div>
    </section>
  );
}