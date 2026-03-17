import { motion } from "framer-motion";

const included = [
  "High-intent query and competitor review",
  "1–2 comparison pages (vs. competitors)",
  "Product facts, use-case, or alternatives page",
  "FAQ and content structure improvements",
  "Structured data and machine-readable formatting recommendations",
  "Internal linking and page clarity improvements",
  "Post-launch review",
];

const PaidOfferSection = () => {
  return (
    <section id="sprint" className="section-padding relative overflow-hidden" style={{
      background: "#0A0A0F",
    }}>
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none" style={{
        background: "radial-gradient(circle, #8B5CF6, transparent 70%)",
      }} />

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-indigo-400 mb-4">Paid Engagement</p>
            <h2 className="heading-section text-white">AI Search Visibility Sprint</h2>
            <p className="mt-3 text-xl text-white/60 leading-relaxed">
              A fixed-scope implementation sprint for B2B SaaS companies ready to improve how AI systems interpret and cite their product.
            </p>

            <div className="mt-9 space-y-4">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-[20px] p-10 text-center backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-indigo-400">Sprint Pricing</p>
            <div className="mt-4">
              <span className="text-base text-white/50">Starting at</span>
              <p className="text-5xl font-bold text-white tracking-tight mt-1">$2,500</p>
            </div>
            <p className="mt-3 text-sm text-white/40">Fixed scope · Typically 7–10 business days</p>

            <div className="my-7 border-t border-white/10" />

            <a
              href="#snapshot"
              className="block w-full bg-white text-[#1B1642] py-4.5 rounded-lg font-semibold text-base hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-px transition-all"
            >
              Book a Call
            </a>
            <p className="mt-3 text-[13px] text-white/40">
              Free snapshot first — no commitment required
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaidOfferSection;
