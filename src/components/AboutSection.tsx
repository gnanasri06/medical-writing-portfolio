const competencies = [
  'Scientific storytelling',
  'Evidence synthesis',
  'Medical communication strategy',
  'Regulatory writing',
  'KOL engagement content',
]

const expertise = [
  'Cardiology',
  'Diabetes',
  'Dermatology',
  'Respiratory',
  'Gastroenterology',
  'Orthopedics',
  'Ophthalmology',
  'Neurology',
  'Endocrinology',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Label */}
        <p className="text-xs font-semibold text-[#5B6770] uppercase tracking-[0.14em] mb-4">
          About Me
        </p>

        {/* Section headline */}
        <h2
          className="font-[300] text-[#0A1317] mb-14 leading-[1.21] max-w-2xl"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          Science, strategy, and compliance — equally strong in every document I write.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Professional Summary */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-[#0A1317] mb-4">Professional Summary</h3>
            <div className="space-y-4 text-[15px] text-[#3A4750] leading-[1.65]">
              <p>
                I&apos;m Gnanasri, a Certified Medical Writer (CMW) with 4+ years of experience
                turning complex clinical evidence into clear, credible, and client-ready content.
                My work sits where rigorous science meets real communication — and I&apos;ve spent
                my career making sure both sides are equally strong.
              </p>
              <p>
                Through agency partnerships, I&apos;ve developed content delivered for leading
                pharmaceutical brands including Sun Pharma, Dr. Reddy&apos;s, Cipla, Abbott, Lupin,
                Zydus, and Alkem, across more than ten therapeutic areas. My range spans the full
                content lifecycle — an MSL slide deck on a Phase 3 obesity trial one week, a
                clinical compendium on respiratory infections the next, alongside
                comparative-evidence LBLs, patient education booklets, and regulatory protocols
                or informed consent forms.
              </p>
              <p>
                I write for doctors, patients, regulators, and brand teams — adjusting depth,
                tone, and structure for each audience. What sets my work apart is discipline:
                content that is scientifically accurate, properly referenced in Vancouver style,
                structured to ICH-GCP expectations where relevant, and built to clear
                medico-legal and regulatory review without rework.
              </p>
              <p className="font-medium text-[#0A1317]">
                If you need a writer who understands the molecule, the message, and the
                compliance — that&apos;s exactly where I work.
              </p>
            </div>

            {/* My Journey */}
            <h3 className="text-lg font-bold text-[#0A1317] mt-10 mb-4">My Journey</h3>
            <div className="space-y-4 text-[15px] text-[#3A4750] leading-[1.65]">
              <p>
                I started in clinical research, close to the data, the protocols, and the
                realities of how evidence is generated. Over time I realised the bigger gap
                wasn&apos;t in producing science — it was in <em>communicating</em> it. Brilliant
                data too often sat in documents no one could easily use.
              </p>
              <p>
                That pull moved me into medical communication, where I learned to translate the
                same rigorous evidence into formats that actually reach people — decks that arm
                field teams, monographs that anchor a brand, booklets that change patient
                behaviour. Four years and dozens of brands later, I&apos;ve built my craft around
                one belief: scientific accuracy and genuine clarity should never be a trade-off.
              </p>
              <p>
                Today I work with pharma brands and agencies who need exactly that combination —
                content they can trust scientifically and send into the real world with
                confidence.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">

            {/* Core Competencies */}
            <div className="bg-white border border-[#E9EBED] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#0A1317] uppercase tracking-[0.1em] mb-4">
                Core Competencies
              </h3>
              <ul className="space-y-3">
                {competencies.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-[rgba(0,100,224,0.10)] flex items-center justify-center">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path
                          d="M1 3l2 2 4-4"
                          stroke="#0064E0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-[#3A4750] leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Therapeutic Expertise */}
            <div className="bg-white border border-[#E9EBED] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#0A1317] uppercase tracking-[0.1em] mb-4">
                Therapeutic Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[rgba(0,100,224,0.08)] text-[#0064E0]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Do */}
            <div className="bg-white border border-[#E9EBED] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#0A1317] uppercase tracking-[0.1em] mb-3">
                What I Do
              </h3>
              <p className="text-sm text-[#5B6770] leading-[1.6]">
                I specialise in developing high-quality medical content that bridges the gap
                between science, strategy, and communication — educating clinicians, supporting
                product positioning, and simplifying complex information for patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
