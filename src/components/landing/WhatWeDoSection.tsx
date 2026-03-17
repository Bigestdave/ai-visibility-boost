import { motion } from "framer-motion";

const items = [
  { icon: "🔍", text: "Understand how ChatGPT, Perplexity, and AI search tools describe your product" },
  { icon: "⚡", text: "Identify where competitors are appearing more strongly" },
  { icon: "📄", text: "Improve high-intent comparison and alternatives pages" },
  { icon: "🎯", text: "Clarify product facts, use cases, and differentiation" },
  { icon: "🏗️", text: "Strengthen the content structure AI systems use to retrieve information" },
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="heading-section text-foreground max-w-3xl">
            We help B2B SaaS companies improve AI search visibility
          </h2>
          <p className="mt-6 text-body text-muted-foreground max-w-2xl">
            Most SaaS websites are written for human visitors and traditional SEO. But AI systems prefer content that is clear, factual, structured, comparison-friendly, and easy to retrieve and cite.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 border-b border-border"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <p className="text-sm leading-relaxed text-foreground pr-4">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
