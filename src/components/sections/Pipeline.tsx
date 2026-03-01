import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  { name: "Liposomal Injectables", dosage: "Liposome dispersions, nano-encapsulated systems", complexity: 5, focus: "Oncology, Antifungal, Anaesthesia" },
  { name: "Nanoemulsion & Emulsion Injectables", dosage: "Sterile oil-in-water emulsions", complexity: 4, focus: "Anaesthesia, Oncology support, Vitamins" },
  { name: "Injectable Suspensions", dosage: "Sterile particle suspensions", complexity: 4, focus: "Corticosteroids, Oncology, Anaesthesia" },
  { name: "Peptide & Pre-Filled Syringe Systems", dosage: "Sterile peptide solutions, PFS", complexity: 5, focus: "Metabolic disease, Hormone therapy, Critical care" },
  { name: "Colloidal IV Solutions", dosage: "Iron-carbohydrate complexes, nanoparticle dispersions", complexity: 4, focus: "Iron deficiency, Renal anaemia" },
  { name: "Critical Care Liquid Injectables", dosage: "Sterile aqueous solutions", complexity: 3, focus: "Cardiac ICU, Pain, Anti-infective, Obstetrics" },
  { name: "Ophthalmic Suspensions & Gels", dosage: "Sterile ophthalmic / otic formulations", complexity: 3, focus: "Inflammatory eye conditions, Post-operative care" },
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
          <h2 className="section-headline">A Focused Pipeline — Selected on Three Defined Criteria</h2>
          <p className="section-body mb-4">
            Every product in the LRC pipeline was selected against three criteria:
            (1) high and sustained global demand in its therapeutic category,
            (2) high formulation complexity requiring specialised infrastructure and
            scientific expertise, and (3) limited or absent domestic development
            capability in India.
          </p>
          <p className="section-body mb-2">
            No product entered the pipeline on commercial interest alone.
          </p>
          <p className="text-xs font-mono text-primary/60 uppercase tracking-wider mb-12">
            Full pipeline detail and API-level data available under signed NDA
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-3">
            {categories.map((c) => (
              <div key={c.name} className="stat-card flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <div className="flex-1">
                  <h4 className="font-serif font-semibold">{c.name}</h4>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">{c.dosage}</p>
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
