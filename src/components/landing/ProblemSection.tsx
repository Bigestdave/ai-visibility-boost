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
    <section id="problem" className="section-padding bg-warm">
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
            AI search is already influencing buying decisions
          </h2>
          <p className="mt-6 text-body-lg text-muted-foreground font-sans">
            When buyers research software today, they're no longer relying only on Google. They're asking AI tools direct buying questions — before they ever land on your site.
          </p>
        </motion.div>

        {/* Queries with blue dots */}
        <div className="mt-12 max-w-[680px]">
          {queries.map((query, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-t border-border/60"
            >
              <div className="py-5 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <p className="text-base italic text-foreground font-sans">{query}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border/60" />
        </div>

        {/* Callout card with blue left border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-[560px]"
        >
          <div className="border-l-[3px] border-primary bg-background rounded-xl p-6 shadow-sm">
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              If your product is <span className="font-semibold text-foreground">missing, poorly explained, or outmatched by competitors</span> in those answers, you may be losing buyer trust before a prospect ever books a demo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
