import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <p className="text-xs font-bold text-[#0064E0] uppercase tracking-[0.14em] mb-4">
          Testimonials
        </p>
        <h2
          className="font-light text-[#0A1317] mb-4 leading-[1.21]"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          What clients and collaborators say.
        </h2>
        <p className="text-[13px] text-[#8A949C] mb-14 flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5" stroke="#DADDE1" strokeWidth="1.2" />
            <path d="M6 4v2.5L7.5 8" stroke="#DADDE1" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Sample testimonials — representative of the work. Real quotes added as they arrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col p-7 bg-white border border-[#E9EBED] rounded-2xl transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] hover:border-[#DADDE1]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FFD33D" aria-hidden="true">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1L1 5.3l4.2-.7L7 1z" />
                  </svg>
                ))}
              </div>

              <p className="text-[15px] text-[#1C2B33] leading-[1.7] flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-[#E9EBED]">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: t.avatarBg, color: t.avatarText }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A1317] leading-tight">{t.role}</p>
                  <p className="text-xs text-[#8A949C] mt-0.5">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
