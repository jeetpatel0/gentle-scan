import { AnimatedSection } from "@/components/AnimatedSection";
import { Lock, TrendingDown, Landmark, BarChart3, Feather, Brain } from "lucide-react";

const moats = [
  { icon: Lock, title: "Specialised Technical Focus", desc: "Exclusively focused on formulation categories served by <3% of Indian pharma. Depth in a narrow domain creates stronger, more defensible capability than breadth." },
  { icon: TrendingDown, title: "De-Risked Development Model", desc: "Known APIs in novel delivery systems — shorter regulatory timelines than NCEs, stronger IP protection than commodity generics." },
  { icon: Landmark, title: "Government Policy Alignment", desc: "Procurement advantages, grant eligibility across six government bodies, and structural support through PLI schemes." },
  { icon: BarChart3, title: "Multi-Revenue Architecture", desc: "19 diversified revenue verticals — R&D services, tech transfer, licensing, CDMO, tenders, dossier sales, and product commercialisation." },
  { icon: Feather, title: "Capital-Efficient by Design", desc: "Asset-light in infrastructure, IP-heavy in value. No manufacturing capex in early phases. Loan-licence manufacturing and co-branded market entry." },
  { icon: Brain, title: "Compounding IP & Know-How", desc: "Alternative formulation pathways, process patents, defensive filings, and FTO design create an IP position that compounds over time." },
];

export function Competitive() {
  return (
    <section id="competitive" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 07 — Competitive Position</span>
          <h2 className="section-headline">A Defensible, Capital-Efficient Position</h2>
          <p className="section-body mb-12">
            Six structural factors that define LRC's position in the complex formulation development market.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <blockquote className="mt-12 border-l-2 border-primary pl-6 italic text-muted-foreground text-lg font-serif">
            "Every rupee is tied to a defined milestone — lab readiness, specific products,
            or market entry — not abstract R&D spend."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
