import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "We audit your AI visibility",
    desc: "We check how your company appears in ChatGPT, Perplexity, and similar AI tools for buyer-intent queries.",
  },
  {
    num: "02",
    title: "We identify the gaps",
    desc: "We find where your product is missing, misunderstood, under-cited, or losing ground to competitors.",
  },
  {
    num: "03",
    title: "We implement the fixes",
    desc: "We build and improve the pages, comparisons, and content structures that help AI systems better understand and surface your product.",
  },
  {
    num: "04",
    title: "You improve buyer-facing visibility",
    desc: "Your team gets a stronger foundation for how your software is represented during AI-driven research and evaluation.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-accent">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="heading-section text-foreground"
        >
          How it works
        </motion.h2>

        <div className="mt-16 max-w-2xl">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[18px] top-10 bottom-0 w-px bg-border" />
              )}
              {/* Circle */}
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                <span className="text-xs font-mono font-semibold text-primary">{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
