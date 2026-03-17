import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-[100px] relative overflow-hidden" style={{
      background: "linear-gradient(160deg, #1B1642 0%, #2D2B6B 60%, #4F46E5 100%)",
    }}>
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[640px] mx-auto text-center"
        >
          <h2 className="heading-section text-white">
            See how AI is representing your company
          </h2>
          <p className="mt-5 text-xl text-white/70 leading-relaxed">
            Request a free AI Visibility Snapshot. We'll show you where your brand stands, where competitors are winning, and what to fix first.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center bg-white text-[#1B1642] px-9 py-4 rounded-lg font-semibold text-base shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:shadow-[0_0_50px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              Get My Free AI Visibility Snapshot
            </a>
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center text-white/80 hover:text-white font-semibold text-base gap-2 group transition-colors py-4"
            >
              Book a Call <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <p className="mt-4 text-sm text-white/40">
            Free · No commitment · Delivered in 3–5 business days
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
