import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    stage: "Stage 0",
    title: "Infrastructure, Team & Capability Build",
    period: "Year 0–1",
    status: "In Execution",
    purpose: "Activate the R&D infrastructure and begin generating early revenue before any product commercialisation or manufacturing commitment is required.",
    activities: [
      "Cleanroom construction, HVAC commissioning, environmental qualification",
      "Procurement and instrument qualification (analytical + formulation)",
      "QMS framework, SOPs, and documentation setup",
      "Core scientific team recruitment and onboarding",
      "Pre-formulation and prototype studies on priority pipeline products",
      "Early revenue from: analytical services, IP advisory, compatibility and stability studies, tech-transfer consulting",
    ],
    outcomes: [
      "R&D platform fully operational",
      "6–8 high-priority formulations in active early-stage development",
      "Initial service revenue established",
      "Grant applications submitted",
    ],
  },
  {
    stage: "Stage 1",
    title: "R&D Service Revenue Activation",
    period: "Year 1–2",
    status: "Planned",
    purpose: "Establish consistent, growing cashflow from specialised formulation services before any product reaches market.",
    activities: [
      "Complex formulation development for external clients: ophthalmics, complex injectables, nano/liposomal systems",
      "Tech transfer and scale-up execution: MFR/BMR, CPP/CMAs, PPQ, validation",
      "Patent-bypass and Freedom-to-Operate formulation engineering",
      "Co-development agreements and CFO contracts with manufacturing partners",
    ],
    outcomes: [
      "12–20 active R&D service engagements",
      "Operating costs covered by service revenue",
      "10–15 in-house formulations in advanced development",
    ],
  },
  {
    stage: "Stage 2",
    title: "Product Commercialisation Launch",
    period: "Year 2–3",
    status: "Planned",
    purpose: "Transition from pure R&D revenue to product-based recurring revenue — without manufacturing capex.",
    activities: [
      "Loan-licence manufacturing for first 8–12 in-house products",
      "LRC brand primary; manufacturer co-branded on packaging",
      "Semi-regulated export filings (Africa, LATAM, CIS, ASEAN)",
      "Registration slot partnerships with ROW distribution partners",
    ],
    outcomes: [
      "8–12 own products commercially launched in India",
      "First significant product revenue stream established",
      "Market entry without salesforce capex — partner distribution activated",
    ],
  },
  {
    stage: "Stage 3",
    title: "International Scale & Licensing",
    period: "Year 3–5",
    status: "Planned",
    purpose: "Multi-country expansion, licensing income activation, and large-volume export contracts.",
    activities: [
      "Registrations in 15–25 ROW markets (LATAM, MENA, CIS, ASEAN, Africa)",
      "Tender participation: oncology, iron therapies, ophthalmics, critical care",
      "API-FDF bundled supply partnerships with strategic manufacturers",
    ],
    outcomes: [
      "Active commercial presence in 20–25 countries",
      "Significant export revenue established",
      "Multiple licensing deals executed",
      "Operational foundation for regulated market entry",
    ],
  },
  {
    stage: "Stage 4",
    title: "Regulated Market Entry & Value Creation",
    period: "Year 4–7",
    status: "Planned",
    purpose: "Enter the highest-margin regulated markets through partnerships, filings, and licensing — the long-term value creation phase for investors.",
    activities: [
      "505(b)(2) filings for ophthalmics, liposomes, nano-emulsions, peptides",
      "Complex ANDA submissions; strategic EU/US/TGA/NMPA dossier filings",
      "Out-licensing and royalty-based commercialisation with regulated market partners",
    ],
    outcomes: [
      "Long-term annuity-type licensing revenue",
      "Significant platform valuation uplift",
      "Established credibility across regulated markets globally",
      "Investor partial-exit opportunities available",
    ],
  },
];

export function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="roadmap" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 09 — Development Roadmap</span>
          <h2 className="section-headline">A Milestone-Driven Build — Phased, Fundable, and In Motion</h2>
          <p className="section-body mb-14">
            Each stage below has a defined purpose, specific activities, and clear
            measurable outcomes. Progress between stages is milestone-gated — not
            time-gated. Capital is deployed against defined outcomes, not calendars.
          </p>
        </AnimatedSection>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {stages.map((s, i) => (
              <AnimatedSection key={s.stage} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-20">
                  {/* Dot */}
                  <motion.div
                    className={`absolute left-2.5 md:left-6.5 w-3 h-3 rounded-full border-2 ${
                      s.status === "In Execution" ? "bg-primary border-primary" : "bg-background border-primary/40"
                    }`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  />
                  <div className="stat-card">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs tracking-wider text-primary">{s.stage}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{s.period}</span>
                      {s.status === "In Execution" && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          Active
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.purpose}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-wider text-primary/70 mb-2">Activities</h4>
                        <div className="space-y-1">
                          {s.activities.map((a) => (
                            <div key={a} className="flex gap-2 text-xs text-muted-foreground">
                              <span className="text-primary/50 mt-0.5 shrink-0">•</span>
                              <span>{a}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-wider text-primary/70 mb-2">Outcomes</h4>
                        <div className="space-y-1">
                          {s.outcomes.map((o) => (
                            <div key={o} className="flex gap-2 text-xs text-muted-foreground">
                              <span className="text-primary mt-0.5 shrink-0">→</span>
                              <span>{o}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
