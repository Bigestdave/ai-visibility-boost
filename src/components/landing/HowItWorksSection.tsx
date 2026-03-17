import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Audit your AI visibility",
    desc: "We check how your company appears in ChatGPT, Perplexity, and AI tools for buyer-intent queries.",
  },
  {
    num: 2,
    title: "Identify the gaps",
    desc: "We find where your product is missing, misrepresented, or losing to competitors.",
  },
  {
    num: 3,
    title: "Implement the fixes",
    desc: "We build the pages, comparisons, and content structures that help AI systems surface your product.",
  },
  {
    num: 4,
    title: "Improve buyer visibility",
    desc: "Your product is more accurately represented in AI-driven research and evaluation.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-card">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="label-overline mb-4">Process</p>
          <h2 className="heading-section text-foreground">How it works</h2>
        </motion.div>

        {/* Desktop: 4 columns with connecting line */}
        <div className="mt-16 hidden md:block">
          <div className="relative grid grid-cols-4 gap-8">
            {/* Connecting line */}
            <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-border" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto relative z-10">
                  {step.num}
                </div>
                <h4 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h4>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="mt-12 md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-[23px] top-12 bottom-0 w-px border-l-2 border-dashed border-border" />
              )}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center">
                {step.num}
              </div>
              <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
              <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
