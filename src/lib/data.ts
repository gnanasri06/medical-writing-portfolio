export const BP = '/medical-writing-portfolio'

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  audience: string
  documentType: string
  caption: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'tirzepatide-obesity-msl-deck',
    title: 'Tirzepatide for Obesity — SURMOUNT-1 MSL Slide Deck',
    category: 'Medical Communication',
    audience: 'Doctors / MSLs',
    documentType: 'MSL Slide Deck',
    caption:
      'Equip MSLs to communicate a landmark obesity trial to specialists · Doctors/MSLs · Lead medical writer',
  },
  {
    id: 2,
    slug: 'cap-ars-clinical-compendium',
    title: 'Community-Acquired Pneumonia & Acute Rhinosinusitis — Clinical Compendium',
    category: 'Medical Communication',
    audience: 'Doctors',
    documentType: 'Clinical Compendium',
    caption:
      'Build a reference-grade clinical resource on respiratory infections · Doctors · Lead writer & researcher',
  },
  {
    id: 3,
    slug: 'iron-deficiency-heart-failure-case-report',
    title: 'Correcting Iron Deficiency in Heart Failure — Clinical Case Report',
    category: 'Scientific Writing',
    audience: 'Doctors',
    documentType: 'Case Report',
    caption:
      'Demonstrate real-world impact of IV iron in heart failure · Doctors · Lead medical writer',
  },
  {
    id: 4,
    slug: 'lipid-times-newsletter',
    title: '"Lipid Times" — Scientific Newsletter (Dyslipidemia & Liver Health)',
    category: 'Medical Communication',
    audience: 'Doctors',
    documentType: 'Scientific Newsletter',
    caption:
      'Engage clinicians with current, evidence-led lipid science · Doctors · Lead writer & editorial designer',
  },
  {
    id: 5,
    slug: 'oral-minoxidil-product-monograph',
    title: 'Oral Minoxidil in Patterned Hair Loss — Product Monograph',
    category: 'Pharma Marketing Content',
    audience: 'Doctors',
    documentType: 'Product Monograph',
    caption:
      'Establish the clinical and mechanistic case for oral minoxidil · Doctors · Lead medical writer',
  },
  {
    id: 6,
    slug: 'statin-comparison-lbl',
    title: 'Choosing the Right Statin — Comparative-Evidence LBL',
    category: 'Pharma Marketing Content',
    audience: 'Doctors',
    documentType: 'Leave-Behind Literature (LBL)',
    caption:
      'Differentiate a statin on referenced head-to-head evidence · Doctors · Lead medical writer',
  },
  {
    id: 7,
    slug: 'endometriosis-video-script',
    title: 'First-Line Therapy for Endometriosis — "Courtroom Debate" Video Script',
    category: 'Patient Education / Med Comms',
    audience: 'Doctors',
    documentType: 'Explainer Video Script',
    caption:
      'Make a therapy comparison engaging without diluting the science · Doctors · Concept & script writer',
  },
  {
    id: 8,
    slug: 'sun-care-awareness-booklet',
    title: '"Halt the Damage" — Patient Sun-Care Awareness Booklet',
    category: 'Patient Education',
    audience: 'Patients',
    documentType: 'Awareness Booklet',
    caption:
      'Drive patient behavior change through clear, accurate skin-health education · Patients · Lead writer',
  },
  {
    id: 9,
    slug: 'tka-protocol-synopsis',
    title: 'Total Knee Arthroplasty Device — Clinical Study Protocol Synopsis',
    category: 'Regulatory Writing',
    audience: 'Regulatory / Sponsor',
    documentType: 'Protocol Synopsis',
    caption:
      'Produce an ethics-ready PMS protocol synopsis for a knee implant · Regulatory · Regulatory medical writer',
  },
  {
    id: 10,
    slug: 'glaucoma-bioequivalence-icf',
    title: 'Glaucoma Bioequivalence Study — Subject Information Sheet & ICF',
    category: 'Regulatory Writing',
    audience: 'Patients / Regulatory',
    documentType: 'Informed Consent Form',
    caption:
      'Write a consent document that is both compliant and genuinely understandable · Patients/Regulatory · Lead writer',
  },
  {
    id: 11,
    slug: 'research-compliance-blog',
    title: 'Top Research-Compliance Challenges Universities Face — Thought-Leadership Blog',
    category: 'Pharma Marketing / B2B Content',
    audience: 'B2B Decision-Makers',
    documentType: 'Long-Form Blog',
    caption:
      'Win B2B trust through data-backed thought leadership · Compliance leaders & PIs · Lead writer & researcher',
  },
  {
    id: 12,
    slug: 'compliance-platform-landing-page',
    title: 'Integrated Research-Compliance Platform — High-Conversion Landing Page',
    category: 'Pharma Marketing / B2B Content',
    audience: 'B2B Buyers',
    documentType: 'Landing Page Copy',
    caption:
      'Convert B2B visitors into demo requests for a compliance platform · B2B buyers · Conversion copywriter',
  },
]

