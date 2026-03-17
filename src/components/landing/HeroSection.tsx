import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{
      background: "linear-gradient(160deg, #0A0A0F 0%, #1B1642 40%, #2D2B6B 100%)",
    }}>
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 animate-drift" style={{
          background: "radial-gradient(circle, #4F46E5, transparent 70%)",
          filter: "blur(80px)",
        }} />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full opacity-15 animate-drift-reverse" style={{
          background: "radial-gradient(circle, #8B5CF6, transparent 70%)",
          filter: "blur(80px)",
        }} />
        <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] rounded-full opacity-10 animate-drift" style={{
          background: "radial-gradient(circle, #6366F1, transparent 70%)",
          filter: "blur(80px)",
        }} />
      </div>

      <div className="container-page relative z-10 pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-[680px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="label-overline text-indigo-300 mb-5 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            AI Search Visibility for B2B SaaS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-display text-white"
          >
            Your buyers are asking AI about your software.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-body-lg text-white/70 max-w-[580px] mx-auto"
          >
            We help B2B SaaS companies improve how they appear in ChatGPT, Perplexity, and AI search — by fixing the pages, facts, and content structures these systems rely on during evaluation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
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
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-5 text-sm text-white/40 max-w-[480px] mx-auto"
          >
            See how AI tools currently describe your company — where competitors are winning and what to fix first.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <svg
            className="w-5 h-5 text-white/20 animate-bounce-gentle"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
