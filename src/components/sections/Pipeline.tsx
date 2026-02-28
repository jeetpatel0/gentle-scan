import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  { name: "Liposomal Injectables", complexity: 5, focus: "Oncology, Antifungal, Anaesthesia" },
  { name: "Nanoemulsion & Emulsion Injectables", complexity: 4, focus: "Anaesthesia, Oncology, Vitamins" },
  { name: "Injectable Suspensions", complexity: 4, focus: "Corticosteroids, Oncology, Anaesthesia" },
  { name: "Peptide & Pre-Filled Syringe Systems", complexity: 5, focus: "Metabolic, Hormone therapy, Critical care" },
  { name: "Colloidal IV Solutions", complexity: 4, focus: "Iron deficiency, Renal anaemia" },
  { name: "Critical Care Liquid Injectables", complexity: 3, focus: "Cardiac ICU, Pain, Anti-infective" },
  { name: "Ophthalmic Suspensions & Gels", complexity: 3, focus: "Inflammatory eye, Post-operative care" },
];

function ComplexityDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={`w-2 h-2 rounded-full ${i <= level ? "bg-primary" : "bg-muted"}`} />
      ))}
    </div>
  );
}

export function Pipeline() {
  return (
    <section id="pipeline" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 08 — Product Pipeline</span>
          <h2 className="section-headline">A Focused Pipeline — Selected on Defined Criteria</h2>
          <p className="section-body mb-4">
            Every product was selected against three criteria: high global demand,
            high formulation complexity, and limited domestic development capability.
          </p>
          <p className="text-xs font-mono text-primary/60 uppercase tracking-wider mb-12">
            Full pipeline detail available under signed NDA
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-3">
            {categories.map((c, i) => (
              <div key={c.name} className="stat-card flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <div className="flex-1">
                  <h4 className="font-serif font-semibold">{c.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{c.focus}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Complexity</span>
                  <ComplexityDots level={c.complexity} />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="stat-card text-center">
              <div className="text-2xl font-serif font-bold gradient-text">32</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Products</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-2xl font-serif font-bold gradient-text">4</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Dev Phases</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-2xl font-serif font-bold gradient-text">7</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Categories</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-2xl font-serif font-bold gradient-text">4</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Reg. Pathways</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
