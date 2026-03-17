import { motion } from "framer-motion";

const fitItems = [
  "Buyers compare multiple tools before booking demos",
  "Competitors are winning comparison-based attention",
  "Your site lacks 'vs,' 'alternatives,' or use-case pages",
  "Your product is technical, nuanced, or hard to explain",
  "You want to improve how AI tools represent your software",
];

const verticals = [
  "Sales software",
  "Outbound tools",
  "HR & Payroll",
  "Developer tools",
  "Productivity software",
  "Workflow & operations",
];

const WhoItsForSection = () => {
  return (
    <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[600px] mx-auto"
        >
          <p className="label-overline mb-4">Ideal Fit</p>
          <h2 className="heading-section text-foreground">Built for B2B SaaS teams</h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            This is the right fit if your buyers compare multiple tools before making a decision — and you want to control how your product appears in that process.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {/* Fit criteria card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              Strong fit if…
            </h4>
            <div className="mt-5 space-y-3.5">
              {fitItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[15px] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Verticals card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-accent rounded-2xl p-8"
          >
            <h4 className="text-lg font-semibold text-foreground">Especially relevant for</h4>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {verticals.map((v, i) => (
                <span
                  key={i}
                  className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground"
                >
                  {v}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
