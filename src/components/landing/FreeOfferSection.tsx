import { motion } from "framer-motion";

const included = [
  "How AI tools currently describe your product",
  "Which competitors show up most often",
  "Key visibility and positioning gaps",
  "Missing pages or content structures",
  "Prioritized next steps",
];

const FreeOfferSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-page">
        <div className="max-w-[860px] mx-auto rounded-2xl border border-border p-8 md:p-12 lg:p-16 bg-background">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary font-sans">Free · No commitment</span>
            </div>

            <h2 className="heading-section text-foreground">
              Get a Free AI Visibility Snapshot
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-[560px] font-sans">
              We'll run a quick review of how your company appears across AI search for commercial-intent queries and send you a focused teardown of where you stand.
            </p>
          </motion.div>

          <div className="mt-10 space-y-4">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base text-foreground font-sans">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-xl font-medium text-base hover:opacity-90 transition-opacity font-sans"
            >
              Request Free Snapshot
            </a>
            <p className="mt-4 text-sm text-muted-foreground font-sans">
              Short, practical, and focused on what matters most.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeOfferSection;
