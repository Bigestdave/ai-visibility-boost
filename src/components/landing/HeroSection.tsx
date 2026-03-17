import { motion } from "framer-motion";

const aiTools = [
  { name: "ChatGPT", desc: "AI search queries" },
  { name: "Perplexity", desc: "Cited answers" },
  { name: "Gemini", desc: "Product comparisons" },
  { name: "Claude", desc: "Buyer research" },
  { name: "AI Overview", desc: "Google AI results" },
];

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-20 bg-background">
      <div className="container-page">
        <div className="max-w-[720px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-sans"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            New category · AI Search Optimization
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-display text-foreground"
          >
            Your buyers are asking{" "}
            <br className="hidden sm:block" />
            <em className="text-primary italic">AI</em> about your software.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-body-lg text-muted-foreground max-w-[600px] font-sans"
          >
            We help B2B SaaS companies improve how they appear in ChatGPT, Perplexity, and AI search — by fixing the pages, facts, and content structures AI systems rely on during software evaluation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-3"
          >
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-xl font-medium text-base hover:opacity-90 transition-opacity w-full sm:w-auto font-sans"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              Get My Free AI Visibility Snapshot
            </a>
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 rounded-xl font-medium text-base hover:bg-secondary transition-colors w-full sm:w-auto font-sans"
            >
              Book a Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-5 flex items-start gap-2 text-sm text-muted-foreground font-sans"
          >
            <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>See how AI tools describe your company, where competitors are winning, and what to fix first.</span>
          </motion.div>
        </div>

        {/* AI Tools strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 border-t border-border pt-8"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-10">
            {aiTools.map((tool, i) => (
              <div key={i} className="flex items-center gap-2 font-sans">
                <span className="text-sm font-semibold text-foreground">{tool.name}</span>
                <span className="text-xs text-muted-foreground">· {tool.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
