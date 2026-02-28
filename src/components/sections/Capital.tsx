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
  { item: "Lab Setup (CAPEX)", amount: "₹2.40 Crore" },
  { item: "Working Capital (OPEX)", amount: "₹4.08 Crore" },
  { item: "Product Development (32 products)", amount: "₹28.83 Crore" },
  { item: "Miscellaneous (~8–10%)", amount: "₹2.00 Crore" },
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
          <p className="section-body mb-14">
            Every rupee deployed is tied to a specific milestone — lab readiness, product development,
            or market entry. No manufacturing capex in early stages.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <AnimatedSection delay={0.1}>
            <div className="stat-card">
              <div className="text-center mb-6">
                <div className="text-3xl font-serif font-bold gradient-text">₹48.38 Crore</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  Total Capital Requirement — 4 Years
                </div>
              </div>
              <div className="space-y-3">
                {components.map((c) => (
                  <div key={c.item} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{c.item}</span>
                    <span className="font-mono font-medium">{c.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="stat-card">
              <h3 className="font-serif text-lg font-semibold mb-6">Capital Allocation</h3>
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
              <p className="text-xs text-muted-foreground">
                Lab build-out, initial products, R&D revenue activation. 18 months, fully milestone-driven.
              </p>
            </div>
            <div className="stat-card">
              <div className="font-mono text-xs text-primary mb-2">Phase 2</div>
              <div className="text-2xl font-serif font-bold mb-2">₹20 Crore</div>
              <p className="text-xs text-muted-foreground">
                Pipeline expansion and R&D engine scaling. 15–20 products, service contracts active.
              </p>
            </div>
            <div className="stat-card">
              <div className="font-mono text-xs text-primary mb-2">Phase 3+</div>
              <div className="text-2xl font-serif font-bold mb-2">Self-Funded</div>
              <p className="text-xs text-muted-foreground">
                International expansion, licensing, regulated-market filings — funded through operating revenues.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 stat-card bg-primary/5">
            <h4 className="font-serif font-semibold mb-2">Grant Funding Note</h4>
            <p className="text-sm text-muted-foreground">
              Non-dilutive grant applications through BIRAC BIG and DBT Ignite are actively being pursued.
              Government grant support directly reduces equity capital burden and extends runway without dilution.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
