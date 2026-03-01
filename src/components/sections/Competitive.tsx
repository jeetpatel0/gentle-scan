import { AnimatedSection } from "@/components/AnimatedSection";
import { Lock, TrendingDown, Landmark, BarChart3, Feather, Brain } from "lucide-react";

const moats = [
  { icon: Lock, title: "Specialised Technical Focus", desc: "LRC concentrates exclusively on formulation categories served by fewer than 3% of Indian pharmaceutical companies. Depth in a narrow domain creates more defensible capability, stronger IP, and more valuable client relationships than breadth across commodity categories. The technical barrier that limits competition in our space is the same barrier that protects our clients' products once developed." },
  { icon: TrendingDown, title: "De-Risked Development Model", desc: "Known APIs in novel or complex delivery systems — shorter regulatory timelines than new chemical entities, and stronger IP protection than commodity generics. The complex generics pathway is designed to maximise returns per rupee of R&D spend, with defined regulatory routes and manageable development risk." },
  { icon: Landmark, title: "Government Policy Alignment", desc: "Procurement advantages, grant eligibility across six government bodies, and structural policy support through PLI schemes and import substitution mandates. Built into the platform from inception — not added as an afterthought." },
  { icon: BarChart3, title: "Multi-Revenue Architecture", desc: "19 diversified revenue verticals across both engines — creating financial resilience across business cycles and reducing dependence on any single client, product, or revenue stream. Early revenue does not depend on product commercialisation. Long-term value does not depend on service contracts alone." },
  { icon: Feather, title: "Capital-Efficient by Design", desc: "Asset-light in infrastructure, IP-heavy in value. No manufacturing capex in early phases. Loan-licence manufacturing, co-branded market entry, and global partner networks enable market participation without heavy early capital deployment." },
  { icon: Brain, title: "Compounding IP & Know-How", desc: "Alternative formulation pathways, process patents, defensive filings, and Freedom-to-Operate design create an IP position that strengthens over time. In several product categories, this provides a durable competitive position that takes years to replicate — if it can be replicated at all." },
];

const disciplines = [
  "Focused on a limited number of formulation platforms — not scattered product bets across categories",
  "Asset-light, IP-heavy model — manufacturing capex is deferred by design until revenue justifies it",
  "Grant applications in active progress to de-risk early investor capital",
  "Staged funding with milestone gates — capital is released against defined outcomes, not timelines",
  "Every development project has a defined, documented revenue pathway: service fee, licensing, or direct commercialisation",
];

export function Competitive() {
  return (
    <section id="competitive" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 07 — Competitive Position</span>
          <h2 className="section-headline">A Defensible Position — Built on Depth, Not Claims</h2>
          <p className="section-body mb-12">
            Six structural factors that define LRC's position in the complex formulation
            development market. Each one is grounded in design choices already made,
            not future aspirations.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {moats.map((m, i) => (
            <AnimatedSection key={m.title} delay={i * 0.08}>
              <div className="stat-card h-full">
                <m.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-serif text-lg font-semibold mb-2">{m.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="stat-card bg-primary/5">
            <h4 className="font-serif font-semibold mb-4">Discipline and Risk Management</h4>
            <ul className="space-y-2">
              {disciplines.map((d, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <blockquote className="mt-12 border-l-2 border-primary pl-6 italic text-muted-foreground text-lg font-serif">
            "The barrier that limits competition in our categories is the same
            barrier that protects our platform and our clients' products."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
