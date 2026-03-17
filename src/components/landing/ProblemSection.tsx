import { motion } from "framer-motion";

const queries = [
  "What's the best software for [use case]?",
  "[Brand] vs [Competitor]",
  "What are the best alternatives to [Brand]?",
  "Which tool is better for agencies vs enterprise?",
  "How does [Brand] pricing compare?",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding" style={{ background: "hsl(var(--background))" }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[680px] mx-auto"
        >
          <p className="label-overline mb-4">The Shift</p>
          <h2 className="heading-section text-foreground">
            AI search is already influencing buying decisions
          </h2>
          <p className="mt-5 text-body-lg text-muted-foreground">
            When buyers research software today, they don't rely on Google alone. They ask ChatGPT, Perplexity, Gemini, and AI search tools direct buying questions:
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {queries.map((query, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <span className="text-primary text-sm mt-0.5 flex-shrink-0">✦</span>
              <p className="text-sm font-medium text-foreground">"{query}"</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-xl font-medium text-foreground text-center max-w-[640px] mx-auto"
        >
          If your product is missing, poorly explained, or outmatched in those answers — you're{" "}
          <span className="text-primary">losing trust</span> before a prospect ever books a demo.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
