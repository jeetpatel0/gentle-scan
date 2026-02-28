import { AnimatedSection } from "@/components/AnimatedSection";

const problems = [
  {
    num: "01",
    title: "Capability Concentration",
    desc: "Fewer than 3% of domestic pharma companies have active capability in sterile injectables, ophthalmics, liposomal, or nano-based systems.",
  },
  {
    num: "02",
    title: "Persistent Shortages",
    desc: "USFDA, EMA, and Indian regulators have flagged persistent supply constraints in oncology injectables, sterile hospital injectables, and ophthalmic formulations.",
  },
  {
    num: "03",
    title: "High Technical Barriers",
    desc: "Complex formulations require specialised skill sets: sterile process expertise, IP-bypass design, particle engineering, liposomal encapsulation, and ophthalmic rheology.",
  },
  {
    num: "04",
    title: "No Dedicated Platform at Scale",
    desc: "Indian manufacturers with strong plant infrastructure often lack access to a dedicated formulation development partner for complex generics.",
  },
  {
    num: "05",
    title: "Limited High-Value Market Access",
    desc: "Without deep complex R&D capability, entry into the highest-value generics segments — and the export revenues they represent — remains constrained.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 02 — The Problem</span>
          <h2 className="section-headline">A Specific Capability Gap — With a Clear Commercial Opportunity</h2>
          <p className="section-body mb-12">
            India is the world's pharmacy. But in a narrow band of complex, high-risk formulations,
            development capability has not yet caught up with demand — domestically or globally.
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
            "The challenge in these categories is primarily a capability and depth-of-expertise
            challenge, not just a question of capacity or capital."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
