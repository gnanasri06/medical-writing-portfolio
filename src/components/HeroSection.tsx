import { BP } from '@/lib/data'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center pt-16 bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 700px 500px at 85% 15%, rgba(0,100,224,0.05) 0%, transparent 70%)',
            'radial-gradient(ellipse 500px 400px at 10% 80%, rgba(0,100,224,0.03) 0%, transparent 65%)',
          ].join(', '),
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

          {/* ── Left: copy ── */}
          <div className="flex-1 text-center md:text-left">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,100,224,0.07)] text-[#0064E0] text-[11px] font-bold uppercase tracking-widest mb-8">
              Medical Writer &amp; Medical Communications Specialist
            </div>

            <h1
              className="font-medium text-[#0A1317] mb-5 leading-[1.18]"
              style={{ fontSize: 'clamp(28px, 3.6vw, 48px)' }}
            >
              Transforming Complex Medical Science into Clear, Impactful Communication
            </h1>

            <p className="text-[15px] text-[#3A4750] leading-[1.65] mb-4 max-w-xl mx-auto md:mx-0">
              I help pharma brands, healthcare companies, and medical agencies deliver accurate,
              engaging, and audience-specific content — from scientific materials to patient
              education and regulatory documents.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 rounded-full bg-[#0A1317] text-white text-sm font-bold transition-all duration-200 hover:bg-[#3A4750] hover:gap-3"
                style={{ minHeight: 48 }}
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 rounded-full border border-[#DADDE1] text-[#0A1317] text-sm font-medium transition-all duration-200 hover:border-[#0A1317] hover:bg-[#F5F7FA]"
                style={{ minHeight: 48 }}
              >
                Let&apos;s Collaborate
              </a>
            </div>
          </div>

          {/* ── Right: photo ── */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div
              className="w-52 h-52 md:w-[260px] md:h-[260px] rounded-full overflow-hidden bg-[#EBF3FF] relative flex items-center justify-center"
              style={{ boxShadow: '0 4px 40px rgba(0,100,224,0.12), 0 0 0 1px rgba(0,100,224,0.08)' }}
            >
              <span className="text-[80px] md:text-[96px] font-bold text-[#0064E0] select-none leading-none">
                G
              </span>
              <img
                src={`${BP}/profile.jpg`}
                alt="Gnanasri — Medical Writer"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ color: 'transparent', objectPosition: '50% 12%' }}
              />
            </div>

            {/* Name under photo */}
            <div className="mt-6 text-center">
              <p className="text-[18px] font-bold text-[#0A1317] tracking-[0.06em] leading-tight">
                GNANASRI P B
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
