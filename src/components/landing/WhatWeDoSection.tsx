import { motion } from "framer-motion";

const items = [
  "Understand how ChatGPT, Perplexity, and AI tools describe your product today",
  "Identify where competitors are appearing more strongly in buyer queries",
  "Improve high-intent comparison, alternatives, and use-case pages",
  "Clarify product facts, use cases, and differentiation for AI retrieval",
  "Strengthen content structure AI systems use to surface your brand",
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-warm">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[680px]"
        >
          <div className="accent-line mb-8" />
          <h2 className="heading-section text-foreground">
            We help B2B SaaS companies improve AI search visibility
          </h2>
          <p className="mt-6 text-body-lg text-muted-foreground font-sans">
            Most SaaS websites are written for human visitors and traditional SEO. But AI systems prefer content that is clear, factual, structured, comparison-friendly, and easy to retrieve and cite.
          </p>

          <p className="mt-4 text-body-lg text-muted-foreground font-sans">
            We identify the gaps between how your product is currently presented and what AI systems need to accurately surface and recommend your software during buyer research.
          </p>

          <div className="mt-10 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="text-body text-muted-foreground font-sans">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
