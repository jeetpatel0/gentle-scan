import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const allocation = [
  { label: "R&D and Lab / CRO Costs", pct: 40 },
  { label: "Regulatory Affairs and IP", pct: 25 },
  { label: "Core Team Salaries", pct: 20 },
  { label: "Operations and Runway", pct: 15 },
];

const components = [
  { item: "Lab Setup (CAPEX — HVAC, Instruments, Electrical, Interiors)", amount: "₹2.40 Crore" },
  { item: "Working Capital (OPEX — HR, Compliance, Utilities, Admin)", amount: "₹4.08 Crore" },
  { item: "Product Development (32 products, lab-scale R&D)", amount: "₹28.83 Crore" },
  { item: "Miscellaneous (contingency ~8–10%)", amount: "₹2.00 Crore" },
];

const disciplines = [
  "Staged deployment with milestone gates — capital is released against defined, measurable outcomes, not dates",
  "No manufacturing capex in early phases — asset-light until revenue justifies the commitment",
  "Focused on a limited number of formulation platforms — no scattered product bets",
  "Every development project has a documented, defined revenue pathway: service fee, licensing, or direct commercialisation",
  "Every rupee deployed is traceable to a specific activity and outcome",
];

function AllocationBar({ pct, delay }: { pct: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-3 rounded-full bg-muted overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-stat-bar"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export function Capital() {
  return (
    <section id="capital" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 10 — Use of Capital</span>
          <h2 className="section-headline">Disciplined, Milestone-Linked Capital Deployment</h2>
          <p className="section-body mb-4">
            Every rupee deployed is tied to a specific milestone — lab readiness,
            product development stage, or market entry gate. No manufacturing capex
            in early stages. The asset-light model ensures maximum R&D output and
            IP creation per rupee raised.
          </p>
          <p className="section-body mb-14">
            The model is not built on optimism. It is built on a sequence: activate
            capability, generate service revenue, build products, commercialise, scale.
            Each step funds the next. External capital accelerates the timeline —
            it does not substitute for execution.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <AnimatedSection delay={0.1}>
            <div className="stat-card">
              <div className="text-center mb-6">
                <div className="text-3xl font-serif font-bold gradient-text">₹48.38 Crore</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  Total Capital Requirement — Across 4 Years
                </div>
              </div>
              <div className="space-y-3">
                {components.map((c) => (
                  <div key={c.item} className="flex justify-between text-sm gap-4">
                    <span className="text-muted-foreground">{c.item}</span>
                    <span className="font-mono font-medium shrink-0">{c.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="stat-card">
              <h3 className="font-serif text-lg font-semibold mb-6">Capital Allocation by Function</h3>
              <div className="space-y-4">
                {allocation.map((a, i) => (
                  <div key={a.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{a.label}</span>
                      <span className="font-mono text-primary">{a.pct}%</span>
                    </div>
                    <AllocationBar pct={a.pct} delay={0.2 + i * 0.1} />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <h3 className="font-serif text-xl font-semibold mb-6">Phase-Wise Capital Ask</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="stat-card">
              <div className="font-mono text-xs text-primary mb-2">Phase 1</div>
              <div className="text-2xl font-serif font-bold mb-2">₹7 Crore</div>
              <p className="text-xs text-muted-foreground mb-3">
                18 months, fully milestone-driven.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex gap-1"><span className="text-primary">→</span> Lab build-out and operational qualification</li>
                <li className="flex gap-1"><span className="text-primary">→</span> Core team onboarded</li>
                <li className="flex gap-1"><span className="text-primary">→</span> First 6–8 products in active development</li>
                <li className="flex gap-1"><span className="text-primary">→</span> Service revenue stream established</li>
              </ul>
            </div>
            <div className="stat-card">
              <div className="font-mono text-xs text-primary mb-2">Phase 2</div>
              <div className="text-2xl font-serif font-bold mb-2">₹20 Crore</div>
              <p className="text-xs text-muted-foreground mb-3">
                Product pipeline expansion.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex gap-1"><span className="text-primary">→</span> 15–20 products in active development</li>
                <li className="flex gap-1"><span className="text-primary">→</span> R&D service contracts active and scaling</li>
                <li className="flex gap-1"><span className="text-primary">→</span> First product commercialisation preparations</li>
              </ul>
            </div>
            <div className="stat-card">
              <div className="font-mono text-xs text-primary mb-2">Phase 3 Onwards</div>
              <div className="text-2xl font-serif font-bold mb-2">Self-Funded</div>
              <p className="text-xs text-muted-foreground mb-3">
                Through operating revenues.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex gap-1"><span className="text-primary">→</span> International expansion and licensing</li>
                <li className="flex gap-1"><span className="text-primary">→</span> Regulated-market filings</li>
                <li className="flex gap-1"><span className="text-primary">→</span> No additional equity required under base projections</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 stat-card bg-primary/5">
            <h4 className="font-serif font-semibold mb-2">Grant Funding — Active Pursuit</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Non-dilutive grant applications through BIRAC BIG and DBT Ignite are
              in active preparation. Government grant support at the early stage
              directly reduces the equity capital burden for investors and extends
              runway without dilution. This is not a plan B — it is a parallel track
              built into the capital strategy from inception.
            </p>
            <h4 className="font-serif font-semibold mb-2">Capital Discipline Commitments</h4>
            <ul className="space-y-1">
              {disciplines.map((d, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
