import { motion } from "framer-motion";

const included = [
  "High-intent query and competitor review",
  "One or two comparison pages (vs competitor)",
  "Product facts, use-case, or alternatives page",
  "FAQ and content structure improvements",
  "Machine-readable formatting & structured data",
  "Internal linking and page clarity improvements",
  "Post-launch review and recommendations",
];

const PaidOfferSection = () => {
  return (
    <section id="sprint" className="section-padding bg-background">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[680px]"
        >
          <h2 className="heading-section text-muted-foreground/40">
            AI Search Visibility Sprint
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            A fixed-scope implementation sprint for B2B SaaS companies that want to improve how AI systems interpret and cite their product — not a retainer, not a mystery engagement.
          </p>
          <div className="mt-6 border-l-2 border-border pl-6 py-2">
            <p className="text-base text-muted-foreground">
              After the free snapshot, we implement the highest-priority improvements for your company in a focused sprint. <span className="font-semibold text-foreground">Most projects complete in 7–10 business days.</span>
            </p>
          </div>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 max-w-[560px] rounded-2xl border border-border p-8 md:p-10"
        >
          <p className="text-5xl md:text-6xl font-light text-muted-foreground/30 tracking-tight">$2,500</p>
          <p className="mt-2 text-sm text-muted-foreground">Fixed scope · No retainer · Starting price</p>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">What's included</p>
            <div className="space-y-4">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Book a Call
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              No retainer. No long-term commitment. One focused sprint.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaidOfferSection;
