const points = [
  'Strong foundation in both clinical research and medical communication',
  'Ability to handle diverse formats across therapeutic areas',
  'Focus on accuracy, structure, and storytelling',
  'Experience working on agency-driven pharma projects',
  'Consistent delivery of high-quality, submission-ready work',
  'Strategic approach aligned with business goals and communication objectives',
]

export default function WhatSetsApartSection() {
  return (
    <section className="py-14 md:py-16 bg-white px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        <p className="text-xs font-bold text-[#0064E0] uppercase tracking-[0.14em] mb-4">
          What Sets Me Apart
        </p>
        <h2
          className="font-light text-[#0A1317] mb-4 leading-[1.21] max-w-2xl"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          Science, strategy, and communication — all three, in the same document.
        </h2>
        <p className="text-[15px] text-[#5B6770] mb-14 max-w-xl">
          Every engagement is built on the same foundation: clinical precision, clear structure,
          and content that earns its place in your workflow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 bg-white border border-[#E9EBED] rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#DADDE1]"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(0,100,224,0.08)] flex items-center justify-center mt-0.5">
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
                  <path
                    d="M1.5 5.5l3.5 3.5L12.5 1"
                    stroke="#0064E0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] text-[#1C2B33] leading-[1.6]">{point}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 border-l-2 border-[#0064E0] pl-6">
          <p className="text-[14px] md:text-[15px] text-[#3A4750] italic leading-[1.6] whitespace-normal lg:whitespace-nowrap">
            &ldquo;I believe effective medical writing is not just about information — it&apos;s about making the right message reach the right audience, in the right way.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
