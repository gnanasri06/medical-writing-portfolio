const competencies = [
  'Scientific storytelling',
  'Evidence synthesis',
  'Medical communication strategy',
  'Regulatory writing',
  'KOL engagement content',
]

const expertise = [
  'Cardiology',
  'Endocrinology',
  'Dermatology',
  'Respiratory Medicine',
  'Gastroenterology',
  'Orthopedics',
  'Ophthalmology',
  'Neurology',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-16 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <p className="text-xs font-bold text-[#0064E0] uppercase tracking-[0.14em] mb-4">
          About Me
        </p>
        <h2
          className="font-light text-[#0A1317] mb-12 leading-[1.21] max-w-2xl"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          Science, strategy, and compliance — equally strong in every document I write.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Professional Summary — left */}
          <div className="lg:col-span-7">
            <h3 className="text-[13px] font-bold text-[#0064E0] uppercase tracking-[0.1em] mb-5">
              Professional Summary
            </h3>
            <div className="space-y-4 text-[15px] text-[#3A4750] leading-[1.75]">
              <p>
                I&apos;m Gnanasri, a Certified Medical Writer (CMW) with 4+ years of experience
                turning complex clinical evidence into clear, credible, and client-ready content.
                My work sits where rigorous science meets real communication — and I&apos;ve spent
                my career making sure both sides are equally strong.
              </p>
              <p>
                Through agency partnerships, I&apos;ve developed content for leading pharmaceutical
                brands including Sun Pharma, Dr. Reddy&apos;s, Cipla, Abbott, Lupin, Zydus, and
                Alkem, across more than ten therapeutic areas.
              </p>
              <p>
                I write for doctors, patients, regulators, and brand teams — adjusting depth, tone,
                and structure for each audience. Content that is scientifically accurate, properly
                referenced in Vancouver style, structured to ICH-GCP expectations where relevant,
                and built to clear medico-legal review without rework.
              </p>
              <p className="italic text-[#0A1317] text-[16px]">
                If you need a writer who understands the molecule, the message, and the compliance
                — that&apos;s exactly where I work.
              </p>
            </div>
          </div>

          {/* Cards — right */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Core Competencies */}
            <div className="bg-white border border-[#E9EBED] rounded-2xl p-6">
              <h3 className="text-[11px] font-bold text-[#5B6770] uppercase tracking-[0.12em] mb-4">
                Core Competencies
              </h3>
              <ul className="space-y-3">
                {competencies.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 mt-[3px] rounded-full bg-[rgba(0,100,224,0.1)] flex items-center justify-center">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3l2 2 4-4" stroke="#0064E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[14px] text-[#3A4750] leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Therapeutic Expertise */}
            <div className="bg-white border border-[#E9EBED] rounded-2xl p-6">
              <h3 className="text-[11px] font-bold text-[#5B6770] uppercase tracking-[0.12em] mb-4">
                Therapeutic Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-semibold bg-[rgba(0,100,224,0.07)] text-[#0064E0] border border-[rgba(0,100,224,0.12)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
