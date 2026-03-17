import { motion } from "framer-motion";

const queries = [
  "\"What's the best software for this use case?\"",
  "\"[Brand] vs [Competitor] — which is better?\"",
  "\"Best alternatives to [Brand] for agencies?\"",
  "\"Which tool is better for enterprise teams?\"",
  "\"How does [Brand] pricing compare?\"",
  "\"Is [Brand] good for startups vs enterprise?\"",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-background">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[680px]"
        >
          <h2 className="heading-section text-foreground">
            AI search is already influencing buying decisions
          </h2>
          <p className="mt-6 text-body-lg text-muted-foreground">
            When buyers research software today, they're no longer relying only on Google. They're asking AI tools direct buying questions — before they ever land on your site.
          </p>
        </motion.div>

        {/* Queries as italic lines with dividers */}
        <div className="mt-12 max-w-[680px]">
          {queries.map((query, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-t border-border"
            >
              <p className="py-5 text-base italic text-foreground">{query}</p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* Callout with left border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-[640px] border-l-2 border-border pl-6 py-2"
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            If your product is <span className="font-semibold text-foreground">missing, poorly explained, or outmatched by competitors</span> in those answers, you may be losing buyer trust before a prospect ever books a demo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
