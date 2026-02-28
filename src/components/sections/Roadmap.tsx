import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    stage: "Stage 0",
    title: "Infrastructure & Capability Build",
    period: "Year 0–1",
    status: "In Execution",
    purpose: "Activate R&D infrastructure and begin generating early revenue.",
    outcomes: [
      "R&D platform becomes operational",
      "6–8 high-priority formulations in early development",
      "Initial revenue from consulting and analytical services",
    ],
  },
  {
    stage: "Stage 1",
    title: "R&D Service Revenue Activation",
    period: "Year 1–2",
    status: "Planned",
    purpose: "Build consistent early cashflow using specialised formulation capabilities.",
    outcomes: [
      "12–20 active R&D service contracts",
      "Operating costs covered by service revenue",
      "10–15 formulations in advanced development",
    ],
  },
  {
    stage: "Stage 2",
    title: "Product Commercialisation Launch",
    period: "Year 2–3",
    status: "Planned",
    purpose: "Transition from pure R&D revenue to product-based recurring revenue.",
    outcomes: [
      "8–12 own products commercialised in India",
      "First significant product-based revenue",
      "Market entry without salesforce capex",
    ],
  },
  {
    stage: "Stage 3",
    title: "International Scale & Licensing",
    period: "Year 3–5",
    status: "Planned",
    purpose: "Multi-country expansion, licensing income, and high-volume exports.",
    outcomes: [
      "Active presence in 20–25 countries",
      "Large-volume export revenue",
      "Multiple licensing deals closed",
    ],
  },
  {
    stage: "Stage 4",
    title: "Regulated Market Entry",
    period: "Year 4–7",
    status: "Planned",
    purpose: "Enter high-margin regulated markets — the long-term value creation phase.",
    outcomes: [
      "Long-term annuity-type licensing revenue",
      "Significant valuation uplift",
      "Investor partial-exit opportunities",
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
          <h2 className="section-headline">A Milestone-Driven Build — Phased and Fundable</h2>
          <p className="section-body mb-14">
            Each stage has a defined purpose, specific activities, and clear outcomes.
            Progress is milestone-gated, not time-gated.
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
                    <p className="text-sm text-muted-foreground mb-3">{s.purpose}</p>
                    <div className="space-y-1">
                      {s.outcomes.map((o) => (
                        <div key={o} className="flex gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-0.5">→</span>
                          <span>{o}</span>
                        </div>
                      ))}
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
