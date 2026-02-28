import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="section-container text-center">
        <AnimatedSection>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-headline mx-auto">Interested in Learning More?</h2>
          <p className="section-body mx-auto mb-10">
            For detailed pipeline data, financial projections, and partnership discussions,
            please reach out directly. Full documentation is available under signed NDA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:contact@lyosharesearch.com">
                <Mail className="w-4 h-4 mr-2" />
                Investment Inquiry
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="mailto:contact@lyosharesearch.com">
                Partnership Inquiry
              </a>
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
            © 2026 Lyosha Research Centre. Confidential — For Qualified Investors Only.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/60 mt-2">
            All financial projections are indicative estimates. Detailed pipeline available under signed NDA.
          </p>
        </div>
      </div>
    </section>
  );
}
