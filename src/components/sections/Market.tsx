import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const platforms = [
  { name: "Liposomal & Nano-Delivery Systems", global: "Multi-Billion", india: "Largely import-dependent" },
  { name: "Complex Injectable Emulsions", global: "Multi-Billion", india: "Shortage-prone; high institutional demand" },
  { name: "Peptide & GLP-1 Injectables", global: "Multi-Billion (fastest growing)", india: "Nascent domestic supply" },
  { name: "Sterile Oncology Injectables", global: "Multi-Billion", india: "Significant import reliance" },
  { name: "Ophthalmic & Otic Formulations", global: "High-Value Niche", india: "Very limited domestic supply" },
  { name: "Colloidal IV Solutions (Iron)", global: "Multi-Billion", india: "Limited domestic complex supply" },
];

const stats = [
  { label: "Indian pharma with capability", value: 3, suffix: "%" },
  { label: "Import-dependent demand", value: 82, suffix: "%" },
  { label: "Products in pipeline", value: 32, suffix: "" },
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
          <p className="section-body mb-14">
            The global pharmaceutical market is shifting toward complex, high-barrier formulations.
            The demand drivers are structural — not cyclical.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-card text-center">
                <div className="text-3xl font-serif font-bold gradient-text mb-2">
                  {s.label === "Indian pharma with capability" ? "<" : ""}{s.value}{s.suffix}
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
