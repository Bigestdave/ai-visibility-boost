import { motion } from "framer-motion";
import { Clock, ArrowRight, AlertTriangle, FileText, Star } from "lucide-react";

const included = [
  { icon: Clock, title: "Current AI description", desc: "How AI tools currently describe your product across major platforms" },
  { icon: ArrowRight, title: "Competitor comparison", desc: "Which competitors show up most often and where they're winning" },
  { icon: AlertTriangle, title: "Visibility gaps", desc: "Key positioning gaps and missing content structures" },
  { icon: FileText, title: "Missing pages", desc: "High-intent pages your site is missing that AI systems look for" },
  { icon: Star, title: "Recommended next steps", desc: "What to fix first, with clear priority ordering" },
  { icon: Star, title: "Short, practical teardown", desc: "Focused on highest-impact improvements — not a 40-page report" },
];

const FreeOfferSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-page">
        <div className="max-w-[860px] mx-auto rounded-2xl border border-border p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8">
              <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Free · No commitment</span>
            </div>

            <h2 className="heading-section text-foreground">
              Get a Free AI Visibility Snapshot
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-[560px]">
              We'll run a quick review of how your company appears across AI search for commercial-intent queries and send you a focused teardown of where you stand.
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border p-5 flex items-start gap-4"
              >
                <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
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
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity"
            >
              Request Free Snapshot
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="text-success font-medium">+ No pitch call required.</span>{" "}
              We review a limited number of companies each week to keep the analysis useful.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeOfferSection;
