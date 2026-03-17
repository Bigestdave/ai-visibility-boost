import { motion } from "framer-motion";

const stats = [
  { value: "68", accent: "%", desc: "of B2B buyers use AI tools during the research phase of a purchase decision" },
  { value: "3", accent: "×", desc: "more likely to shortlist brands that appear clearly in AI-generated comparisons" },
  { value: "1 ", accent: "in 3", desc: "SaaS evaluations now involve at least one AI search query before a demo is booked" },
];

const WhyNowSection = () => {
  return (
    <section className="section-padding bg-dark">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[680px]"
        >
          <div className="w-10 h-[3px] bg-white/30 rounded-full mb-8" />
          <h2 className="heading-section text-white/30">
            Why companies are starting to care about AI search
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 max-w-[680px] space-y-0 divide-y divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-12 first:pt-0"
            >
              <p className="text-5xl md:text-6xl font-light tracking-tight font-serif">
                <span className="text-white/80">{stat.value}</span>
                <span className="text-primary">{stat.accent}</span>
              </p>
              <p className="mt-3 text-base text-white/50 max-w-[480px] font-sans">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-xs text-white/30 max-w-[680px] font-sans border-t border-white/10 pt-6"
        >
          *Figures are directional estimates based on observed buyer behavior trends
        </motion.p>
      </div>
    </section>
  );
};

export default WhyNowSection;
