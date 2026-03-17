import { motion } from "framer-motion";

const fitItems = [
  "Buyers compare multiple tools before booking demos",
  "Competitors are winning comparison-based attention in AI",
  "Site lacks \"vs,\" \"alternatives,\" or use-case pages",
  "Product is technical or nuanced to explain clearly",
  "You want to improve how AI tools represent your software",
];

const verticals = [
  "Sales and outbound software",
  "HR, payroll, and ops platforms",
  "Developer tools and infrastructure",
  "Productivity and workflow SaaS",
  "Any SaaS with clear, named competitors",
];

const WhoItsForSection = () => {
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
          <div className="accent-line mb-8" />
          <h2 className="heading-section text-foreground">Built for B2B SaaS teams</h2>
          <p className="mt-4 text-body-lg text-muted-foreground font-sans">
            Especially relevant if your buyers do comparison-based research before booking demos.
          </p>
        </motion.div>

        <div className="mt-12 max-w-[680px]">
          {/* Strong fit */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 font-sans">Strong fit if your team…</p>
            <div className="border-t border-border">
              {fitItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-border py-4 flex items-start gap-4"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <p className="text-base text-foreground font-sans">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Especially relevant */}
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 font-sans">Especially relevant for…</p>
            <div className="border-t border-border">
              {verticals.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-border py-4 flex items-start gap-4"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/40 flex-shrink-0 mt-2" />
                  <p className="text-base text-muted-foreground font-sans">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
