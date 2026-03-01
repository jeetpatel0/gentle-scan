import { AnimatedSection } from "@/components/AnimatedSection";
import { FlaskConical, Truck } from "lucide-react";

const engine1 = [
  { title: "Complex FDF Formulation Development", desc: "Specialised formulation development for injectables (aqueous, non-aqueous, cytotoxic, critical-care), ophthalmic formulations, liposomal and nano-formulations, complex emulsions, suspensions, and depot systems. Typical engagements run 9–18 months from brief to validated tech transfer." },
  { title: "Full Tech Transfer Execution (End-to-End)", desc: "MFR/BMR drafting, CPP/CMA identification, scale-up and PPQ support, process validation, aseptic simulation, media fills, and on-site regulatory readiness — particularly for ANDA and regulated market submissions." },
  { title: "IP-Bypass & Patent Strategy Services", desc: "Freedom-to-Operate (FTO) redesign, alternative formulation routes around existing innovator IP, release-modification engineering, and 505(b)(2) bridging strategies. Converts seemingly blocked products into viable development opportunities." },
  { title: "Contract Formulation Outsourcing (CFO)", desc: "LRC acts as the dedicated outsourced R&D function for Indian and global formulation manufacturers. Engagements run on retainer + milestone structures and are ring-fenced from LRC's own product portfolio." },
  { title: "Co-Development Arrangements", desc: "Cost-sharing R&D with shared IP or exclusive commercialisation rights, structured for dual-brand or region-specific ownership. Reduces development cost for both parties." },
  { title: "Tech Transfer Advisory (Non-Lab)", desc: "For companies with in-house R&D infrastructure who need external expertise: process mapping, scale-up architecture, and validation packages. High-margin, no formulation lab commitment required." },
];

const engine2 = [
  { title: "Loan-License Manufacturing", desc: "Manufacture of LRC-developed formulations with exclusive commercialisation rights for India and export — no manufacturing capex in early phases. Marketed under LRC's own brand." },
  { title: "India Marketing (Three GTM Models)", desc: "Co-Branded: LRC brand primary with manufacturer's field force. Hybrid: Co-branded launch transitioning to selective internal sales. Distributor-Led: Best suited for tender-driven or high-volume products." },
  { title: "Private Label & White Label Global Supply", desc: "ROW distributors access LRC products under their own, co-branded, or white label models. Applicable across complex injectables in LATAM, MENA, CIS, and ASEAN markets." },
  { title: "Licensing & Royalty Income", desc: "Long-term annuity income from licensing ophthalmics, liposomes, oncology injectables, peptides, and nano/emulsion systems eligible for 505(b)(2) or complex ANDA pathways." },
  { title: "Government & Institutional Tender Business", desc: "Volume-stable, long-term supply contracts for iron replacement therapies, oncology injectables, ophthalmics, and critical-care products across India and global tender procurement bodies." },
  { title: "Crisis & Shortage-Based Supply Contracts", desc: "Priority supply in shortage-flagged injectable categories — where demand is formally guaranteed, contracts often carry premium pricing, and standard registration timelines may be waived." },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 04 — Services</span>
          <h2 className="section-headline">Two Revenue Engines. One Integrated Platform.</h2>
          <p className="section-body mb-4">
            LRC operates across two core revenue verticals — specialised R&D services
            and long-term product ownership. Each is designed to generate independent
            cashflow. Together, they create a resilient, multi-stream business with
            19 diversified revenue verticals across the pharmaceutical value chain.
          </p>
          <p className="section-body mb-14">
            The two-engine model ensures that early revenue is not dependent on product
            commercialisation — and that long-term value is not dependent on service
            contracts alone.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          <AnimatedSection delay={0.1}>
            <div className="stat-card h-full">
              <div className="flex items-center gap-3 mb-2">
                <FlaskConical className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold">Engine 1 — R&D Service Verticals</h3>
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
                <h3 className="font-serif text-xl font-semibold">Engine 2 — Product Ownership & Commercialisation</h3>
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

        <AnimatedSection delay={0.3}>
          <div className="mt-10 stat-card text-center bg-primary/5">
            <div className="text-2xl font-serif font-bold gradient-text mb-1">19</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Diversified Revenue Verticals Across Both Engines
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
