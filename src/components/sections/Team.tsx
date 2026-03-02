import { AnimatedSection } from "@/components/AnimatedSection";

const team = [
  {
    name: "Mr. Manavendra Chauhan",
    role: "Co-Founder",
    education: "MS, Regulatory Affairs — Northeastern University, USA",
    responsibility:
      "Responsible for commercialization and expansion through sales, marketing, strategic partnerships and collaborations (India + Global), and internal administration.",
  },
  {
    name: "Mr. Rushabh Shah",
    role: "Co-Founder",
    education: "M.Pharm, Pharmaceutical Chemistry — Nirma University, India",
    responsibility:
      "Responsible for commercialization and expansion through sales and marketing, licensing and business development, branding, and purchase at manufacturing scale (India + Global), and internal administration.",
  },
  {
    name: "Technical Director",
    role: "Partner",
    education: "M.Pharm, Pharmaceutics",
    responsibility:
      "100% technical responsibility — R&D operations, product development, procurement at R&D scale, team building, and new product development initiation and management.",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-muted/30">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Leadership</span>
          <h2 className="section-headline">The Team Behind LRC</h2>
          <p className="section-body mb-12">
            A focused leadership team combining regulatory expertise, pharmaceutical chemistry, and deep formulation science — built to execute from R&D through commercialization.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.15}>
              <div className="stat-card h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-serif text-xl font-bold text-primary">
                    {member.name.charAt(member.name.indexOf(".") + 2) || member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                <span className="font-mono text-[11px] tracking-wider uppercase text-primary mb-2">
                  {member.role}
                </span>
                <p className="text-sm text-muted-foreground mb-3 italic">
                  {member.education}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {member.responsibility}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
