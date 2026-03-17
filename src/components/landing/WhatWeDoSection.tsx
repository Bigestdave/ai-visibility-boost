import { motion } from "framer-motion";

const items = [
  "Understand how AI tools currently describe your product",
  "Identify where competitors appear more prominently",
  "Improve comparison and alternatives pages for high-intent queries",
  "Clarify product facts, use cases, and differentiation",
  "Strengthen content structure for AI retrieval and citation",
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-page">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-overline mb-4">What We Do</p>
            <h2 className="heading-section text-foreground">
              Make your product visible, accurate, and citeable in AI search
            </h2>
            <p className="mt-5 text-body-lg text-muted-foreground">
              Most SaaS websites are built for human visitors and traditional SEO. But AI systems prefer content that is clear, factual, structured, comparison-friendly, and easy to retrieve and cite. We close the gap.
            </p>

            <div className="mt-8 space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-body text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - AI Response mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl p-6 relative" style={{
              background: "#1B1642",
              boxShadow: "0 0 40px rgba(79, 70, 229, 0.15)",
            }}>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-indigo-400 text-xs">✦</span>
                <span className="text-xs text-indigo-400 font-medium">AI Response</span>
              </div>
              <div className="space-y-3">
                <div className="h-3 rounded-full bg-white/10 w-full" />
                <div className="h-3 rounded-full bg-white/10 w-[85%]" />
                <div className="h-3 rounded-full bg-indigo-400/40 w-[72%]" />
                <div className="h-3 rounded-full bg-white/10 w-[90%]" />
                <div className="h-3 rounded-full bg-white/10 w-[60%]" />
              </div>
              <div className="mt-4 flex items-center gap-1">
                <div className="w-2 h-4 bg-indigo-400 rounded-sm animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
