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
    <section className="section-padding bg-background">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[680px]"
        >
          <h2 className="heading-section text-foreground">
            We help B2B SaaS companies improve AI search visibility
          </h2>
          <p className="mt-6 text-body-lg text-muted-foreground">
            Most SaaS websites are written for human visitors and traditional SEO. But AI systems prefer content that is clear, factual, structured, comparison-friendly, and easy to retrieve and cite.
          </p>
          <p className="mt-4 text-body-lg text-muted-foreground">
            We identify the gaps between how your product is currently presented and what AI systems need to accurately surface and recommend your software during buyer research.
          </p>

          <div className="mt-10 space-y-5">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <svg className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Visibility Check card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-[600px]"
        >
          <div className="rounded-2xl border border-border p-6 md:p-8 bg-background">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Live AI Visibility Check</p>
            <div className="space-y-3">
              {[
                { tool: "ChatGPT", status: "Partial", color: "text-amber-600 bg-amber-50" },
                { tool: "Perplexity", status: "Missing", color: "text-red-600 bg-red-50" },
                { tool: "Gemini", status: "Weak", color: "text-amber-700 bg-amber-50" },
                { tool: "Claude", status: "Missing", color: "text-red-600 bg-red-50" },
                { tool: "AI Overviews", status: "Partial", color: "text-amber-600 bg-amber-50" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-secondary/50 rounded-xl px-5 py-4">
                  <span className="text-sm font-medium text-foreground">{item.tool}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>

            {/* Competitor section */}
            <div className="mt-6 rounded-xl border border-border p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Your Competitor</p>
              <div className="space-y-3">
                {[
                  { tool: "ChatGPT", status: "Strong", color: "text-emerald-700 bg-emerald-50" },
                  { tool: "Perplexity", status: "Cited", color: "text-emerald-700 bg-emerald-50" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-secondary/50 rounded-xl px-5 py-4">
                    <span className="text-sm font-medium text-foreground">{item.tool}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">Example snapshot output — your results may vary</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
