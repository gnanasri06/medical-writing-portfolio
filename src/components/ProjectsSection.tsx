import { projects, BP } from '@/lib/data'

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Medical Communication':       { bg: 'rgba(0,100,224,0.07)',  text: '#0064E0' },
  'Scientific Writing':          { bg: 'rgba(49,162,76,0.08)',  text: '#217A38' },
  'Regulatory Writing':          { bg: 'rgba(180,83,9,0.08)',   text: '#92400E' },
  'Patient Education':           { bg: 'rgba(109,40,217,0.07)', text: '#6D28D9' },
  'Patient Education / Med Comms': { bg: 'rgba(109,40,217,0.07)', text: '#6D28D9' },
  'Pharma Marketing Content':    { bg: 'rgba(0,100,224,0.07)',  text: '#0064E0' },
  'Pharma Marketing / B2B Content': { bg: 'rgba(0,100,224,0.07)', text: '#0064E0' },
  'B2B Content':                 { bg: 'rgba(133,149,164,0.1)', text: '#5B6770' },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-14 md:py-16 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <p className="text-xs font-bold text-[#0064E0] uppercase tracking-[0.14em] mb-4">
          Projects
        </p>
        <h2
          className="font-light text-[#0A1317] mb-4 leading-[1.21] max-w-2xl"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          A curated body of work across science, strategy, and communication.
        </h2>
        <p className="text-[15px] text-[#5B6770] mb-14 max-w-xl">
          12 projects spanning medical education, patient engagement, scientific documentation,
          and pharma marketing. Click any card to open the PDF sample.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => {
            const catColor = categoryColors[project.category] ?? { bg: 'rgba(0,100,224,0.07)', text: '#0064E0' }
            return (
              <a
                key={project.id}
                href={`${BP}/projects/${project.slug}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 bg-white border border-[#E9EBED] rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:border-[#DADDE1]"
              >
                {/* Project number */}
                <p className="text-[11px] font-bold text-[#C9CDD1] mb-3">
                  {String(project.id).padStart(2, '0')}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: catColor.bg, color: catColor.text }}
                  >
                    {project.category}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F5F7FA] text-[#5B6770] text-[11px] font-semibold">
                    {project.audience}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-semibold text-[#0A1317] leading-[1.45] mb-3">
                  {project.title}
                </h3>

                {/* Doc type */}
                <p className="text-[11px] text-[#8A949C] font-semibold mb-3">
                  {project.documentType}
                </p>

                {/* Overview */}
                <p className="text-[13px] text-[#5B6770] leading-[1.6] mb-3 flex-1">
                  {project.overview}
                </p>

                {/* Skills */}
                <div className="mb-5 pt-3 border-t border-[#F5F7FA]">
                  <p className="text-[10px] font-bold text-[#8A949C] uppercase tracking-[0.1em] mb-1">
                    Skills Demonstrated
                  </p>
                  <p className="text-[12px] text-[#3A4750] leading-[1.55]">
                    {project.skills}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-[#5B6770] text-sm font-bold mt-auto group-hover:gap-3 group-hover:text-[#0064E0] transition-all duration-150">
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
                    <path d="M1 1h7l4 4v10H1V1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M8 1v4h4M4 8h5M4 11h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  <span>View PDF</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-150">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
