import { AnimatedSection } from "@/components/AnimatedSection";
import { Beaker, Microscope, Atom, ShieldCheck, FlaskConical, Search } from "lucide-react";

const platforms = [
  "Liposomal systems and nano-delivery platforms",
  "Injectable emulsions, suspensions, and colloidal solutions",
  "Peptide injectables and depot / long-acting release systems",
  "Complex liquid injectables — demanding in stability and scale-up",
  "Ophthalmic and otic formulations — solutions, suspensions, and gels",
];

const capabilities = [
  {
    icon: Atom,
    area: "Liposomal Engineering",
    detail: "Lipid chemistry, encapsulation efficiency, sterilisation challenges, scale-up dynamics",
  },
  {
    icon: Microscope,
    area: "Ophthalmic Rheology",
    detail: "Particle size control, viscosity management, micronisation, milling, sterility assurance",
  },
  {
    icon: Beaker,
    area: "Nano & Emulsion Systems",
    detail: "Colloidal stability, autoclaving resistance, microfluidisation, physicochemical profiling",
  },
  {
    icon: ShieldCheck,
    area: "Sterile Oncology",
    detail: "Cytotoxic containment, solubilisation, EU/US-compliant process and documentation",
  },
  {
    icon: FlaskConical,
    area: "PK Matching & 505(b)(2)",
    detail: "Q1/Q2/Q3 equivalence design, release kinetics, alternative regulatory pathway strategy",
  },
  {
    icon: Search,
    area: "IP-Bypass Formulation",
    detail: "Freedom-to-operate redesign, route alternatives, Para-IV and patent challenge strategy",
  },
];

export function Capability() {
  return (
    <section id="capability" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 03 — Our Capability</span>
          <h2 className="section-headline">A Formulation R&D Platform Built for Specialised Problems</h2>
          <p className="section-body mb-4">
            LRC concentrates on the formulation categories currently served by fewer
            than 3% of Indian pharmaceutical companies. This focus is deliberate. Depth
            in a narrow domain creates more defensible capability, more valuable IP,
            and more durable client relationships than breadth across commodity categories.
          </p>
          <p className="section-body mb-12">
            Our role is to complement India's existing generic strengths — not to
            compete with them. We are the scientific infrastructure that Indian
            manufacturers need to move into complex, high-value formulations.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection delay={0.1}>
            <h3 className="font-serif text-xl font-semibold mb-6">Formulation Platforms</h3>
            <ul className="space-y-3">
              {platforms.map((p, i) => (
                <li key={i} className="flex gap-3 items-start text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="font-serif text-xl font-semibold mb-6">R&D Lab Infrastructure</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• HPLC (UV/PDA/RI/ELSD), osmometer, zetasizer, mastersizer</li>
              <li>• High-pressure homogeniser, lyophiliser, biosafety cabinet</li>
              <li>• ICH-compliant stability chambers and photostability chamber</li>
              <li>• Aseptic filling station, autoclave, laminar airflow unit, diafiltration setup</li>
            </ul>
            <p className="text-xs text-muted-foreground/70 mt-4 italic">
              Every instrument has been selected against a specific formulation need — not for optics. The lab is built to solve problems, not to photograph.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <h3 className="font-serif text-xl font-semibold mb-6">Scientific Depth</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c) => (
              <div key={c.area} className="stat-card">
                <c.icon className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-serif font-semibold mb-2">{c.area}</h4>
                <p className="text-xs text-muted-foreground">{c.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
