import { motion } from "framer-motion";

const queries = [
  "What's the best software for this use case?",
  "{{Brand}} vs {{Competitor}}",
  "What are the best alternatives to {{Brand}}?",
  "Which tool is better for agencies, startups, or enterprise teams?",
  "How does pricing compare?",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-accent">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="heading-section text-foreground max-w-3xl">
            AI search is already influencing buying decisions
          </h2>
          <p className="mt-6 text-body text-muted-foreground max-w-2xl">
            When buyers research software today, they're no longer relying only on Google. They're asking ChatGPT, Perplexity, Gemini, and AI search tools questions like:
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {queries.map((query, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-border bg-background p-5 hover:border-primary/30 transition-colors cursor-default"
            >
              <p className="label-mono mb-3">User Query</p>
              <p className="text-sm leading-relaxed text-foreground">"{query}"</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-body text-muted-foreground max-w-2xl"
        >
          If your product is missing, poorly explained, or outmatched by competitors in those answers, you may be losing trust before a prospect ever books a demo.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
