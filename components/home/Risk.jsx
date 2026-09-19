import React from 'react'

export default function Risk() {
  return (
    <>
    
<section
  id="why-us"
  className="bg-[#f5f8f6] py-6 sm:py-12"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Header */}
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25834B]">
        Procurement Risk Mitigation
      </p>

      <h2 className="text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl">
        Reduce risk across your tender supply.
      </h2>

      <p className="mt-3 max-w-xl text-sm md:text-base leading-6 text-gray-800">
        Government and private hospital tenders require reliable delivery,
        consistent product quality and complete documentation. Our process is
        designed to help procurement teams manage these requirements.
      </p>
    </div>

    {/* Main Comparison */}
    <div className="grid overflow-hidden rounded-xl md:grid-cols-2">

      {/* Typical Supplier */}
      <div className="border rounded-xl border-red-500/50 bg-red-200/50 p-6  md:border-r lg:p-8">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm md:text-xl font-semibold text-[#333333]">
              Typical Unorganized Vendor
            </p>

            <p className="mt-1 text-xs md:text-base text-[#888888]">
              Common procurement concerns
            </p>
          </div>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1F1F1] text-sm text-[#777777]">
            ×
          </span>
        </div>

        <div className="space-y-0">

          <div className="border-t border-[#E5E5E5] py-4">
            <p className="text-sm md:text-xl font-medium text-[#333333]">
              Dispatch delays
            </p>
            <p className="mt-1 text-xs md:text-base leading-5 text-[#777777]">
              Raw material availability can affect delivery schedules and
              tender commitments.
            </p>
          </div>

          <div className="border-t border-[#E5E5E5] py-4">
            <p className="text-sm md:text-xl font-medium text-[#333333]">
              Price uncertainty
            </p>
            <p className="mt-1 text-xs md:text-base leading-5 text-[#777777]">
              Changing polymer rates may affect the expected tender margin.
            </p>
          </div>

          <div className="border-t border-[#E5E5E5] py-4">
            <p className="text-sm md:text-xl font-medium text-[#333333]">
              Product consistency
            </p>
            <p className="mt-1 text-xs md:text-base leading-5 text-[#777777]">
              Inconsistent material quality can lead to product rejection.
            </p>
          </div>

          <div className="border-y border-[#E5E5E5] py-4">
            <p className="text-sm xmd:text-xl font-medium text-[#333333]">
              Documentation gaps
            </p>
            <p className="mt-1 text-xs md:text-base leading-5 text-[#777777]">
              Missing certificates or compliance documents can delay
              procurement processes.
            </p>
          </div>

        </div>
      </div>    

      {/* Sangam Plastic */}
      <div className="bg-white border-2 rounded-xl border-green-500 p-6 lg:p-8">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm md:text-xl font-semibold text-[#25834B]">
              Sangam Plastic
            </p>

            <p className="mt-1 text-xs md:text-base text-[#888888]">
              Structured supply approach
            </p>
          </div>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EDF7F1] text-sm text-[#25834B]">
            ✓
          </span>
        </div>

        <div className="space-y-0">

          <div className="border-t border-[#E5E5E5] py-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sm text-[#25834B]">✓</span>

              <div>
                <p className="text-sm md:text-xl font-medium text-[#333333]">
                  Delivery planning
                </p>
                <p className="mt-1 text-xs md:text-base leading-5 text-[#777777]">
                  Dedicated molding capacity helps maintain planned delivery
                  schedules.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] py-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sm text-[#25834B]">✓</span>

              <div>
                <p className="text-sm md:text-xl font-medium text-[#333333]">
                  Tender price validity
                </p>
                <p className="mt-1 text-xs md:text-base leading-5 text-[#777777]">
                  Quote validity can be aligned with the tender execution
                  period.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] py-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sm text-[#25834B]">✓</span>

              <div>
                <p className="text-sm md:text-xl font-medium text-[#333333]">
                  Material strength
                </p>
                <p className="mt-1 text-xs md:text-base leading-5 text-[#777777]">
                  Products are manufactured using the specified material
                  standards for durability and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="border-y border-[#E5E5E5] py-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sm text-[#25834B]">✓</span>

              <div>
                <p className="text-sm md:text-xl font-medium text-[#333333]">
                  Documentation support
                </p>
                <p className="mt-1 text-xs md:text-base leading-5 text-[#777777]">
                  Relevant ISO, CDSCO, GeM and MTC documentation can be
                  provided as required.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom Note */}
    {/* <div className="mt-8 flex flex-col gap-4 border-t border-[#EAEAEA] pt-6 sm:flex-row sm:items-center sm:justify-between">

      <p className="max-w-2xl text-xs leading-5 text-[#777777]">
        A structured procurement process helps reduce avoidable delays,
        documentation issues and quality-related concerns during tender
        execution.
      </p>

      <a
        href="/contact-us"
        className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#25834B] transition hover:text-[#1E6F40]"
      >
        Discuss your requirement
        <span>→</span>
      </a>

    </div> */}

  </div>
</section>


    </>
  )
}
