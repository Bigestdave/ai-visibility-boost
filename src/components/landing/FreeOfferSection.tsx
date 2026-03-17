import { motion } from "framer-motion";

const included = [
  "How AI tools currently describe your product",
  "Which competitors show up most often",
  "Key visibility and positioning gaps",
  "Missing pages or content structures",
  "Recommended next steps",
];

const FreeOfferSection = () => {
  return (
    <section className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-surface-dark text-surface-dark-foreground p-8 md:p-16 overflow-hidden relative"
        >
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-medium uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full mb-6">
                Limited to 5 snapshots per week
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.15] tracking-[-0.02em]">
                Get a Free AI Visibility Snapshot
              </h2>
              <p className="mt-6 text-base leading-relaxed text-surface-dark-foreground/70">
                We'll run a quick review of how your company appears across AI search for commercial-intent queries and send you a short teardown showing where you stand.
              </p>
              <a
                href="#form"
                className="mt-8 inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,102,255,0.25)] transition-all text-base"
              >
                Request Free Snapshot
              </a>
              <p className="mt-4 text-xs text-surface-dark-foreground/50">
                Short, practical, and focused on what matters most.
              </p>
            </div>

            {/* Mock report visual */}
            <div className="bg-surface-dark-foreground/5 backdrop-blur-sm rounded-xl border border-surface-dark-foreground/10 p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">C</span>
                </div>
                <span className="text-sm font-medium">AI Visibility Report</span>
              </div>
              <div className="space-y-3">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-surface-dark-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              {/* Mini chart bars */}
              <div className="mt-6 pt-6 border-t border-surface-dark-foreground/10">
                <p className="text-xs text-surface-dark-foreground/40 mb-3 font-mono uppercase tracking-widest">Visibility Score</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs w-24 text-surface-dark-foreground/60">Your Brand</span>
                    <div className="flex-1 bg-surface-dark-foreground/5 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "35%" }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs w-24 text-surface-dark-foreground/60">Competitor A</span>
                    <div className="flex-1 bg-surface-dark-foreground/5 rounded-full h-2">
                      <div className="bg-surface-dark-foreground/30 h-2 rounded-full" style={{ width: "72%" }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs w-24 text-surface-dark-foreground/60">Competitor B</span>
                    <div className="flex-1 bg-surface-dark-foreground/5 rounded-full h-2">
                      <div className="bg-surface-dark-foreground/30 h-2 rounded-full" style={{ width: "58%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeOfferSection;
