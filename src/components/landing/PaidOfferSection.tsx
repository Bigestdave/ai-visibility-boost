import { motion } from "framer-motion";

const included = [
  "High-intent query and competitor review",
  "One or two comparison pages",
  "One product facts, use-case, or alternatives page",
  "FAQ and content structure improvements",
  "Recommendations for machine-readable formatting and structured data",
  "Internal linking and page clarity improvements",
  "Post-launch review",
];

const PaidOfferSection = () => {
  return (
    <section id="sprint" className="section-padding">
      <div className="container-page flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl w-full rounded-2xl border border-primary/10 bg-background/80 backdrop-blur-md p-8 md:p-12 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
        >
          <p className="label-mono mb-4">Fixed-Scope Sprint</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            AI Search Visibility Sprint
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            A fixed-scope implementation sprint for B2B SaaS companies that want to improve how AI systems interpret and cite their product.
          </p>

          <div className="mt-8 space-y-0">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">Starting at</p>
            <p className="text-5xl font-semibold text-foreground tracking-tight mt-1">$2,500</p>
          </div>

          <a
            href="#form"
            className="mt-8 w-full inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,102,255,0.12)] transition-all text-base"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PaidOfferSection;
