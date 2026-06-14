const services = [
  {
    id: 'med-comms',
    title: 'Medical Communication',
    subtitle: 'For brand & medical affairs teams who need scientific authority in the field.',
    deliverables: 'MSL/KOL slide decks · clinical compendiums · doctor education materials · scientific newsletters',
    youGet:
      "Field-ready content that positions your molecule with evidence your MSLs and KOLs can stand behind.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M28 7H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8l4 4 4-4h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
          stroke="#0064E0"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 13h14M9 18h9"
          stroke="#0064E0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'sci-writing',
    title: 'Scientific Writing',
    subtitle: 'For teams translating data into clinical conviction.',
    deliverables: 'Case reports · abstracts · evidence-based content · publication-style summaries',
    youGet:
      'Trial and real-world evidence shaped into a narrative clinicians find both rigorous and readable.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="2" width="20" height="28" rx="2" stroke="#0064E0" strokeWidth="1.5" />
        <path
          d="M11 10h10M11 15h10M11 20h6"
          stroke="#0064E0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="23" cy="23" r="4" stroke="#0064E0" strokeWidth="1.5" />
        <path d="M26 26l2.5 2.5" stroke="#0064E0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'reg-writing',
    title: 'Regulatory Writing',
    subtitle: 'For sponsors, CROs, and biotech navigating ethics and submission.',
    deliverables:
      'Clinical study protocols & synopses · informed consent forms (ICFs) · subject information sheets · clinical documents',
    youGet:
      'Documentation aligned to ICH-GCP and structured for ethics-committee and regulatory review.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 3L4 8v8c0 7.4 5.2 14.3 12 16 6.8-1.7 12-8.6 12-16V8L16 3z"
          stroke="#0064E0"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M11 16l3.5 3.5L21 13"
          stroke="#0064E0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'patient-edu',
    title: 'Patient Education',
    subtitle: 'For brands and health teams who need patients to understand and act.',
    deliverables: 'Awareness booklets · disease-education content · explainer-video scripts',
    youGet:
      'Medically accurate material rewritten into language real patients absorb — improving comprehension and trust.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="#0064E0" strokeWidth="1.5" />
        <path
          d="M4 28c0-4.4 3.6-8 8-8h3"
          stroke="#0064E0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 19c1.7-1.7 4.3-1.7 6 0 1.7 1.7 1.7 4.3 0 6L22 31l-6-6c-1.7-1.7-1.7-4.3 0-6 1.7-1.7 4.3-1.7 6 0z"
          stroke="#0064E0"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'pharma-mktg',
    title: 'Pharma Marketing Content',
    subtitle: 'For brand and digital teams who need persuasion grounded in evidence.',
    deliverables:
      'Leave-behind literature (LBLs) · product monographs · newsletters · campaigns · landing pages',
    youGet:
      'Marketing that converts because it\'s credible — claims that hold up, referenced and review-ready.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 28h24" stroke="#0064E0" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="5" y="16" width="5" height="12" rx="1" stroke="#0064E0" strokeWidth="1.5" />
        <rect x="13.5" y="10" width="5" height="18" rx="1" stroke="#0064E0" strokeWidth="1.5" />
        <rect x="22" y="5" width="5" height="23" rx="1" stroke="#0064E0" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <p className="text-xs font-semibold text-[#5B6770] uppercase tracking-[0.14em] mb-4">
          Services
        </p>
        <h2
          className="font-[300] text-[#0A1317] mb-4 leading-[1.21] max-w-2xl"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          Everything you need, framed by what you gain.
        </h2>
        <p className="text-[15px] text-[#5B6770] mb-14 max-w-xl">
          Each service is scoped to a distinct client need. You tell me the format, molecule, and
          audience — I handle everything else.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="flex flex-col p-6 md:p-8 bg-white border border-[#E9EBED] rounded-2xl"
            >
              <div className="mb-5">{svc.icon}</div>
              <h3 className="text-[18px] font-bold text-[#0A1317] mb-1.5 leading-[1.3]">
                {svc.title}
              </h3>
              <p className="text-sm text-[#5B6770] italic mb-3 leading-[1.5]">
                {svc.subtitle}
              </p>
              <p className="text-sm text-[#3A4750] mb-5 leading-[1.5]">{svc.deliverables}</p>
              <div className="mt-auto pt-5 border-t border-[#E9EBED]">
                <p className="text-xs font-bold text-[#5B6770] uppercase tracking-[0.1em] mb-1">
                  You get
                </p>
                <p className="text-sm text-[#1C2B33] leading-[1.5]">{svc.youGet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
