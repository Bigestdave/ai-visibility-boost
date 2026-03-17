import { motion } from "framer-motion";

const included = [
  "High-intent query and competitor review",
  "One or two comparison pages (vs competitor)",
  "Product facts, use-case, or alternatives page",
  "FAQ and content structure improvements",
  "Machine-readable formatting & structured data",
  "Internal linking and page clarity improvements",
  "Post-launch review and recommendations",
];

const PaidOfferSection = () => {
  return (
    <section id="sprint" className="section-padding bg-dark">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[680px]"
        >
          <div className="w-10 h-[3px] bg-white/30 rounded-full mb-8" />
          <h2 className="heading-section text-white">
            AI Search Visibility Sprint
          </h2>
          <p className="mt-4 text-body-lg text-white/60 font-sans">
            A fixed-scope implementation sprint for B2B SaaS companies that want to improve how AI systems interpret and cite their product — not a retainer, not a mystery engagement.
          </p>

          <div className="mt-8 border border-white/15 rounded-xl p-6">
            <p className="text-base text-white/70 leading-relaxed font-sans">
              After the free snapshot, we implement the highest-priority improvements for your company in a focused sprint.{" "}
              <span className="font-semibold text-white">Most projects complete in 7–10 business days.</span>
            </p>
          </div>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 max-w-[560px]"
        >
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-8 md:p-10">
            <p className="text-5xl md:text-6xl font-light text-white/80 tracking-tight font-serif">$2,500</p>
            <p className="mt-2 text-sm text-white/40 font-sans">Fixed scope · No retainer · Starting price</p>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6 font-sans">What's included</p>
            <div className="space-y-5">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/80 font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-medium text-base hover:opacity-90 transition-opacity w-full sm:w-auto font-sans"
            >
              Book a Call
            </a>
            <p className="mt-4 text-sm text-white/40 text-center sm:text-left font-sans">
              No retainer. No long-term commitment. One focused sprint.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaidOfferSection;
