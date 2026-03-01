import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const platforms = [
  { name: "Liposomal & Nano-Delivery Systems", global: "Multi-Billion", india: "Largely import-dependent; minimal domestic supply" },
  { name: "Complex Injectable Emulsions & Suspensions", global: "Multi-Billion", india: "Shortage-prone; high institutional tender demand" },
  { name: "Peptide & GLP-1 Injectables", global: "Multi-Billion (fastest growing)", india: "Nascent domestic supply; rapidly growing demand" },
  { name: "Sterile Oncology Injectables", global: "Multi-Billion", india: "High national need; significant import reliance" },
  { name: "Ophthalmic & Otic Formulations", global: "High-Value Niche", india: "Very limited domestic complex formulation supply" },
  { name: "Colloidal IV Solutions (Iron Therapies)", global: "Multi-Billion", india: "High hospital consumption; limited domestic complex development capability" },
];

const stats = [
  { label: "Indian pharma with capability", value: 3, suffix: "%", prefix: "<" },
  { label: "Demand met through imports", value: 82, suffix: "%", prefix: "78–85" },
  { label: "Products in pipeline", value: 32, suffix: "", prefix: "" },
];

const drivers = [
  "The fastest-growing global pharma segments are complex injectables, ophthalmics, liposomal systems, peptides, and nano-delivery — not oral solid dosages. The market is moving to where LRC already operates.",
  "USFDA and EMA have formally documented persistent supply constraints in oncology injectables, sterile hospital products, and ophthalmic formulations — a long-term premium demand opportunity.",
  "The 2024–2036 patent cliff creates significant openings for complex generics via Para-IV, 505(b)(2), and IP-bypass routes — precisely the pathways LRC is designed to execute.",
  "India has exceptional manufacturing scale but a very limited number of dedicated complex formulation development platforms.",
  "Growing demand for GLP-1 peptides, iron infusion therapies, and oncology-supportive injectables presents multi-year commercial opportunities across all LRC platforms.",
];

function AnimatedBar({ value, delay }: { value: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-stat-bar"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export function Market() {
  return (
    <section id="market" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Section 05 — Market Opportunity</span>
          <h2 className="section-headline">A Structural Market Shift — Toward Exactly What We Build</h2>
          <p className="section-body mb-4">
            The global pharmaceutical market is shifting toward complex, high-barrier
            formulations. This is not a trend — it is a structural transition driven by
            the 2024–2036 patent cliff, escalating clinical demand in oncology and
            metabolic disease, and persistent documented shortages in sterile and
            specialised dosage forms.
          </p>
          <p className="section-body mb-14">
            LRC is positioned at the precise intersection of this global demand shift
            and India's current development gap in these categories.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h3 className="font-serif text-xl font-semibold mb-6">Key Demand Drivers</h3>
          <div className="space-y-3 mb-14">
            {drivers.map((d, i) => (
              <div key={i} className="stat-card flex gap-4 items-start">
                <span className="font-mono text-lg font-bold text-primary/30 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-card text-center">
                <div className="text-3xl font-serif font-bold gradient-text mb-2">
                  {s.prefix || ""}{!s.prefix ? s.value : ""}{s.suffix}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">{s.label}</div>
                <AnimatedBar value={s.value} delay={0.3 + i * 0.2} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h3 className="font-serif text-xl font-semibold mb-6">Platform-Level Market Value</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Platform</th>
                  <th className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Global Scale</th>
                  <th className="text-left py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">India Position</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((p) => (
                  <tr key={p.name} className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">{p.name}</td>
                    <td className="py-3 pr-4 text-primary font-mono text-xs">{p.global}</td>
                    <td className="py-3 text-muted-foreground text-xs">{p.india}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
