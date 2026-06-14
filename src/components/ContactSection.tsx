export default function ContactSection() {
  return (
    <section id="contact" className="py-14 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <div>
            <p className="text-xs font-bold text-[#0064E0] uppercase tracking-[0.14em] mb-4">
              Contact
            </p>
            <h2
              className="font-medium text-[#0A1317] mb-5 leading-[1.18]"
              style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
            >
              Let&apos;s create impactful medical content together.
            </h2>
            <p className="text-[15px] text-[#3A4750] leading-[1.7] mb-10">
              If you&apos;re looking for a medical writer who understands both science and strategy,
              I&apos;d love to hear about your project. Send me the format, molecule/topic, and
              audience — I&apos;ll outline how I&apos;d approach it.
            </p>

            {/* Cobalt CTA */}
            <a
              href="mailto:gnanasri06@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 rounded-full bg-[#0064E0] text-white text-sm font-bold hover:bg-[#0143B5] transition-all duration-200 hover:gap-3"
              style={{ minHeight: 52 }}
            >
              Let&apos;s Collaborate
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: links */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#F5F7FA] border border-[#E9EBED] rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-[11px] font-bold text-[#5B6770] uppercase tracking-[0.12em]">
                Reach Me On
              </p>

              {/* Email */}
              <a
                href="mailto:gnanasri06@gmail.com"
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-xl bg-[rgba(0,100,224,0.08)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,100,224,0.14)] transition-colors">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
                    <rect x="1" y="1" width="14" height="12" rx="2" stroke="#0064E0" strokeWidth="1.3" />
                    <path d="M1 4l7 5 7-5" stroke="#0064E0" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-[#8A949C] uppercase tracking-wide mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-[#0A1317] group-hover:text-[#0064E0] transition-colors">
                    gnanasri06@gmail.com
                  </p>
                </div>
              </a>

              <div className="h-px bg-[#E9EBED]" />

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gnanasri-baskar-508441237/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-xl bg-[rgba(0,100,224,0.08)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,100,224,0.14)] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1" y="1" width="14" height="14" rx="2" stroke="#0064E0" strokeWidth="1.3" />
                    <path d="M4 6.5v5M4 4.5v.01M7.5 11.5V9c0-1.4.7-2.5 2-2.5s2 1.1 2 2.5v2.5M7.5 6.5v5" stroke="#0064E0" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-[#8A949C] uppercase tracking-wide mb-0.5">LinkedIn</p>
                  <p className="text-sm font-semibold text-[#0A1317] group-hover:text-[#0064E0] transition-colors">
                    gnanasri-baskar
                  </p>
                </div>
              </a>

              {/* Upwork & Fiverr — hidden, add URLs when ready */}
              {/*
              <div className="h-px bg-[#E9EBED]" />
              <div className="flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-3 group">
                  <span className="w-10 h-10 rounded-xl bg-[rgba(0,100,224,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" stroke="#0064E0" strokeWidth="1.3" />
                      <path d="M5 8.5C5 6.5 6.3 5 8 5s3 1.5 3 3.5c0 1-.4 1.9-1 2.5" stroke="#0064E0" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold text-[#8A949C] uppercase tracking-wide mb-0.5">Upwork</p>
                    <p className="text-xs text-[#8A949C]">Add your URL</p>
                  </div>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-3 group">
                  <span className="w-10 h-10 rounded-xl bg-[rgba(0,100,224,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 9h8M8 4v9" stroke="#0064E0" strokeWidth="1.3" strokeLinecap="round" />
                      <circle cx="11" cy="4" r="1" fill="#0064E0" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold text-[#8A949C] uppercase tracking-wide mb-0.5">Fiverr</p>
                    <p className="text-xs text-[#8A949C]">Add your URL</p>
                  </div>
                </a>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
