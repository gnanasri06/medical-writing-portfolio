import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <p className="text-xs font-semibold text-[#5B6770] uppercase tracking-[0.14em] mb-4">
          Testimonials
        </p>
        <h2
          className="font-[300] text-[#0A1317] mb-4 leading-[1.21]"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          What clients and collaborators say.
        </h2>
        <p className="text-[13px] text-[#8A949C] mb-14">
          Sample testimonials — representative of the work. Real quotes added as they arrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col p-6 md:p-8 bg-white border border-[#E9EBED] rounded-2xl"
            >
              {/* Quote mark */}
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                className="mb-4 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M0 20V12C0 8.667 0.833 5.917 2.5 3.75 4.167 1.583 6.583 0.333 9.75 0l1 2C8.417 2.667 7 3.833 6 5.5 5 7.167 4.5 9 4.5 11H9V20H0zm13 0V12c0-3.333.833-6.083 2.5-8.25C17.167 1.583 19.583.333 22.75 0l1 2C21.417 2.667 20 3.833 19 5.5c-1 1.667-1.5 3.5-1.5 5.5H22V20H13z"
                  fill="#E9EBED"
                />
              </svg>

              <p className="text-[15px] text-[#1C2B33] leading-[1.65] flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
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
