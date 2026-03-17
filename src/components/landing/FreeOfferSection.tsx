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
    <section className="py-20 md:py-[100px]" style={{ background: "hsl(var(--accent))" }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative max-w-[860px] mx-auto bg-card rounded-[20px] p-8 md:p-16 overflow-hidden"
          style={{
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 20px 60px rgba(79,70,229,0.08)",
          }}
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.08] pointer-events-none" style={{
            background: "radial-gradient(circle, #8B5CF6, transparent 70%)",
          }} />

          <div className="relative z-10 text-center">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.06em] px-3 py-1 rounded-full mb-4">
              Free
            </span>

            <h2 className="heading-section text-foreground">
              Get a Free AI Visibility Snapshot
            </h2>

            <p className="mt-4 text-body-lg text-muted-foreground max-w-[560px] mx-auto">
              We'll review how your company appears across AI search for buyer-intent queries and send you a focused teardown showing exactly where you stand.
            </p>

            <div className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-[480px] mx-auto text-left">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg className="w-[18px] h-[18px] text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#snapshot"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4.5 rounded-lg font-semibold text-base hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)] hover:-translate-y-px transition-all"
              >
                Get My Free AI Visibility Snapshot
              </a>
              <p className="mt-3 text-[13px] text-muted-foreground">
                No commitment · Delivered in 3–5 business days
              </p>
              <p className="mt-2 text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                We review a limited number of companies each week to keep the analysis personalized.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeOfferSection;
