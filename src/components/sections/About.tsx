import { AnimatedSection } from "@/components/AnimatedSection";
import { Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 01 — Who We Are</span>
          <h2 className="section-headline">An Integrated Complex Formulation R&D Platform</h2>
          <p className="section-body mb-6">
            India has built one of the world's most respected pharmaceutical industries —
            a global force in generics manufacturing, exports, and affordable medicine
            supply. Yet in a specific, critical band of formulations — liposomal
            injectables, nano-iron therapies, sterile ophthalmics, peptide systems —
            domestic development capability has not yet kept pace with demand.
          </p>
          <p className="section-body mb-6">
            These are the medicines that hospitals depend on most. They are also the
            formulations most import-dependent, most technically demanding, and least
            served by existing Indian R&D infrastructure.
          </p>
          <p className="section-body mb-6">
            Lyosha Research Centre (LRC) is an integrated complex formulation R&D
            platform, purpose-built for exactly this space. We develop, document, and
            transfer the formulations that require rare scientific infrastructure,
            sustained expertise, and precision at every stage — from early pre-formulation
            through to validated tech transfer and global filings.
          </p>
          <p className="section-body mb-12">
            We are not a generalist CRO. We do not spread across categories.
            We go deep — into the formulation problems that most platforms cannot
            attempt, and we build assets that last: validated processes, defensible IP,
            and technology packages ready for Indian manufacturers and global markets.
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
                To build one of India's most capable and globally respected centres for
                complex pharmaceutical formulation and development — enabling the nation to
                lead in complex, critical, and high-value generics through advanced and
                novel drug delivery systems. A platform where scientific rigour and
                commercial discipline work together.
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
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Develop high-barrier formulations in categories with limited domestic supply and high unmet clinical and commercial demand</li>
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Build India's specialised capability in sterile injectables, ophthalmics, liposomal systems, peptides, and nano-delivery — complementing the nation's existing generic strengths</li>
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Support domestic manufacturers through validated technology transfer, dossiers, and end-to-end formulation expertise</li>
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Contribute to reducing import dependence in critical medicine categories and strengthening national drug security</li>
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Build a scalable, multi-revenue R&D business through licensing, exports, co-development, and regulated-market filings</li>
                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Develop skilled scientific talent at the intersection of formulation science, regulatory affairs, and IP strategy</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
