export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">

          <p className="text-xs font-semibold text-[#5B6770] uppercase tracking-[0.14em] mb-4">
            Contact
          </p>
          <h2
            className="font-[500] text-[#0A1317] mb-5 leading-[1.17]"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Let&apos;s work together to create impactful medical content.
          </h2>
          <p className="text-[15px] text-[#3A4750] leading-[1.65] mb-10">
            If you&apos;re looking for a medical writer who understands both science and strategy,
            I&apos;d love to hear about your project. Send me the format, molecule/topic, and
            audience — I&apos;ll outline how I&apos;d approach it.
          </p>
          <p className="text-sm text-[#5B6770] mb-10 italic">
            Typical reply time: within 24 hours.
          </p>

          {/* Contact links */}
          <div className="flex flex-col gap-4 mb-12">
            <a
              href="mailto:gnanasri06@gmail.com"
              className="inline-flex items-center gap-3 text-[15px] text-[#0A1317] font-medium hover:text-[#0064E0] transition-colors duration-150"
            >
              <span className="w-9 h-9 rounded-full bg-white border border-[#E9EBED] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="14" height="12" rx="2" stroke="#5B6770" strokeWidth="1.3" />
                  <path d="M1 4l7 5 7-5" stroke="#5B6770" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
              gnanasri06@gmail.com
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[15px] text-[#0A1317] font-medium hover:text-[#0064E0] transition-colors duration-150"
              title="Add your LinkedIn URL"
            >
              <span className="w-9 h-9 rounded-full bg-white border border-[#E9EBED] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="14" height="14" rx="2" stroke="#5B6770" strokeWidth="1.3" />
                  <path d="M4 6.5v5M4 4.5v.01" stroke="#5B6770" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M7.5 11.5V9c0-1.4.7-2.5 2-2.5s2 1.1 2 2.5v2.5M7.5 6.5v5" stroke="#5B6770" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
              LinkedIn{' '}
              <span className="text-xs text-[#8A949C]">(add your URL)</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[15px] text-[#0A1317] font-medium hover:text-[#0064E0] transition-colors duration-150"
              title="Add your Upwork URL"
            >
              <span className="w-9 h-9 rounded-full bg-white border border-[#E9EBED] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" stroke="#5B6770" strokeWidth="1.3" />
                  <path d="M5 8.5C5 6.5 6.3 5 8 5s3 1.5 3 3.5c0 1-.4 1.9-1 2.5" stroke="#5B6770" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
              Upwork{' '}
              <span className="text-xs text-[#8A949C]">(add your URL)</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[15px] text-[#0A1317] font-medium hover:text-[#0064E0] transition-colors duration-150"
              title="Add your Fiverr URL"
            >
              <span className="w-9 h-9 rounded-full bg-white border border-[#E9EBED] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 9h8M8 4v9" stroke="#5B6770" strokeWidth="1.3" strokeLinecap="round" />
                  <circle cx="11" cy="4" r="1" fill="#5B6770" />
                </svg>
              </span>
              Fiverr{' '}
              <span className="text-xs text-[#8A949C]">(add your URL)</span>
            </a>
          </div>

          {/* Final cobalt CTA */}
          <a
            href="mailto:gnanasri06@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0064E0] text-white text-sm font-bold hover:bg-[#0143B5] transition-colors duration-150"
            style={{ minHeight: 52 }}
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </section>
  )
}
