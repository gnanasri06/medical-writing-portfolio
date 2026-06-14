export const BP = '/medical-writing-portfolio'

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  audience: string
  documentType: string
  caption: string
  overview: string
  skills: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'tirzepatide-obesity-msl-deck',
    title: 'Tirzepatide for Obesity — SURMOUNT-1 MSL Slide Deck',
    category: 'Medical Communication',
    audience: 'Doctors / MSLs',
    documentType: 'MSL Slide Deck',
    caption: 'Equip MSLs to communicate a landmark obesity trial to specialists · Doctors/MSLs · Lead medical writer',
    overview:
      'A Medical Science Liaison deck distilling the landmark Phase 3 SURMOUNT-1 trial (Tirzepatide, NEJM 2022) into a field-ready scientific narrative — disease burden, the dual GIP/GLP-1 mechanism, study design, endpoints, and results.',
    skills: 'Phase 3 trial distillation · scientific storytelling · visual hierarchy · endocrinology fluency',
  },
  {
    id: 2,
    slug: 'cap-ars-clinical-compendium',
    title: 'Community-Acquired Pneumonia & Acute Rhinosinusitis — Clinical Compendium',
    category: 'Medical Communication',
    audience: 'Doctors',
    documentType: 'Clinical Compendium',
    caption: 'Build a reference-grade clinical resource on respiratory infections · Doctors · Lead writer & researcher',
    overview:
      'A doctor-facing compendium synthesizing epidemiology, disease burden, and pathogenesis across two respiratory infections, integrating global and India-specific data with molecular pathways.',
    skills: 'Multi-source literature synthesis · epidemiology · pathophysiology · structured long-form medical writing',
  },
  {
    id: 3,
    slug: 'iron-deficiency-heart-failure-case-report',
    title: 'Correcting Iron Deficiency in Heart Failure — Clinical Case Report',
    category: 'Scientific Writing',
    audience: 'Doctors',
    documentType: 'Case Report',
    caption: 'Demonstrate real-world impact of IV iron in heart failure · Doctors · Lead medical writer',
    overview:
      'A case report on 1000 mg Ferric Carboxymaltose in a 68-year-old HFrEF patient with newly diagnosed iron deficiency — full presentation, history, clinical course, intervention, and outcome.',
    skills: 'Clinical narrative construction · cardiology & GDMT fluency · evidence-to-outcome framing',
  },
  {
    id: 4,
    slug: 'lipid-times-newsletter',
    title: '"Lipid Times" — Scientific Newsletter (Dyslipidemia & Liver Health)',
    category: 'Medical Communication',
    audience: 'Doctors',
    documentType: 'Scientific Newsletter',
    caption: 'Engage clinicians with current, evidence-led lipid science · Doctors · Lead writer & editorial designer',
    overview:
      'A multi-story scientific newsletter covering India\'s lipid burden, the NAFLD–CVD axis, atherogenic dyslipidemia, dual PPAR-α/γ science (Saroglitazar), and the PRESS V/VI trials.',
    skills: 'Editorial structuring · data visualization · mechanism communication · Vancouver referencing',
  },
  {
    id: 5,
    slug: 'oral-minoxidil-product-monograph',
    title: 'Oral Minoxidil in Patterned Hair Loss — Product Monograph',
    category: 'Pharma Marketing Content',
    audience: 'Doctors',
    documentType: 'Product Monograph',
    caption: 'Establish the clinical and mechanistic case for oral minoxidil · Doctors · Lead medical writer',
    overview:
      'A clinical product monograph on low-dose oral minoxidil — chemistry, history, the compliance limits of topical therapy, multi-pathway mechanism of action (vasodilatory, anti-inflammatory, antiandrogen), and safety.',
    skills: 'Mechanism-of-action writing · comparative safety analysis · deep literature referencing · dermatology fluency',
  },
  {
    id: 6,
    slug: 'statin-comparison-lbl',
    title: 'Choosing the Right Statin — Comparative-Evidence LBL',
    category: 'Pharma Marketing Content',
    audience: 'Doctors',
    documentType: 'Leave-Behind Literature (LBL)',
    caption: 'Differentiate a statin on referenced head-to-head evidence · Doctors · Lead medical writer',
    overview:
      'A leave-behind comparing Pitavastatin, Atorvastatin, and Rosuvastatin across new-onset diabetes risk, lipid/CV protection, renal outcomes, and myopathy — every claim referenced.',
    skills: 'Comparative-evidence framing · claim substantiation · MLR-aware promotional writing',
  },
  {
    id: 7,
    slug: 'endometriosis-video-script',
    title: 'First-Line Therapy for Endometriosis — "Courtroom Debate" Video Script',
    category: 'Medical Communication',
    audience: 'Doctors',
    documentType: 'Explainer Video Script',
    caption: 'Make a therapy comparison engaging without diluting the science · Doctors · Concept & script writer',
    overview:
      'An explainer-video script staging Dienogest vs. Elagolix as a courtroom trial — each "defends" its evidence (FOGSI guidance, ELARIS Phase 3 data) before the doctor delivers the verdict.',
    skills: 'Creative concepting · scientific accuracy under a creative format · gynecology fluency · scriptwriting',
  },
  {
    id: 8,
    slug: 'sun-care-awareness-booklet',
    title: '"Halt the Damage" — Patient Sun-Care Awareness Booklet',
    category: 'Patient Education',
    audience: 'Patients',
    documentType: 'Awareness Booklet',
    caption: 'Drive patient behavior change through clear, accurate skin-health education · Patients · Lead writer',
    overview:
      'A patient education booklet on invisible skin damage — UV/IR/blue-light/pollution mechanisms, common sunscreen mistakes, and corrective behaviors.',
    skills: 'Health-literacy writing · behavior-change messaging · simplifying complex science · dermatology',
  },
  {
    id: 9,
    slug: 'tka-protocol-synopsis',
    title: 'Total Knee Arthroplasty Device — Clinical Study Protocol Synopsis',
    category: 'Regulatory Writing',
    audience: 'Regulatory / Sponsor',
    documentType: 'Protocol Synopsis',
    caption: 'Produce an ethics-ready PMS protocol synopsis for a knee implant · Regulatory · Regulatory medical writer',
    overview:
      'A protocol synopsis for a retrospective post-market surveillance study of a TKA device — design, indications, objectives, endpoints, population, sample-size rationale, and inclusion/exclusion criteria.',
    skills: 'ICH-GCP-aligned protocol writing · study design articulation · regulatory precision · orthopedics',
  },
  {
    id: 10,
    slug: 'glaucoma-bioequivalence-icf',
    title: 'Glaucoma Bioequivalence Study — Subject Information Sheet & ICF',
    category: 'Regulatory Writing',
    audience: 'Patients / Regulatory',
    documentType: 'Informed Consent Form',
    caption: 'Write a consent document that is both compliant and genuinely understandable · Patients/Regulatory · Lead writer',
    overview:
      'A GCP-compliant Subject Information Sheet and ICF for a randomized, double-masked bioequivalence study of Brinzolamide 1% ophthalmic suspension in open-angle glaucoma / ocular hypertension.',
    skills: 'GCP-compliant consent writing · lay risk communication · regulatory completeness · ophthalmology',
  },
  {
    id: 11,
    slug: 'research-compliance-blog',
    title: 'Top Research-Compliance Challenges Universities Face — Thought-Leadership Blog',
    category: 'B2B Content',
    audience: 'B2B Decision-Makers',
    documentType: 'Long-Form Blog',
    caption: 'Win B2B trust through data-backed thought leadership · Compliance leaders & PIs · Lead writer & researcher',
    overview:
      'A long-form, referenced thought-leadership article for VPs of Compliance and Principal Investigators on operational compliance bottlenecks and automated governance solutions.',
    skills: 'Long-form research · data-driven argumentation · B2B/healthtech fluency · SEO-aware structure',
  },
  {
    id: 12,
    slug: 'compliance-platform-landing-page',
    title: 'Integrated Research-Compliance Platform — High-Conversion Landing Page',
    category: 'B2B Content',
    audience: 'B2B Buyers',
    documentType: 'Landing Page Copy',
    caption: 'Convert B2B visitors into demo requests for a compliance platform · B2B buyers · Conversion copywriter',
    overview:
      'Conversion-focused landing-page copy for a B2B research-compliance SaaS platform — problem framing, benefit-led feature blocks, and a single demo CTA.',
    skills: 'Conversion copywriting · benefit framing · message hierarchy · CTA design',
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
    a: 'Cardiology, endocrinology, dermatology, respiratory medicine, gastroenterology, orthopedics, ophthalmology, and neurology. I research new areas quickly when a brief requires it.',
  },
  {
    q: 'Do you write for doctors, patients, or both?',
    a: "Both — plus regulators. I tier depth, terminology, and tone to the audience, whether it's a peer-level MSL deck, a patient awareness booklet, or a GCP-compliant consent form.",
  },
  {
    q: 'How do you ensure scientific accuracy?',
    a: 'Every claim is sourced from primary literature and referenced (Vancouver style by default). Regulatory documents follow ICH-GCP structure. Content is written to pass medico-legal and regulatory review, not just to read well.',
  },
  {
    q: 'How do you handle confidentiality?',
    a: "Happy to work under NDA. Samples shown here are anonymized or sample versions; client-identifying details are never shared.",
  },
]
