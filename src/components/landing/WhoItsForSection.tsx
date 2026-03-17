import { motion } from "framer-motion";

const fitItems = [
  "Your buyers compare multiple tools before booking demos",
  "Competitors are winning comparison-based attention",
  "Your site lacks strong 'vs,' 'alternatives,' or use-case pages",
  "Your product is technical, nuanced, or hard to explain clearly",
  "You want to improve how AI tools represent your software during evaluation",
];

const categories = [
  "Sales software",
  "Outbound tools",
  "HR/payroll SaaS",
  "Developer tools",
  "Productivity software",
  "Workflow & operations platforms",
];

const WhoItsForSection = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="heading-section text-foreground">Built for B2B SaaS teams</h2>
          <p className="mt-6 text-body text-muted-foreground">This is a strong fit if:</p>
        </motion.div>

        <div className="mt-8 max-w-2xl space-y-4">
          {fitItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-foreground leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">Especially relevant for:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-muted-foreground"
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
