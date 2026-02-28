import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "<3%", label: "of Indian pharma has this capability" },
  { value: "32", label: "Products in pipeline" },
  { value: "19", label: "Revenue verticals" },
  { value: "$40B+", label: "Addressable market" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="section-container relative z-10 pt-20 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Lyosha Research Centre</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 max-w-4xl">
            Building India's Next Layer of{" "}
            <span className="gradient-text">Formulation Capability</span>
          </h1>
          <p className="section-body mb-10 max-w-2xl">
            An integrated complex formulation R&D platform, purpose-built for liposomal injectables,
            nano-delivery systems, sterile ophthalmics, and peptide therapeutics.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button variant="hero" size="lg" onClick={() => document.getElementById("capital")?.scrollIntoView({ behavior: "smooth" })}>
              Investment Thesis
            </Button>
            <Button variant="hero-outline" size="lg" onClick={() => document.getElementById("pipeline")?.scrollIntoView({ behavior: "smooth" })}>
              View Pipeline
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="stat-card"
            >
              <div className="text-2xl md:text-3xl font-serif font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
