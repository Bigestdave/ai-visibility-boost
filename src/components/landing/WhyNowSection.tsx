import { motion } from "framer-motion";

const stats = [
  { value: "68%", desc: "of B2B buyers use AI tools during the research phase of a purchase decision" },
  { value: "3×", desc: "more likely to shortlist brands that appear clearly in AI-generated comparisons" },
  { value: "1 in 3", desc: "SaaS evaluations now involve at least one AI search query before a demo is booked" },
];

const WhyNowSection = () => {
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
          <h2 className="heading-section text-muted-foreground/30">
            Why companies are starting to care about AI search
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 max-w-[680px]"
        >
          <p className="text-body-lg text-muted-foreground">
            AI tools are becoming a permanent part of the B2B buyer journey. Prospects use them to compare competitors, validate claims, understand pricing, and narrow shortlists — often before they ever visit your site.
          </p>

          <div className="mt-8 border-l-2 border-border pl-6 py-2">
            <p className="text-base text-muted-foreground">
              This isn't about gaming AI. It's about making sure your company is{" "}
              <span className="font-semibold text-foreground">clearly represented where modern buying decisions are happening.</span>{" "}
              The companies that adapt early will be easier to understand, easier to trust, and easier to shortlist.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 max-w-[680px] space-y-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-5xl md:text-6xl font-light text-primary/60 tracking-tight">{stat.value}</p>
              <p className="mt-2 text-base text-muted-foreground max-w-[480px]">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-xs text-muted-foreground/50 max-w-[680px]"
        >
          *Figures are directional estimates based on observed buyer behavior trends
        </motion.p>
      </div>
    </section>
  );
};

export default WhyNowSection;
