import { AnimatedSection } from "@/components/AnimatedSection";

const problems = [
  {
    num: "01",
    title: "Development Capability in Complex Formulations Remains Concentrated",
    desc: "Most Indian pharmaceutical companies have historically focused on oral solid dosages and simple injectables — categories where India has rightly built world-class manufacturing scale. Fewer than 3% of domestic pharma companies have active development capability in sterile injectables, ophthalmics, liposomal, or nano-based systems.",
  },
  {
    num: "02",
    title: "Documented Global and Domestic Shortages Persist",
    desc: "USFDA, EMA, and Indian regulators have flagged persistent supply constraints in oncology injectables, sterile hospital products, and ophthalmic formulations. These are not temporary supply disruptions — they reflect a structural deficit between growing clinical demand and available development and manufacturing capability.",
  },
  {
    num: "03",
    title: "High Technical and IP Barriers Limit Entry — and Protect Those Who Enter",
    desc: "Complex formulations require specialised expertise across sterile process design, particle engineering, IP-bypass formulation, liposomal encapsulation, PK matching, and ophthalmic rheology. These capabilities take years and significant investment to build — which is precisely why the market remains underserved, and why a credible platform in this space carries a durable competitive position.",
  },
  {
    num: "04",
    title: "Indian Manufacturers Lack a Dedicated Complex Formulation Partner at Global Standards",
    desc: "Many Indian manufacturers have strong plant infrastructure but limited in-house capability for complex formulation R&D. A platform that can develop, validate, document, and tech-transfer these products — at the standard required for ANDA, 505(b)(2), or regulated market filings — does not yet exist at scale in India.",
  },
  {
    num: "05",
    title: "This Gap Limits India's Participation in High-Value Regulated Markets",
    desc: "The fastest-growing and highest-margin segments of global pharma are precisely where domestic R&D depth is currently weakest. Closing this gap is both a national priority and a significant commercial opportunity.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 02 — The Problem</span>
          <h2 className="section-headline">A Specific Capability Gap — With a Clear Commercial Opportunity</h2>
          <p className="section-body mb-4">
            India is the world's pharmacy. But in a narrow and important band of
            complex, high-barrier formulations, development capability has not yet
            caught up with demand — domestically or globally.
          </p>
          <p className="section-body mb-12">
            This is not a reflection on Indian pharmaceutical ambition. It is a structural
            reality: these formulation categories require rare scientific infrastructure,
            years of domain-specific expertise, and significant IP navigation capability
            that takes time to build. The opportunity — and the responsibility — lies in
            closing that gap now, as global demand for these categories accelerates.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {problems.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.08}>
              <div className="stat-card flex gap-6 items-start">
                <span className="font-mono text-2xl font-bold text-primary/30 shrink-0">{p.num}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <blockquote className="mt-12 border-l-2 border-primary pl-6 italic text-muted-foreground text-lg font-serif">
            "The challenge in these categories is primarily one of specialised
            capability and infrastructure depth, not just capacity or capital."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
