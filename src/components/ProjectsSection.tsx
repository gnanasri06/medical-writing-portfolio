import { projects, BP } from '@/lib/data'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <p className="text-xs font-semibold text-[#5B6770] uppercase tracking-[0.14em] mb-4">
          Projects
        </p>
        <h2
          className="font-[300] text-[#0A1317] mb-4 leading-[1.21] max-w-2xl"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          A curated body of work across science, strategy, and communication.
        </h2>
        <p className="text-[15px] text-[#5B6770] mb-14 max-w-xl">
          12 projects spanning medical education, patient engagement, scientific documentation,
          and pharma marketing. Click any card to view the PDF sample.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`${BP}/projects/${project.slug}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 bg-white border border-[#E9EBED] rounded-2xl hover:border-[#DADDE1] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-200"
            >
              {/* Chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F5F7FA] text-[#5B6770] text-[11px] font-semibold">
                  {project.category}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F5F7FA] text-[#5B6770] text-[11px] font-semibold">
                  {project.audience}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[rgba(0,100,224,0.07)] text-[#0064E0] text-[11px] font-semibold">
                  {project.documentType}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-[500] text-[#0A1317] leading-[1.4] mb-3 flex-1">
                {project.title}
              </h3>

              {/* Caption */}
              <p className="text-[13px] text-[#5B6770] leading-[1.5] mb-5">
                {project.caption}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-[#0064E0] text-sm font-bold mt-auto group-hover:gap-2.5 transition-all duration-150">
                <span>View PDF</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
