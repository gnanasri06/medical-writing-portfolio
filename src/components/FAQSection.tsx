'use client'

import { useState } from 'react'
import { faqs } from '@/lib/data'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <p className="text-xs font-semibold text-[#5B6770] uppercase tracking-[0.14em] mb-4">
          FAQ
        </p>
        <h2
          className="font-[300] text-[#0A1317] mb-14 leading-[1.21] max-w-xl"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          Everything you might want to know before we start.
        </h2>

        <div className="max-w-3xl flex flex-col gap-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="border border-[#E9EBED] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-[500] text-[#0A1317] leading-[1.4]">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#DADDE1] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="#5B6770"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="accordion-body"
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-5 text-[15px] text-[#3A4750] leading-[1.65]">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
