import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Award, Heart, Globe } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Domestic Supply Security", desc: "Developing formulations in specific categories where India currently relies on imported supply — contributing to national drug security for oncology treatments, ophthalmic medicines, and critical-care injectables at the institutional and hospital level." },
  { icon: Award, title: "PLI Scheme Eligibility", desc: "LRC's formulation categories fall directly within the pharmaceutical Production Linked Incentive scheme's targeted product list. Our development pipeline and commercialisation structure is designed to qualify for and access PLI incentives from the outset." },
  { icon: Heart, title: "National Health Mission", desc: "Supporting more affordable domestic access to complex medicines — including oncology and ophthalmic formulations — by building Indian development capability and reducing institutional dependence on costlier imported alternatives." },
  { icon: Globe, title: "Export Leadership", desc: "Contributing to India's ₹130 Bn pharma export target by 2030 through complex generics development, validated technology transfer, dossier licensing, and regulated market filings across LATAM, MENA, CIS, and ASEAN markets." },
];

const bodies = [
  { abbr: "DBT", name: "Department of Biotechnology", type: "Research Grant" },
  { abbr: "BIRAC", name: "Biotechnology Industry Research Assistance Council", type: "Startup Fund (BIG)" },
  { abbr: "DST", name: "Department of Science & Technology", type: "Innovation Grant" },
  { abbr: "CSIR", name: "Council of Scientific & Industrial Research", type: "R&D Partnership" },
  { abbr: "DPIIT", name: "Dept. for Promotion of Industry & Internal Trade", type: "Startup India" },
  { abbr: "MoHFW", name: "Ministry of Health & Family Welfare", type: "Procurement" },
];

export function Government() {
  return (
    <section id="government" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 06 — Government Alignment</span>
          <h2 className="section-headline">Aligned With India's National Pharmaceutical Priorities</h2>
          <p className="section-body mb-12">
            LRC's work is directly aligned with India's national pharmaceutical policy —
            across PLI scheme objectives, the Atmanirbhar Bharat import substitution
            mandate, and the ₹130 Bn pharma export target for 2030. This alignment is
            not incidental — our platform was structured to contribute meaningfully to
            each of these goals from Day 1.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="stat-card flex gap-4 items-start h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <h3 className="font-serif text-xl font-semibold mb-6">Target Funding Bodies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {bodies.map((b) => (
              <div key={b.abbr} className="stat-card text-center">
                <div className="font-mono text-lg font-bold text-primary mb-1">{b.abbr}</div>
                <div className="text-xs text-muted-foreground mb-1">{b.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-primary/60">{b.type}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Non-dilutive grant funding through BIRAC BIG and DBT Ignite is actively
            being pursued to maximise runway and reduce early equity dilution.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <blockquote className="mt-12 border-l-2 border-primary pl-6 italic text-muted-foreground text-lg font-serif">
            "We are building the formulation capability that India's national healthcare security
            requires and that the global market is increasingly demanding."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