export interface Testimonial {
  id: number
  initials: string
  role: string
  company: string
  quote: string
  avatarBg: string
  avatarText: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: 'BM',
    role: 'Brand Manager, Cardiology Portfolio',
    company: 'Pharma Client',
    quote:
      'Gnanasri consistently delivered content that needed minimal medico-legal revision — rare for a freelance writer. She understood our molecule and our reviewers equally well, and never missed a deadline.',
    avatarBg: '#EBF2FF',
    avatarText: '#0064E0',
  },
  {
    id: 2,
    initials: 'AD',
    role: 'Account Director',
    company: 'Medical Communications Agency',
    quote:
      "We hand her the most format-varied briefs — an MSL deck one week, a patient booklet the next — and the quality holds across all of them. She's our go-to for science-heavy work we can't risk getting wrong.",
    avatarBg: '#EAFAF0',
    avatarText: '#31A24C',
  },
  {
    id: 3,
    initials: 'CP',
    role: 'Consultant Physician',
    company: 'Healthcare Professional',
    quote:
      'The compendium she wrote is something I actually reference in practice. Accurate, well-structured, and clearly written by someone who respects the science.',
    avatarBg: '#FFF8E6',
    avatarText: '#B45309',
  },
]

export interface FAQ {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  {
    q: 'What types of medical writing do you offer?',
    a: 'Medical communication (MSL/KOL decks, compendiums, monographs, newsletters), scientific writing (case reports, abstracts), regulatory writing (protocols, synopses, ICFs, clinical documents), patient education (booklets, scripts, awareness content), and pharma marketing content (LBLs, product monographs, campaigns, landing pages).',
  },
  {
    q: 'Which therapeutic areas do you cover?',
    a: 'Cardiology, diabetes, dermatology, respiratory, gastroenterology, orthopedics, ophthalmology, neurology, and endocrinology. I research new areas quickly when a brief requires it.',
  },
  {
    q: 'Do you write for doctors, patients, or both?',
    a: 'Both — plus regulators. I tier depth, terminology, and tone to the audience, whether it\'s a peer-level MSL deck, a patient awareness booklet, or a GCP-compliant consent form.',
  },
  {
    q: 'How do you ensure scientific accuracy?',
    a: 'Every claim is sourced from primary literature and referenced (Vancouver style by default). Regulatory documents follow ICH-GCP structure. Content is written to pass medico-legal and regulatory review, not just to read well.',
  },
  {
    q: 'What does your process look like?',
    a: 'Brief and scope alignment → research and reference gathering → structured draft → revision against your feedback → final referenced, review-ready file.',
  },
  {
    q: 'Can you work within agency and pharma review workflows?',
    a: "Yes — that's the environment my four years have been built in: writing to brand briefs and delivering content that clears MLR and regulatory review with minimal rework.",
  },
  {
    q: 'How do you handle confidentiality?',
    a: "Happy to work under NDA. Samples shown here are anonymized or sample versions; client-identifying details are never shared.",
  },
  {
    q: 'How do we start?',
    a: "Send me the format, molecule/topic, and audience. I'll outline how I'd approach it, and we can begin with a small paid sample or a defined first deliverable.",
  },
]
