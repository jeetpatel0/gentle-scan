import { AnimatedSection } from "@/components/AnimatedSection";
import { FlaskConical, Truck } from "lucide-react";

const engine1 = [
  { title: "Complex FDF Formulation Development", desc: "Specialised development for injectables, ophthalmics, liposomal, nano-formulations, and depot systems." },
  { title: "Full Tech Transfer Execution", desc: "MFR/BMR drafting, CPP/CMA identification, scale-up, PPQ, process validation, and regulatory readiness." },
  { title: "IP-Bypass & Patent Strategy", desc: "Freedom-to-Operate redesign, alternative routes around innovator IP, and 505(b)(2) bridging." },
  { title: "Contract Formulation Outsourcing", desc: "Outsourced R&D function on retainer + milestone structures for Indian and global manufacturers." },
  { title: "Co-Development Arrangements", desc: "Cost-sharing R&D with shared IP or exclusive commercialisation rights." },
  { title: "Tech Transfer Advisory", desc: "Process mapping, scale-up plans, and validation packages — high-margin advisory." },
];

const engine2 = [
  { title: "Loan-License Manufacturing", desc: "In-house developed formulations with exclusive rights — no manufacturing capex." },
  { title: "India Marketing (3 GTM Models)", desc: "Co-branded, hybrid, and distributor-led market entry strategies." },
  { title: "Private & White Label Global Supply", desc: "ROW distributors source under their own or co-branded models." },
  { title: "Licensing & Royalty Income", desc: "Long-term annuity income from ophthalmics, liposomes, oncology, peptides, and nano systems." },
  { title: "Government Tender Business", desc: "Volume-stable supply contracts for iron therapies, oncology, ophthalmics, and critical-care." },
  { title: "Crisis & Shortage Supply", desc: "Priority supply in shortage-flagged categories with premium pricing." },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 04 — Services</span>
          <h2 className="section-headline">Two Revenue Engines. One Integrated Platform.</h2>
          <p className="section-body mb-14">
            LRC operates across two core verticals — R&D services and product ownership — creating
            a resilient, multi-stream business with 19 diversified revenue verticals.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          <AnimatedSection delay={0.1}>
            <div className="stat-card h-full">
              <div className="flex items-center gap-3 mb-2">
                <FlaskConical className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold">Engine 1 — R&D Services</h3>
              </div>
              <p className="font-mono text-[10px] tracking-wider uppercase text-primary/70 mb-6">
                High-Margin · Capability-Driven · Execution-Led
              </p>
              <div className="space-y-4">
                {engine1.map((s) => (
                  <div key={s.title}>
                    <h4 className="text-sm font-semibold font-sans mb-1">{s.title}</h4>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="stat-card h-full">
              <div className="flex items-center gap-3 mb-2">
                <Truck className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold">Engine 2 — Product Ownership</h3>
              </div>
              <p className="font-mono text-[10px] tracking-wider uppercase text-primary/70 mb-6">
                Long-Term · IP-Driven · Recurring Revenue
              </p>
              <div className="space-y-4">
                {engine2.map((s) => (
                  <div key={s.title}>
                    <h4 className="text-sm font-semibold font-sans mb-1">{s.title}</h4>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
