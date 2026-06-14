const services = [
  {
    id: 'med-comms',
    title: 'Medical Communication',
    for: 'For brand & medical affairs teams who need scientific authority in the field.',
    deliverables:
      'MSL/KOL slide decks · clinical compendiums · KOL engagement content · case studies · scientific newsletters · doctor education materials · clinical presentation slides',
    youGet:
      'Field-ready content that positions your molecule with evidence your MSLs and KOLs can stand behind.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M28 7H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8l4 4 4-4h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="#0064E0" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 13h14M9 18h9" stroke="#0064E0" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'sci-writing',
    title: 'Scientific Writing',
    for: 'For teams translating data into clinical conviction.',
    deliverables:
      'Case reports · abstracts · conference posters · publication-style summaries · evidence-based content',
    youGet:
      'Trial and real-world evidence shaped into a narrative clinicians find both rigorous and readable.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="2" width="20" height="28" rx="2" stroke="#0064E0" strokeWidth="1.6" />
        <path d="M11 10h10M11 15h10M11 20h6" stroke="#0064E0" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="23" cy="23" r="4" stroke="#0064E0" strokeWidth="1.6" />
        <path d="M26 26l2.5 2.5" stroke="#0064E0" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'reg-writing',
    title: 'Regulatory & Clinical Writing',
    for: 'For sponsors, CROs, and biotech navigating ethics and submission.',
    deliverables:
      'Clinical study protocols & synopses · Investigator\'s Brochures (IB) · Clinical Study Reports (CSR) · Case Report Forms (CRF) · informed consent forms & subject information sheets · subject diaries · patient narratives · SOPs',
    youGet:
      'Documentation aligned to ICH-GCP and structured for ethics-committee and regulatory review.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 3L4 8v8c0 7.4 5.2 14.3 12 16 6.8-1.7 12-8.6 12-16V8L16 3z" stroke="#0064E0" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 16l3.5 3.5L21 13" stroke="#0064E0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'patient-edu',
    title: 'Patient Education',
    for: 'For brands and health teams who need patients to understand and act.',
    deliverables:
      'Awareness booklets · disease-education content · explainer-video scripts · patient awareness posters',
    youGet:
      'Medically accurate material rewritten into language real patients absorb — improving comprehension and trust.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="#0064E0" strokeWidth="1.6" />
        <path d="M4 28c0-4.4 3.6-8 8-8h3" stroke="#0064E0" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M22 19c1.7-1.7 4.3-1.7 6 0 1.7 1.7 1.7 4.3 0 6L22 31l-6-6c-1.7-1.7-1.7-4.3 0-6 1.7-1.7 4.3-1.7 6 0z" stroke="#0064E0" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'pharma-mktg',
    title: 'Pharma Marketing Content',
    for: 'For brand and digital teams who need persuasion grounded in evidence.',
    deliverables:
      'Leave-behind literature (LBLs) · product monographs · newsletters · inland letters · healthcare landing-page content · brand campaigns',
    youGet:
      'Persuasive, evidence-based content that strengthens brand positioning while remaining scientifically credible and review-ready.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 28h24" stroke="#0064E0" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="5" y="16" width="5" height="12" rx="1" stroke="#0064E0" strokeWidth="1.6" />
        <rect x="13.5" y="10" width="5" height="18" rx="1" stroke="#0064E0" strokeWidth="1.6" />
        <rect x="22" y="5" width="5" height="23" rx="1" stroke="#0064E0" strokeWidth="1.6" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <p className="text-xs font-bold text-[#0064E0] uppercase tracking-[0.14em] mb-4">
          Services
        </p>
        <h2
          className="font-light text-[#0A1317] mb-4 leading-[1.21] max-w-2xl"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          Specialized medical writing across the full content lifecycle.
        </h2>
        <p className="text-[15px] text-[#5B6770] mb-14 max-w-xl">
          Each engagement is scoped to a clear objective — share the format, molecule, and target
          audience, and I deliver content that is accurate, compliant, and ready for use.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="flex flex-col p-6 md:p-7 bg-white border border-[#E9EBED] rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] hover:border-[#DADDE1]"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[rgba(0,100,224,0.08)] flex items-center justify-center mb-5 flex-shrink-0">
                {svc.icon}
              </div>

              <h3 className="text-[17px] font-bold text-[#0A1317] mb-1.5 leading-[1.3]">
                {svc.title}
              </h3>
              <p className="text-sm text-[#5B6770] italic mb-3 leading-[1.5]">{svc.for}</p>
              <p className="text-sm text-[#3A4750] mb-5 leading-[1.55]">{svc.deliverables}</p>

              <div className="mt-auto pt-4 border-t border-[#E9EBED]">
                <p className="text-[10px] font-bold text-[#0064E0] uppercase tracking-[0.12em] mb-1.5">
                  You get
                </p>
                <p className="text-sm text-[#1C2B33] leading-[1.55]">{svc.youGet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
