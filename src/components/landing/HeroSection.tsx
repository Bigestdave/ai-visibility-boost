import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="label-mono mb-6">AI Search Optimization for B2B SaaS</p>
          <h1 className="heading-display text-foreground">
            Your buyers are asking AI about your software.{" "}
            <span className="text-muted-foreground">
              Make sure it gives them the right answer.
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We help B2B SaaS companies improve how they appear in ChatGPT, Perplexity, and AI search by fixing the pages, facts, and content structures AI systems rely on during software evaluation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#form"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,102,255,0.12)] transition-all text-base"
            >
              Get a Free AI Visibility Snapshot
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center border border-border bg-background px-8 py-4 rounded-lg font-medium hover:bg-accent transition-colors text-base"
            >
              Book a Call
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            See how AI tools currently describe your company, where competitors are winning, and what to fix first.
          </p>
        </motion.div>

        {/* Hero Visual - Split Pane Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-xl border border-border overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
        >
          <div className="bg-secondary/50 px-4 py-2.5 border-b border-border flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            </div>
            <span className="text-xs text-muted-foreground ml-2 font-mono">ai-search-query</span>
          </div>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Left - Prompt */}
            <div className="p-6 md:p-8 bg-background">
              <p className="label-mono mb-4">User Query</p>
              <div className="bg-secondary rounded-lg p-4 text-sm leading-relaxed">
                <span className="text-muted-foreground">→</span>{" "}
                "Which CRM is better for a 50-person remote team — HubSpot or <span className="text-primary font-medium">[YourBrand]</span>?"
              </div>
              <div className="mt-4 bg-secondary rounded-lg p-4 text-sm leading-relaxed">
                <span className="text-muted-foreground">→</span>{" "}
                "What are the best alternatives to <span className="text-primary font-medium">[Competitor]</span> for startups?"
              </div>
            </div>
            {/* Right - Citations */}
            <div className="p-6 md:p-8 bg-background">
              <p className="label-mono mb-4">AI Citations</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-primary">YourBrand — Cited ✓</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                  <div className="w-5 h-5 rounded-full bg-muted flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Competitor A — Partial mention</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                  <div className="w-5 h-5 rounded-full bg-muted flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Competitor B — Not cited</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
