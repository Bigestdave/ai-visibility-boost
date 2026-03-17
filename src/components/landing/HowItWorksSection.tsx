import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "We audit your AI visibility",
    desc: "We run your company through ChatGPT, Perplexity, and similar AI tools using the exact buyer-intent queries your prospects are asking.",
  },
  {
    num: 2,
    title: "We identify the gaps",
    desc: "We find where your product is missing, misunderstood, under-cited, or losing ground to competitors in AI-generated answers.",
  },
  {
    num: 3,
    title: "We implement the fixes",
    desc: "We build and improve the pages, comparisons, and content structures that help AI systems accurately understand and surface your product.",
  },
  {
    num: 4,
    title: "You improve buyer-facing visibility",
    desc: "Your team gets a stronger foundation for how your software is represented during AI-driven research — where modern shortlisting happens.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto"
        >
          <h2 className="heading-section text-foreground">How it works</h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            From free audit to production-ready pages — a clear, four-step process.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-14 max-w-[800px] mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center mb-5">
                <span className="text-xl font-light text-muted-foreground">{step.num}</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
              <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
