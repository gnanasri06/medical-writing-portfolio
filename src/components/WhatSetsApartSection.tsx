const points = [
  'Strong foundation in both clinical research and medical communication',
  'Ability to handle diverse formats across therapeutic areas',
  'Focus on accuracy, structure, and storytelling',
  'Experience working on agency-driven pharma projects',
  'Consistent delivery of high-quality, submission-ready work',
]

export default function WhatSetsApartSection() {
  return (
    <section className="py-16 md:py-20 bg-white px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#0A1317] rounded-[32px] px-8 md:px-14 lg:px-20 py-14 md:py-20">

          <p className="text-xs font-semibold text-[#5B6770] uppercase tracking-[0.14em] mb-4">
            What Sets Me Apart
          </p>
          <h2
            className="font-[300] text-white mb-12 leading-[1.21] max-w-2xl"
            style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
          >
            Science, strategy, and communication — all three, in the same document.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#0064E0] flex items-center justify-center">
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                    <path
                      d="M1 3.5l2.5 2.5L8 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-sm text-[#C9D0D6] leading-[1.6]">{point}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-[#0064E0] pl-5">
            <p className="text-sm text-[#8A949C] italic leading-[1.7]">
              &ldquo;I believe effective medical writing is not just about information — it&apos;s about
              making the right message reach the right audience, in the right way.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
