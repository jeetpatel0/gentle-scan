import { AnimatedSection } from "@/components/AnimatedSection";
import { Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 01 — Who We Are</span>
          <h2 className="section-headline">An Integrated Complex Formulation R&D Platform</h2>
          <p className="section-body mb-12">
            India commands global leadership in generics. But in a specific and important band of
            formulations — liposomal injectables, nano-iron therapies, sterile ophthalmics, peptide
            systems — domestic development capability has not yet kept pace with demand. These
            medicines are among the most needed, and among the most import-dependent.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="stat-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To build one of India's most capable and globally respected centres for complex
                pharmaceutical formulation and development — contributing to the nation's leadership
                in complex, critical, and high-value generics through advanced and novel drug delivery systems.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="stat-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Develop high-barrier formulations in categories with limited domestic supply</li>
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Build specialised capability in sterile injectables, ophthalmics, liposomal, peptides, and nano-delivery</li>
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Support domestic manufacturers through technology transfer and formulation expertise</li>
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Contribute to reducing import dependence in critical medicine categories</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
