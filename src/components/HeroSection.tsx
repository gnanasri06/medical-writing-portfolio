import { BP } from '@/lib/data'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Copy */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-semibold text-[#5B6770] uppercase tracking-[0.14em] mb-5">
              Medical Writer &amp; Medical Communication Specialist
            </p>
            <h1
              className="font-[500] text-[#0A1317] mb-6 leading-[1.16]"
              style={{ fontSize: 'clamp(30px, 5.5vw, 64px)' }}
            >
              Transforming Complex Medical Science into Clear, Impactful Communication
            </h1>
            <p className="text-base text-[#3A4750] leading-[1.5] mb-5 max-w-xl mx-auto md:mx-0">
              I help pharma brands, healthcare companies, and medical agencies deliver accurate,
              engaging, and audience-specific content — from scientific materials to patient
              education and regulatory documents.
            </p>
            <p className="text-sm text-[#5B6770] leading-[1.5] mb-10 max-w-lg mx-auto md:mx-0">
              4+ years of experience creating doctor‑ and patient‑facing content for leading
              pharma brands including Sun Pharma, Dr. Reddy&apos;s, Cipla, Abbott, Lupin, Zydus,
              and Alkem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-[30px] rounded-full bg-[#0A1317] text-white text-sm font-bold transition-colors duration-150 hover:bg-[#3A4750]"
                style={{ minHeight: 48, paddingTop: 14, paddingBottom: 14 }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 rounded-full border-2 border-[#0A1317] text-[#0A1317] text-sm font-bold transition-colors duration-150 hover:bg-[#F5F7FA]"
                style={{ minHeight: 48, paddingTop: 12, paddingBottom: 12 }}
              >
                Let&apos;s Collaborate
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-[#E9EBED] bg-[#F5F7FA] flex items-center justify-center">
              <img
                src={`${BP}/profile.jpg`}
                alt="Gnanasri — Medical Writer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-[#8A949C] text-center">
              ← Drop photo at <code className="bg-[#F5F7FA] px-1 rounded">public/profile.jpg</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
